import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

import SearchBar from "../Common/SearchBar";
import myLogo from "../../assets/images/logo.png";
import CartDrawer from "./CartDrawer";
import AdminLayout from "../Admin/AdminLayout";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const navLinks=[{name:"Men", path:"/collections/all"},{name:"Women", path:"/collections/women"},{name:"Top Wear", path:"/collections/top-wear"},{name:"Bottom Wear", path:"/collections/bottom-wear"}]

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center transition duration-300 hover:scale-105"
          >
            <img
              src={myLogo}
              alt="Logo"
              className="h-12 w-auto object-contain md:h-14"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-sm font-semibold uppercase tracking-wide text-gray-700 transition duration-300 hover:text-rabbit-red after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-rabbit-red after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4 md:gap-5">
            
            {/* Search */}
            <div className="hidden md:block">
              <SearchBar />
            </div>

            {/* Profile */}
            <Link to="/admin" className="block bg-black px-2 rounded text-sm text-white">Admin</Link>
            <Link
              to="/profile"
              className="rounded-full p-2 text-gray-700 transition duration-300 hover:bg-gray-100 hover:text-rabbit-red"
            >
              <HiOutlineUser className="h-6 w-6" />
            </Link>

            {/* Cart */}
            <button
              onClick={toggleCartDrawer}
              className="relative rounded-full p-2 text-gray-700 transition duration-300 hover:bg-gray-100 hover:text-rabbit-red"
            >
              <HiOutlineShoppingBag className="h-6 w-6" />

              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rabbit-red px-1 text-[10px] font-bold text-white shadow">
                3
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleNavDrawer}
              className="rounded-full p-2 text-gray-700 transition duration-300 hover:bg-gray-100 hover:text-rabbit-red md:hidden"
            >
              <HiBars3BottomRight className="h-7 w-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer
        drawerOpen={drawerOpen}
        toggleCartDrawer={toggleCartDrawer}
      />

      {/* Mobile Sidebar Overlay */}
      <div
        onClick={toggleNavDrawer}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          navDrawerOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-5">
          <img
            src={myLogo}
            alt="Logo"
            className="h-10 w-auto object-contain"
          />

          <button
            onClick={toggleNavDrawer}
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <IoMdClose className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Search */}
        <div className="border-b border-gray-100 p-5 md:hidden">
          <SearchBar />
        </div>

        {/* Links */}
        <div className="flex flex-col p-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleNavDrawer}
              className="rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-gray-700 transition duration-300 hover:bg-gray-100 hover:text-rabbit-red"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}