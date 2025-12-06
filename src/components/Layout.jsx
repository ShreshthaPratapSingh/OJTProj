import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen bg-[#030712] text-white">
            <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            <div className="flex pt-16">
                {/* Sidebar wrapper */}
                <Sidebar isOpen={isSidebarOpen} close={() => setIsSidebarOpen(false)} />

                {/* Main Content */}
                <main className="flex-1 p-5 w-full md:ml-60 transition-all duration-300">
                    <div className="container mx-auto">
                        {children}
                    </div>
                </main>
            </div>

            {/* Overlay for mobile sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    )
}

export default Layout
