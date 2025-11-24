import React from "react";

const LedgerTable = () => {
  const rows = [
    { date: "Nov 15, 2025", desc: "Monthly salary", account: "Salary", debit: "-", credit: "₹5,000.00", balance: "₹5,485.75" },
    { date: "Nov 14, 2025", desc: "Lunch at restaurant", account: "Food & Dining", debit: "₹45.50", credit: "-", balance: "₹485.75" },
    { date: "Nov 13, 2025", desc: "Gas refill", account: "Transportation", debit: "₹60.00", credit: "-", balance: "₹531.25" },
    { date: "Nov 12, 2025", desc: "Web development project", account: "Freelance", debit: "-", credit: "₹800.00", balance: "₹591.25" },
    { date: "Nov 11, 2025", desc: "Clothing purchase", account: "Shopping", debit: "₹120.00", credit: "-", balance: "₹208.75" },
    { date: "Nov 10, 2025", desc: "Electricity bill", account: "Bills & Utilities", debit: "₹150.00", credit: "-", balance: "₹88.75" },
    { date: "Nov 9, 2025", desc: "Movie tickets", account: "Entertainment", debit: "₹35.00", credit: "-", balance: "₹61.25" },
    { date: "Nov 8, 2025", desc: "Dividend payment", account: "Investment", debit: "-", credit: "₹200.00", balance: "₹96.25" },
    { date: "Nov 7, 2025", desc: "Grocery shopping", account: "Food & Dining", debit: "₹28.75", credit: "-", balance: "₹103.75" },
    { date: "Nov 6, 2025", desc: "Doctor consultation", account: "Healthcare", debit: "₹75.00", credit: "-", balance: "₹75.00" },
  ];

  const totalDebit = "₹514.25";
  const totalCredit = "₹6,000.00";

  return (
    <div className="bg-[#111727] text-white p-6 rounded-xl w-full">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">All Accounts Ledger</h2>
        <div className="text-sm text-gray-400">Period: 22/10/2025 - 22/11/2025</div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#111727] border-b border-gray-700 text-gray-300">
            <tr>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Account</th>
              <th className="py-3 px-4">Debit (₹)</th>
              <th className="py-3 px-4">Credit (₹)</th>
              <th className="py-3 px-4">Balance (₹)</th>
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
                <td className="py-3 px-4">
                  <span className="bg-gray-700/40 text-gray-300 text-xs px-2 py-1 rounded-md">
                    {r.account}
                  </span>
                </td>

                <td className="py-3 px-4 text-red-400">{r.debit}</td>

                <td className="py-3 px-4 text-green-400">{r.credit}</td>

                <td className="py-3 px-4 text-green-400">{r.balance}</td>
              </tr>
            ))}

            <tr className="bg-[#101624] font-semibold">
              <td className="py-3 px-4" colSpan="3">
                Total
              </td>
              <td className="py-3 px-4 text-red-400">{totalDebit}</td>
              <td className="py-3 px-4 text-green-400">{totalCredit}</td>
              <td className="py-3 px-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LedgerTable;
