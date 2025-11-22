import React from 'react'
import SearchBox from './SearchBox'

function Transactions() {
    return (
        <div className='mt-15 flex flex-col w-3/4'>
            <div className="head text-white text-3xl">
                <span className='font-bold'>Transactions</span>
                <div className="subhead text-slate-500 text-xs">
                    Manage your income and expense records
                </div>
            </div>
            <SearchBox />
            <div className="transHistory mt-6 w-full">
                <div className="subhead text-slate-500 text-xs">
                    Showing 12 of 12 transactions
                </div>
                <div className="table text-white w-full mt-3">
                    <table className="w-full text-sm text-left text-gray-300">
                        <thead className="text-xs uppercase bg-[#111827] text-gray-400">
                            <tr>
                                <th className="px-4 py-3 w-[15%]">Date</th>
                                <th className="px-4 py-3 w-[25%]">Description</th>
                                <th className="px-4 py-3 w-[15%]">Category</th>
                                <th className="px-4 py-3 w-[10%]">Type</th>
                                <th className="px-4 py-3 w-[15%] text-right">Amount</th>
                                <th className="px-4 py-3 w-[10%] text-right">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-800">
                            <tr className="bg-[#0f1624]">
                                <td className="px-4 py-3">Nov 15, 2025</td>
                                <td className="px-4 py-3">Monthly salary</td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-gray-700 text-gray-200">Salary</span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-green-900 text-green-300">income</span>
                                </td>
                                <td className="px-4 py-3 text-green-400 font-semibold text-right">+₹5,000.00</td>
                                <td className="px-4 py-3 flex justify-end gap-3">
                                    <button className="hover:text-blue-400">✏️</button>
                                    <button className="hover:text-red-400">🗑️</button>
                                </td>
                            </tr>
                            <tr className="bg-[#0f1624]">
                                <td className="px-4 py-3">Nov 14, 2025</td>
                                <td className="px-4 py-3">Lunch at restaurant</td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-gray-700 text-gray-200">Food & dining</span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-red-900 text-red-300">expense</span>
                                </td>
                                <td className="px-4 py-3 text-red-400 font-semibold text-right">-₹45.50</td>
                                <td className="px-4 py-3 flex justify-end gap-3">
                                    <button className="hover:text-blue-400">✏️</button>
                                    <button className="hover:text-red-400">🗑️</button>
                                </td>
                            </tr>
                            <tr className="bg-[#0f1624]">
                                <td className="px-4 py-3">Nov 13, 2025</td>
                                <td className="px-4 py-3">Gas refill</td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-gray-700 text-gray-200">Transportation</span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-red-900 text-red-300">expense</span>
                                </td>
                                <td className="px-4 py-3 text-red-400 font-semibold text-right">-₹60.00</td>
                                <td className="px-4 py-3 flex justify-end gap-3">
                                    <button className="hover:text-blue-400">✏️</button>
                                    <button className="hover:text-red-400">🗑️</button>
                                </td>
                            </tr>
                            <tr className="bg-[#0f1624]">
                                <td className="px-4 py-3">Nov 12, 2025</td>
                                <td className="px-4 py-3">Web development project</td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-gray-700 text-gray-200">Freelance</span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-green-900 text-green-300">income</span>
                                </td>
                                <td className="px-4 py-3 text-green-400 font-semibold text-right">+₹800.00</td>
                                <td className="px-4 py-3 flex justify-end gap-3">
                                    <button className="hover:text-blue-400">✏️</button>
                                    <button className="hover:text-red-400">🗑️</button>
                                </td>
                            </tr>
                            <tr className="bg-[#0f1624]">
                                <td className="px-4 py-3">Nov 11, 2025</td>
                                <td className="px-4 py-3">Clothing purchase</td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-gray-700 text-gray-200">Shopping</span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-red-900 text-red-300">expense</span>
                                </td>
                                <td className="px-4 py-3 text-red-400 font-semibold text-right">-₹120.00</td>
                                <td className="px-4 py-3 flex justify-end gap-3">
                                    <button className="hover:text-blue-400">✏️</button>
                                    <button className="hover:text-red-400">🗑️</button>
                                </td>
                            </tr>
                            <tr className="bg-[#0f1624]">
                                <td className="px-4 py-3">Nov 10, 2025</td>
                                <td className="px-4 py-3">Electricity bill</td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-gray-700 text-gray-200">Bills and utilities</span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-red-900 text-red-300">expense</span>
                                </td>
                                <td className="px-4 py-3 text-red-400 font-semibold text-right">-₹150.00</td>
                                <td className="px-4 py-3 flex justify-end gap-3">
                                    <button className="hover:text-blue-400">✏️</button>
                                    <button className="hover:text-red-400">🗑️</button>
                                </td>
                            </tr>
                            <tr className="bg-[#0f1624]">
                                <td className="px-4 py-3">Nov 9, 2025</td>
                                <td className="px-4 py-3">Movie tickets</td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-gray-700 text-gray-200">Entertainment</span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-red-900 text-red-300">expense</span>
                                </td>
                                <td className="px-4 py-3 text-red-400 font-semibold text-right">-₹35.00</td>
                                <td className="px-4 py-3 flex justify-end gap-3">
                                    <button className="hover:text-blue-400">✏️</button>
                                    <button className="hover:text-red-400">🗑️</button>
                                </td>
                            </tr>
                            <tr className="bg-[#0f1624]">
                                <td className="px-4 py-3">Nov 8, 2025</td>
                                <td className="px-4 py-3">Divident payment</td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-gray-700 text-gray-200">Investment</span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-green-900 text-green-300">income</span>
                                </td>
                                <td className="px-4 py-3 text-green-400 font-semibold text-right">+₹200.00</td>
                                <td className="px-4 py-3 flex justify-end gap-3">
                                    <button className="hover:text-blue-400">✏️</button>
                                    <button className="hover:text-red-800">🗑️</button>
                                </td>
                            </tr>
                            <tr className="bg-[#0f1624]">
                                <td className="px-4 py-3">Nov 7, 2025</td>
                                <td className="px-4 py-3">Grocery Shopping</td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-gray-700 text-gray-200">Food & dining</span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-red-900 text-red-300">expense</span>
                                </td>
                                <td className="px-4 py-3 text-red-400 font-semibold text-right">-₹28.76</td>
                                <td className="px-4 py-3 flex justify-end gap-3">
                                    <button className="hover:text-blue-400">✏️</button>
                                    <button className="hover:text-red-400">🗑️</button>
                                </td>
                            </tr>
                            <tr className="bg-[#0f1624]">
                                <td className="px-4 py-3">Nov 15, 2025</td>
                                <td className="px-4 py-3">Monthly salary</td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-gray-700 text-gray-200">Salary</span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-green-900 text-green-300">income</span>
                                </td>
                                <td className="px-4 py-3 text-green-400 font-semibold text-right">₹5,000.00</td>
                                <td className="px-4 py-3 flex justify-end gap-3">
                                    <button className="hover:text-blue-400">✏️</button>
                                    <button className="hover:text-red-400">🗑️</button>
                                </td>
                            </tr>
                            <tr className="bg-[#0f1624]">
                                <td className="px-4 py-3">Nov 6, 2025</td>
                                <td className="px-4 py-3">Doctor Consultation</td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-gray-700 text-gray-200">Healthcare</span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-red-900 text-red-300">expense</span>
                                </td>
                                <td className="px-4 py-3 text-red-400 font-semibold text-right">-₹75.00</td>
                                <td className="px-4 py-3 flex justify-end gap-3">
                                    <button className="hover:text-blue-400">✏️</button>
                                    <button className="hover:text-red-400">🗑️</button>
                                </td>
                            </tr>
                            <tr className="bg-[#0f1624]">
                                <td className="px-4 py-3">Oct 15, 2025</td>
                                <td className="px-4 py-3">Monthly salary</td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-gray-700 text-gray-200">Salary</span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-0.5 rounded-full bg-green-900 text-green-300">income</span>
                                </td>
                                <td className="px-4 py-3 text-green-400 font-semibold text-right">₹5,000.00</td>
                                <td className="px-4 py-3 flex justify-end gap-3">
                                    <button className="hover:text-blue-400">✏️</button>
                                    <button className="hover:text-red-400">🗑️</button>
                                </td>
                            </tr>

                            
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Transactions
