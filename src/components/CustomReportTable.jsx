import React from "react";

const CustomReportTable = () => {
  const rows = [
    { date: "Nov 15, 2025", desc: "Monthly salary", category: "Salary", type: "income", amount: "+₹5,000.00" },
    { date: "Nov 14, 2025", desc: "Lunch at restaurant", category: "Food & Dining", type: "expense", amount: "-₹45.50" },
    { date: "Nov 13, 2025", desc: "Gas refill", category: "Transportation", type: "expense", amount: "-₹60.00" },
    { date: "Nov 12, 2025", desc: "Web development project", category: "Freelance", type: "income", amount: "+₹800.00" },
    { date: "Nov 11, 2025", desc: "Clothing purchase", category: "Shopping", type: "expense", amount: "-₹120.00" },
    { date: "Nov 10, 2025", desc: "Electricity bill", category: "Bills & Utilities", type: "expense", amount: "-₹150.00" },
    { date: "Nov 9, 2025", desc: "Movie tickets", category: "Entertainment", type: "expense", amount: "-₹35.00" },
    { date: "Nov 8, 2025", desc: "Dividend payment", category: "Investment", type: "income", amount: "+₹200.00" },
    { date: "Nov 7, 2025", desc: "Grocery shopping", category: "Food & Dining", type: "expense", amount: "-₹28.75" },
    { date: "Nov 6, 2025", desc: "Doctor consultation", category: "Healthcare", type: "expense", amount: "-₹75.00" },
  ];

  return (
    <div className="bg-[#0d1424] text-white p-6 rounded-xl border border-gray-700 w-full">

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Custom Report Results</h2>
        <p className="text-gray-400 text-sm">10 transactions found</p>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-700 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#111827] text-gray-300 border-b border-gray-700">
            <tr>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Amount (₹)</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r, i) => (
              <tr
                key={i}
                className="border-b border-gray-800 hover:bg-[#141b2e] transition"
              >
                <td className="py-3 px-4 text-gray-300">{r.date}</td>
                <td className="py-3 px-4">{r.desc}</td>
                <td className="py-3 px-4 text-gray-300">{r.category}</td>

                <td className="py-3 px-4">
                  <span
                    className={`
                      px-3 py-1 rounded-full text-xs 
                      ${r.type === "income" ? "bg-green-900/40 text-green-300" : "bg-red-900/40 text-red-300"}
                    `}
                  >
                    {r.type}
                  </span>
                </td>

                <td
                  className={`py-3 px-4 font-medium ${r.type === "income" ? "text-green-400" : "text-red-400"
                    }`}
                >
                  {r.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomReportTable;
