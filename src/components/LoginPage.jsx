import React from 'react'
import bg from "../assets/LandingBG.png";
import { BriefcaseBusiness } from 'lucide-react';

function LoginPage() {
    return (
        <div className="relative w-full h-screen bg-cover bg-no-repeat overflow-y-hidden" style={{ backgroundImage: `url(${bg})` }}>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="text-white bg-[#1e2844]/50 w-2xl h-auto p-3 rounded-xl border-2 border-gray-500 font-semibold text-3xl flex flex-col gap-3">
                    <div className="flex gap-2 items-end justify-center">
                        Secure Access to Your Ledger <BriefcaseBusiness size={30}/>
                    </div>
                    <div className="input flex flex-col gap-4 mt-10">
                        <input type="text" placeholder='Enter username' className='text-white text-lg border border-gray-500 rounded-full px-4 py-1 placeholder:font-light font-light' />
                        <input type="password" placeholder='Enter password' className='text-white text-lg border border-gray-500 rounded-full px-4 py-1 placeholder:font-light font-light' />
                    </div>
                    <div className="buttons flex flex-col items-center text-xl">
                        <button className='bg-blue-500 rounded-full w-1/3 border-2 border-blue-300 py-1'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
