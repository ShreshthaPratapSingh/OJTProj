import React from "react";
import user from '../assets/User.png'

function PersonalSettings() {
  return (
    <div className="bg-[#0f0f0f] text-white p-6 rounded-2xl border border-gray-700 w-full">
      <div className="mb-5">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span className="text-gray-300">👤</span> Profile Information
        </h2>
        <p className="text-gray-500 text-sm">
          Update your personal information and profile picture
        </p>
      </div>

      <div className="flex items-center gap-5 mb-6">
        <img
          src={user}
          alt="Avatar"
          className="w-20 h-20 rounded-full"
        />
        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm">
          Change Avatar
        </button>
      </div>
      <hr />

      <div className="flex flex-col gap-4 mt-3">
        <div>
          <label className="block text-sm mb-1 text-gray-400">Full Name</label>
          <input
            type="text"
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 py-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-400">Email</label>
          <input
            type="email"
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-3 py-2 focus:outline-none"
          />
        </div>

        <button className="bg-white text-black px-4 py-2 rounded-md w-max hover:bg-gray-200 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default PersonalSettings;
