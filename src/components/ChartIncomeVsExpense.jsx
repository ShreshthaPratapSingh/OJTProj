import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

function ChartIncomeVsExpense({ monthlyData }) {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

    const sortedKeys = Object.keys(monthlyData).sort().reverse()

    const lastSix = sortedKeys.slice(-6)
    const labels = lastSix.map(key => {
        const [year, month] = key.split('-')
        return `${monthNames[month - 1]} ${year}`
    })

    const incomeValues = lastSix.map(ele => monthlyData[ele].income)
    const expenseValues = lastSix.map(ele => monthlyData[ele].expense)
    const BarData = {
        labels: labels,
        datasets: [
            {
                label: "Income",
                data: incomeValues,
                backgroundColor: "#2e994a"
            },
            {
                label: "Expenses",
                data: expenseValues,
                backgroundColor: "red"
            }
        ]
    }
    const option = {
        responsive: true,
        maintainAspectRatio: false,
    }
    return (
        <div className="bg-[#111727] px-5 py-5 rounded-2xl border border-gray-700 gap-5 w-full my-10">
            <div className="h text-white mb-4">
                Income Vs Expense Trend(Last 6 months)
            </div>
            <div className="h-64 sm:h-80 md:h-96">
                <Bar options={option} data={BarData} />
            </div>
        </div>
    )
}

export default ChartIncomeVsExpense
