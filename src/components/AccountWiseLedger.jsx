import React from 'react'
import FilterBox from './FilterBox'
import Average from './Average'
import AWLTable from './AWLTable'

function AccountWiseLedger() {
    return (
        <div className='mt-15 flex flex-col gap-3 w-3/4'>
            <div className="head text-white text-3xl">
                Account Wise Ledger
                <div className="subhead text-slate-500 text-xs">
                    Detailed transaction history of each account
                </div>
            </div>
            <FilterBox />
            <div className="flex gap-2">
               <Average Heading={"Total Transactions"} Amount={"10"} className={"w-1/3"} />
               <Average Heading={"Total Debits"} Amount={"₹514.25"} className={"w-1/3"} amountColor='#f16374'/>
               <Average Heading={"Total Credits"} Amount={"₹6,000"} className={"w-1/3"} amountColor='#3bbf5e' />
            </div>
            <AWLTable />

        </div>
    )
}

export default AccountWiseLedger
