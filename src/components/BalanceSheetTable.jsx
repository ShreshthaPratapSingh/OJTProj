import React from "react";
import { Check } from "lucide-react";

function BalanceSheet() {
    return (
        <div className="bg-[#0e1424] text-white p-6 rounded-xl mx-auto border border-gray-700 w-full">
            <div className="text-gray-500 text-xl mb-8">
                Balance Sheet
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                <div>
                    <h2 className="text-sm font-bold tracking-wide text-blue-400 mb-4">ASSETS</h2>

                    <div className="mb-6">
                        <h3 className="font-semibold mb-3">Current Assets</h3>

                        <div className="flex justify-between border-b border-gray-700 py-2">
                            <span className="text-gray-300">Cash</span>
                            <span>₹10,235.75</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 py-2">
                            <span className="text-gray-300">Accounts Receivable</span>
                            <span>₹15,000.00</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 py-2">
                            <span className="text-gray-300">Inventory</span>
                            <span>₹25,000.00</span>
                        </div>

                        <div className="flex justify-between py-2">
                            <span className="font-semibold">Total Current Assets</span>
                            <span className="font-semibold">₹50,235.75</span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="font-semibold mb-3">Fixed Assets</h3>

                        <div className="flex justify-between border-b border-gray-700 py-2">
                            <span className="text-gray-300">Equipment</span>
                            <span>₹50,000.00</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 py-2">
                            <span className="text-gray-300">Furniture</span>
                            <span>₹20,000.00</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 py-2">
                            <span className="text-gray-300">Vehicles</span>
                            <span>₹80,000.00</span>
                        </div>

                        <div className="flex justify-between py-2">
                            <span className="font-semibold">Total Fixed Assets</span>
                            <span className="font-semibold">₹1,50,000.00</span>
                        </div>
                    </div>

                    <div className="border-t border-blue-600 mt-4 pt-3">
                        <div className="flex justify-between text-xl">
                            <span className="font-bold">TOTAL ASSETS</span>
                            <span className="font-bold text-blue-400">₹2,00,235.75</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm font-bold tracking-wide text-red-400 mb-4">LIABILITIES</h2>

                    <div className="mb-6">
                        <h3 className="font-semibold mb-3">Current Liabilities</h3>

                        <div className="flex justify-between border-b border-gray-700 py-2">
                            <span className="text-gray-300">Accounts Payable</span>
                            <span>₹12,000.00</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 py-2">
                            <span className="text-gray-300">Short-term Loans</span>
                            <span>₹8,000.00</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 py-2">
                            <span className="text-gray-300">Taxes Payable</span>
                            <span>₹5,000.00</span>
                        </div>

                        <div className="flex justify-between py-2">
                            <span className="font-semibold">Total Current Liabilities</span>
                            <span className="font-semibold">₹25,000.00</span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="font-semibold mb-3">Long-term Liabilities</h3>

                        <div className="flex justify-between border-b border-gray-700 py-2">
                            <span className="text-gray-300">Long-term Loans</span>
                            <span>₹50,000.00</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 py-2">
                            <span className="text-gray-300">Mortgage</span>
                            <span>₹1,00,000.00</span>
                        </div>

                        <div className="flex justify-between py-2">
                            <span className="font-semibold">Total Long-term Liabilities</span>
                            <span className="font-semibold">₹1,50,000.00</span>
                        </div>
                    </div>

                    <div className="mb-10">
                        <div className="flex justify-between">
                            <span className="font-semibold">Total Liabilities</span>
                            <span className="font-semibold">₹1,75,000.00</span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-sm font-bold tracking-wide text-green-400 mb-3">EQUITY</h2>

                        <div className="flex justify-between border-b border-gray-700 py-2">
                            <span className="text-gray-300">Owner's Equity</span>
                            <span>₹25,235.75</span>
                        </div>
                    </div>

                    <div className="border-t border-green-600 pt-3">
                        <div className="flex justify-between text-xl">
                            <span className="font-bold">TOTAL LIABILITIES + EQUITY</span>
                            <span className="font-bold text-green-400">₹2,00,235.75</span>
                        </div>
                    </div>

                </div>
            </div>
                <div className="bg-green-400/10 border border-green-400 text-green-300 p-4 rounded-xl my-8">
                    Balance Sheet is balanced! Assets = Liabilites + Equity
                </div>
        </div>
    );
}

export default BalanceSheet;
