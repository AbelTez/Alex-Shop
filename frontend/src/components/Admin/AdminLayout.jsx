import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa';
import AdminSidebar from './AdminSidebar';

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <div className="flex min-h-screen flex-col md:flex-row relative ">
      {/* mobile toggle button */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button onClick={toggleSidebar} className="flex items-center">
            <FaBars size={24} />
            <h1  className="ml-4 text-xl  font-medium">Admin Dashboard</h1>
        </button>
      </div>
       {/* // overlay for mobile sidebar */}
       {isSidebarOpen && (
         <div className="fixed inset-0 z-10 bg-black/50" onClick={toggleSidebar}></div>
       )}
       <div className=" md:hidden">
         <div className={`bg-gray-900 w-64 min-h-screen text-white absolute fixed top-0 left-0 z-20 h-full max-w-sm shadow-2xl transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
           {/* Sidebar content */}
           <AdminSidebar />
         </div>
         {/* main content for mobile */}
            <div className="flex-1 p-4">Main Content</div>
       </div>
    </div>
   
  )
}
