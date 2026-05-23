import React from 'react'
import MyOrder from './MyOrder';

export default function Profile() {
  return (
    /* Clean layout container with a neutral tint to make white dashboard surfaces pop */
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      {/* FIXED: Removed invalid 'flex-group' class */}
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 items-start">
          
          {/* Left section Side Card */}
          {/* FIXED: Added 'bg-white' and 'border border-gray-100' for proper card depth */}
          <div className="w-full md:w-1/3 lg:w-1/4 bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
            <h1 className="text-xl font-bold text-gray-900 mb-1 capitalize">guest</h1>
            <p className="text-sm text-gray-500 mb-6 truncate">guest@gmail.com</p>
            <button className="w-full bg-red-500 text-white font-medium py-2.5 px-4 rounded-xl hover:bg-red-600 transition-colors duration-200">
              Logout
            </button>
          </div>

          {/* Right section Table Area */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrder />
          </div>
          
        </div>
      </div>
    </div>
  )
}