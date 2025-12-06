import React from "react";
import FilterBox from "./FilterBox";
import { Funnel } from "lucide-react";

const ReportFilters = () => {
    return (
        <div className="bg-[#0d1424] text-white p-6 rounded-xl border border-gray-700 w-full">
            <div className="flex items-center gap-2 mb-5">
                <h2 className="text-lg font-medium flex gap-1 items-center"><Funnel size={18} />Report Filters</h2>
            </div>


            <FilterBox />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">

                <div className="flex flex-col gap-1">
                    <label className="text-gray-400 text-sm">Transaction Type</label>
                    <select className="bg-[#0d1424] border border-gray-700 rounded-lg px-3 py-2 text-gray-300">
                        <option>All Types</option>
                        <option>Credit</option>
                        <option>Debit</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-400 text-sm">Category</label>
                    <select className="bg-[#0d1424] border border-gray-700 rounded-lg px-3 py-2 text-gray-300">
                        <option>All Categories</option>
                        <option>Food</option>
                        <option>Transport</option>
                        <option>Shopping</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-400 text-sm">Min Amount (₹)</label>
                    <input
                        type="number"
                        defaultValue="0"
                        className="bg-[#0d1424] border border-gray-700 rounded-lg px-3 py-2 text-gray-300"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-400 text-sm">Max Amount (₹)</label>
                    <input
                        type="text"
                        defaultValue="No limit"
                        className="bg-[#0d1424] border border-gray-700 rounded-lg px-3 py-2 text-gray-300"
                    />
                </div>
            </div>

            <div className="mt-6">
                <label className="text-gray-400 text-sm block mb-2">Show Columns</label>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-3 text-sm">
                    {["Date", "Description", "Category", "Type", "Amount", "Account"].map(
                        (item) => (
                            <label key={item} className="flex items-center gap-2 text-gray-300">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-blue-500"
                                />
                                {item}
                            </label>
                        )
                    )}
                </div>
            </div>

        </div>
    );
};

export default ReportFilters;
