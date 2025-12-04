import React, { useEffect, useState } from "react";
import fetchUserData from "../utils/datafetch";
import FilterBox from "./FilterBox";

function IncomeStatement({ totalIncome, totalExpense }) {

    const [allData, setAllData] = useState([]); 
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetchUserData();
            setAllData(response);
            setFilteredData(response);
        }
        getData();
    }, []);

    function applyFilter({ start, end }) {
        const filtered = allData.filter(item => {
            return item.date >= start && item.date <= end;
        });
        setFilteredData(filtered);
    }

    const incomeType = filteredData.filter(x => x.type === "Credit");
    const expenseType = filteredData.filter(x => x.type === "Debit");

    function groupByCategory(arr) {
        const map = {};
        arr.forEach(item => {
            if (!map[item.category]) map[item.category] = 0;
            map[item.category] += Number(item.amount);
        });
        return Object.entries(map).map(([category, total]) => ({ category, total }));
    }

    const groupedIncome = groupByCategory(incomeType);
    const groupedExpense = groupByCategory(expenseType);

    const incomeTotal = incomeType.reduce((a, b) => a + Number(b.amount), 0);
    const expenseTotal = expenseType.reduce((a, b) => a + Number(b.amount), 0);

    return (
        <div className="w-full">

            <FilterBox onFilter={applyFilter} />

            <div className="bg-[#0e1424] text-white p-6 rounded-xl mx-auto border border-gray-700 w-full mt-6">
                <div className="flex justify-between mb-6">
                    <h2 className="text-lg font-semibold">Income Statement</h2>
                    <span className="text-gray-400 text-sm">
                        Showing filtered results
                    </span>
                </div>

                <div className="mb-6">
                    <h3 className="font-semibold text-md mb-3">Revenue</h3>

                    {groupedIncome.map((item, idx) => (
                        <div key={idx} className="flex justify-between border-b border-gray-700 py-2">
                            <span>{item.category}</span>
                            <span>₹{item.total}</span>
                        </div>
                    ))}

                    <div className="flex justify-between py-3">
                        <span className="font-semibold">Total Revenue</span>
                        <span className="font-semibold text-green-400">₹{incomeTotal}</span>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-md mb-3">Expenses</h3>

                    {groupedExpense.map((item, idx) => (
                        <div key={idx} className="flex justify-between border-b border-gray-700 py-2">
                            <span>{item.category}</span>
                            <span>₹{item.total}</span>
                        </div>
                    ))}

                    <div className="flex justify-between py-3">
                        <span className="font-semibold">Total Expenses</span>
                        <span className="font-semibold text-red-400">₹{expenseTotal}</span>
                    </div>
                </div>

                <div className={`mt-4 p-3 rounded-xl flex justify-between 
                    ${incomeTotal >= expenseTotal ? "bg-green-400/10 border border-green-400" : "bg-red-400/10 border border-red-400"}`}>

                    <div className="text-xl font-semibold">
                        {incomeTotal >= expenseTotal ? "Net Profit" : "Net Loss"}
                    </div>

                    <div className="text-2xl font-bold">
                        ₹{Math.abs(incomeTotal - expenseTotal)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IncomeStatement;
