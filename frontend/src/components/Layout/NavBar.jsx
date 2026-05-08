import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "../Common/SearchBar";
import myLogo from "../../assets/logo.png";
import CartDrawer from "./CartDrawer";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={myLogo}
                alt="Logo"
                className="h-14 w-auto object-contain hover:scale-105 transition duration-300"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="#"
              className="text-sm font-semibold tracking-wide uppercase text-gray-600 hover:text-rabbit-red transition duration-300"
            >
              Men
            </Link>

            <Link
              to="#"
              className="text-sm font-semibold tracking-wide uppercase text-gray-600 hover:text-rabbit-red transition duration-300"
            >
              Women
            </Link>

            <Link
              to="#"
              className="text-sm font-semibold tracking-wide uppercase text-gray-600 hover:text-rabbit-red transition duration-300"
            >
              Top Wear
            </Link>

            <Link
              to="#"
              className="text-sm font-semibold tracking-wide uppercase text-gray-600 hover:text-rabbit-red transition duration-300"
            >
              Bottom Wear
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-5">
            <Link
              to="profile"
              className="text-gray-600 hover:text-rabbit-red transition duration-300"
            >
              <HiOutlineUser className="w-6 h-6" />
            </Link>

            <button
              className="relative text-gray-600 hover:text-rabbit-red transition duration-300"
              onClick={toggleCartDrawer}
            >
              <HiOutlineShoppingBag className="w-6 h-6" />

              <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-4.5 h-4.5 px-1 rounded-full bg-rabbit-red text-white text-[10px] font-semibold shadow-sm">
                3
              </span>
            </button>

            {/* Search */}
            <div className="text-gray-600  transition duration-300">
              <SearchBar />
            </div>

            {/* Mobile Menu */}
            <button className="md:hidden text-gray-700 hover:text-rabbit-red transition duration-300">
              <HiBars3BottomRight className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </>
  );
}
