import React from 'react'
import PersonalSettings from './personalSettings'
import NotificationSettings from './Notifications'
import DataManagement from './DataManagement'

function Settings() {
    return (
        <div className='mt-15 flex flex-col gap-3 w-3/4'>
            <div className="head text-white text-3xl">
                Settings
                <div className="subhead text-slate-500 text-xs">
                    Manage your account settings and preferences
                </div>
            </div>
            <PersonalSettings />
            <NotificationSettings />
            <DataManagement />
        </div>
    )
}

export default Settings
