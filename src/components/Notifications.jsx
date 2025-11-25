import React, { useState } from "react";

function NotificationSettings() {
  const [emailNotif, setEmailNotif] = useState(false);
  const [pushNotif, setPushNotif] = useState(false);
  const [weeklySummary, setWeeklySummary] = useState(false);

  return (
    <div className="bg-[#0f0f0f] text-white p-6 rounded-2xl border border-gray-700 w-full">
      <div className="mb-5">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span className="text-gray-300">🔔</span> Notifications
        </h2>
        <p className="text-gray-500 text-sm">Configure how you receive notifications</p>
      </div>

      <div className="flex items-center justify-between py-4 border-b border-gray-700">
        <div>
          <h3 className="text-sm font-medium">Email Notifications</h3>
          <p className="text-gray-500 text-xs">Receive updates via email</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={emailNotif}
            onChange={() => setEmailNotif(!emailNotif)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-white transition"></div>
          <div className="absolute left-0.5 top-0.5 h-5 w-5 bg-white rounded-full transition peer-checked:translate-x-full peer-checked:bg-black"></div>
        </label>
      </div>

      <div className="flex items-center justify-between py-4 border-b border-gray-700">
        <div>
          <h3 className="text-sm font-medium">Push Notifications</h3>
          <p className="text-gray-500 text-xs">Receive push notifications</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={pushNotif}
            onChange={() => setPushNotif(!pushNotif)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-white transition"></div>
          <div className="absolute left-0.5 top-0.5 h-5 w-5 bg-white rounded-full transition peer-checked:translate-x-full peer-checked:bg-black"></div>
        </label>
      </div>

      <div className="flex items-center justify-between py-4">
        <div>
          <h3 className="text-sm font-medium">Weekly Summary</h3>
          <p className="text-gray-500 text-xs">Get a weekly summary of your finances</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={weeklySummary}
            onChange={() => setWeeklySummary(!weeklySummary)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-white transition"></div>
          <div className="absolute left-0.5 top-0.5 h-5 w-5 bg-white rounded-full transition peer-checked:translate-x-full peer-checked:bg-black"></div>
        </label>
      </div>
    </div>
  );
}

export default NotificationSettings;
