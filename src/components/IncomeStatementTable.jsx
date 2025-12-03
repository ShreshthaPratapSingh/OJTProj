import React from "react";
import { useState, useEffect } from "react";
import fetchUserData from "../utils/datafetch";

function IncomeStatement( {totalIncome, totalExpense} ) {

    const [data, setData] = useState([])
    const [incomeType, setIncomeType] = useState([])
    const [expenseType, setExpenseType] = useState([])

    function groupByCategory(arr) {
        const map = {};

        arr.forEach(item => {
            if (!map[item.category]) {
                map[item.category] = 0;
            }
            map[item.category] += Number(item.amount);
        });

        return Object.entries(map).map(([category, total]) => ({
            category,
            total
        }));
    }


    useEffect(() => {
        async function getData() {
            const response = await fetchUserData()
            setData(response)
        }
        getData()

    }, [])

    useEffect(() => {
        setIncomeType(data.filter((x) => x.type === "Credit"))
        setExpenseType(data.filter((x) => x.type === "Debit"))
        console.log(incomeType, expenseType)
    }, [data])

    const groupedIncome = groupByCategory(incomeType);
    const groupedExpense = groupByCategory(expenseType);
    let incomeTotal = totalIncome
    let expenseTotal = totalExpense
    return (
        <div className="bg-[#0e1424] text-white p-6 rounded-xl mx-auto border border-gray-700 w-full">
            <div className="flex justify-between mb-6">
                <h2 className="text-lg font-semibold">Income Statement</h2>
                <span className="text-gray-400 text-sm">
                    Period: 22/10/2025 - 22/11/2025
                </span>
            </div>

            <div className="mb-6">
                <h3 className="font-semibold text-md mb-3">Revenue</h3>

                {groupedIncome.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between border-b border-gray-700 py-2"
                    >
                        <span className="text-gray-300">{item.category}</span>
                        <span>₹{item.total}</span>
                    </div>
                ))}

                <div className="flex justify-between py-3">
                    <span className="font-semibold">Total Revenue</span>
                    <span className="font-semibold text-green-400">{`₹${incomeTotal}`}</span>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-md mb-3">Expenses</h3>
                {groupedExpense.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between border-b border-gray-700 py-2"
                    >
                        <span className="text-gray-300">{item.category}</span>
                        <span>₹{item.total}</span>
                    </div>
                ))}


                <div className="flex justify-between py-3">
                    <span className="font-semibold">Total Expenses</span>
                    <span className="font-semibold text-red-400">{`₹${expenseTotal}`}</span>
                </div>
            </div>
            <div className={`total w-full ${incomeTotal>expenseTotal?"bg-green-400/10 border border-green-400":"bg-red-400/10 border border-red-400"} p-2 rounded flex justify-between`}>
                <div className={`${incomeTotal>=expenseTotal?"text-green-400":"text-red-400"} font-semibold text-xl`}>
                    {incomeTotal>expenseTotal?"Net Profit":"Net Loss"}
                    <div className="text-gray-500 text-sm">{`${incomeTotal>=expenseTotal?"Profit margin: ":"Loss margin: "} ${incomeTotal>=expenseTotal?(((incomeTotal-expenseTotal)/incomeTotal)*100).toFixed(2):(((expenseTotal-incomeTotal)/expenseTotal)*100).toFixed(2)}%`}</div>
                </div>
                <div className={`${incomeTotal>=expenseTotal?"text-green-400":"text-red-400"} font-semibold text-2xl`}>{incomeTotal>=expenseTotal?`₹${incomeTotal-expenseTotal}`:`₹${expenseTotal-incomeTotal}`}</div>
            </div>
        </div>
    );
}

export default IncomeStatement;
