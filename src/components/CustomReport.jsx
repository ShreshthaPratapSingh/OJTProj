import React from 'react'
import ReportFilters from './ReportFilters'
import Average from './Average'
import CustomReportTable from './CustomReportTable'

function CustomReport() {
    return (
        <div className='mt-15 flex flex-col gap-3 w-3/4'>
            <div className="head text-white text-3xl">
                Custom Report
                <div className="subhead text-slate-500 text-xs">
                    Generate Reports with custom filters and date ranges
                </div>
            </div>
            <ReportFilters />
            <div className="flex gap-2">
                <Average Heading={"Total Transactions"} Amount={"10"} className={"w-1/4"}/>
                <Average Heading={"Total Income"} Amount={"₹6000.00"} className={"w-1/4"} amountColor='#3bbf5e'/>
                <Average Heading={"Total Expense"} Amount={"₹514.25"} className={"w-1/4"} amountColor='#f16374'/>
                <Average Heading={"Net Balance"} Amount={"₹5485.75"} className={"w-1/4"} amountColor='#3bbf5e'/>
            </div>
            <CustomReportTable />
        </div>
    )
}

export default CustomReport
