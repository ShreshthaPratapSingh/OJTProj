import React, { useEffect, useState } from 'react'
import SummaryCards from './SummaryCards'
import MonthSummary from './MonthSummary'
import ChartIncomeVsExpense from './ChartIncomeVsExpense'
import { Wallet, TrendingUp, TrendingDown, Receipt } from 'lucide-react'
import fetchUserData from '../utils/datafetch'

function Dashboard() {

  const [data, setData] = useState([])
  const [monthlyData, setMonthlyData] = useState({})

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
      console.log("Monthly Data:", response);
    }
  }, [data]);

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  const currentKey = `${currentYear}-${currentMonth}`;

  const totalIncome = data.filter(item => item.type === "Credit").reduce((acc, item) => acc + Number(item.amount), 0)
  const totalExpense = data.filter(item => item.type === "Debit").reduce((acc, item) => acc + Number(item.amount), 0)

  const totalBalance = totalIncome - totalExpense
  return (
    <div className='mt-15'>
      <div className="head text-white text-3xl">
        Dashboard
        <div className="subhead text-slate-500 text-xs">
          Welcome back! Here's your financial overview
        </div>
      </div>
      <div className="CardsContainer my-8 flex gap-2 w-full">
        <SummaryCards Icon={Wallet} IconColor={"#264e9a"} title={"Total Balance"} amount={`₹${totalBalance}`} amountColor={"#3bbf5e"} IconBGColor={"#15205a"} />
        <SummaryCards Icon={TrendingUp} IconColor={"#167939"} title={"Total Income"} amount={`₹${totalIncome}`} amountColor={"#3bbf5e"} IconBGColor={"#0f2719"} />
        <SummaryCards Icon={TrendingDown} IconColor={"#a7252e"} title={"Total Expenses"} amount={`₹${totalExpense}`} amountColor={"#f16374"} IconBGColor={"#420a0a"} />
        <SummaryCards Icon={Receipt} IconColor={"#2752a8"} title={"Transactions"} amount={data.length} amountColor={"#4b9eee"} IconBGColor={"#15205a"} />
      </div>
      <div>
        {monthlyData[currentKey] && (
          <MonthSummary
            income={`₹${monthlyData[currentKey].income}`}
            expenses={`₹${monthlyData[currentKey].expense}`}
            netBalance={`₹${monthlyData[currentKey].income - monthlyData[currentKey].expense}`}
          />
        )}

      </div>
      <div>
        <ChartIncomeVsExpense />
      </div>
    </div>
  )
}

export default Dashboard
