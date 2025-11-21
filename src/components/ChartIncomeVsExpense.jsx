import React from 'react'
import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'

function ChartIncomeVsExpense() {
  return (
    <div className="bg-[#111727] px-5 py-5 rounded-2xl border border-gray-700 flex items-center gap-5 w-full my-10">
      <div className="h text-white">
        Income Vs Expense Trend(Last 6 months)
      </div>
    </div>
  )
}

export default ChartIncomeVsExpense
