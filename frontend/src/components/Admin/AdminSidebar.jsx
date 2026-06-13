import React from "react";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="p-6">
        <div className="mb-6">
            <Link to="/admin" className="text-2xl font-medium">
                Rabbit
            </Link>
        </div>
        <h2 className="text-xl font-medium mb-6 text-center">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
            <NavLink to="/admin/users" className={({ isActive }) => `bg-gray-700 text-white block px-4 py-2 rounded ${isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}>
              <FaUsers />
              <span className="ml-2">Users</span>
            </NavLink>
            <NavLink to="/admin/products" className={({ isActive }) => `bg-gray-700 text-white block px-4 py-2 rounded ${isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}>
              <FaUsers />
              <span className="ml-2">Products</span>
            </NavLink>
            <NavLink to="/admin/orders" className={({ isActive }) => `bg-gray-700 text-white block px-4 py-2 rounded ${isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}>
              <FaUsers />
              <span className="ml-2">Orders</span>
            </NavLink>
            <NavLink to="/admin/shop" className={({ isActive }) => `bg-gray-700 text-white block px-4 py-2 rounded ${isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}>
              <FaUsers />
              <span className="ml-2">Shop</span>
            </NavLink>
            <div className="mb-6">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    </div>
  );
}
