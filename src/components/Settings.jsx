import React from 'react'
import PersonalSettings from './PersonalSettings'
import NotificationSettings from './Notifications'
import DataManagement from './DataManagement'

function Settings() {
    return (
        <div className='flex flex-col gap-3 w-full'>
            <div className="head text-white text-3xl">
                Settings
                <div className="subhead text-slate-500 text-xs">
                    Manage your account settings and preferences
                </div>
            </div>
            <DataManagement />
        </div>
    )
}

export default Settings
