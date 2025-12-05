import React from 'react'
import { useState, useEffect } from 'react'
import Average from './Average'
import { TrendingUp, TrendingDown, ChartColumn } from 'lucide-react'
import PieCard from './PieCard'
import fetchUserData from '../utils/datafetch'
import ChartIncomeVsExpense from './ChartIncomeVsExpense'

function Analytics() {

    const [monthlyData, setMonthlyData] = useState({})
    const [avgIncome, setAvgIncome] = useState(0)
    const [avgExpense, setAvgExpense] = useState(0)

    function groupTransactionsByMonth(transactions) {
        const monthlySummary = {}

        transactions.forEach(element => {
            const date = new Date(element.date)
            const month = date.getMonth()
            const year = date.getFullYear()
            const key = `${year}-${month + 1}`

            if (!monthlySummary[key]) {
                monthlySummary[key] = { income: 0, expense: 0, transactions: [] }
            }

            if (element.type === "Credit") {
                monthlySummary[key].income += Number(element.amount)
            }
            else if (element.type === "Debit") {
                monthlySummary[key].expense += Number(element.amount)
            }

            monthlySummary[key].transactions.push(element)
        });
        return monthlySummary
    }

    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetchUserData()
            setData(response)
        }
        getData()
    }, [])

    useEffect(() => {
        if (data.length > 0) {
            const response = groupTransactionsByMonth(data);
            setMonthlyData(response);
        }
    }, [data]);

    useEffect(() => {
        if (!monthlyData || Object.keys(monthlyData).length === 0) return;

        const sortedMonths = Object.keys(monthlyData)
            .sort((a, b) => new Date(b) - new Date(a))
            .slice(0, 6);

        const incomes = sortedMonths.map(key => monthlyData[key].income);
        const expenses = sortedMonths.map(key => monthlyData[key].expense);

        const avgInc = incomes.reduce((a, b) => a + b, 0) / incomes.length;
        const avgExp = expenses.reduce((a, b) => a + b, 0) / expenses.length;

        setAvgIncome(avgInc);
        setAvgExpense(avgExp);
    }, [monthlyData]);

    return (
        <div className='w-full'>
            <div className="head text-white text-3xl">
                Analytics
                <div className="subhead text-slate-500 text-xs">
                    Detailed insights into your financial patters
                </div>
            </div>
            <div className="avgCont mt-5 grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
                <Average Icon={TrendingUp} iconColor={'green'} Amount={`₹${avgIncome}`} Heading={'Average Icome'} subhead={'Per month(last 6 months)'} className={"w-full"} />
                <Average Icon={TrendingDown} iconColor={'red'} Amount={`₹${avgExpense}`} Heading={'Average Expense'} subhead={'Per month(last 6 months)'} className={"w-full"} />
                <Average Icon={ChartColumn} iconColor={'blue'} Amount={`${(100 - (avgExpense / avgIncome) * 100).toFixed(2)}%`} Heading={'Savings Rate'} subhead={'Of total income'} className={"w-full"} />
            </div>
            <div className="chart w-full mt-4">
                < ChartIncomeVsExpense monthlyData={monthlyData} />
            </div>
            <div className="piecard mt-4">
                <PieCard />
            </div>
        </div>
    )
}

export default Analytics
