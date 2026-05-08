import React from "react";
import { IoMdClose } from "react-icons/io";

export default function CartDrawer({ drawerOpen, toggleCartDrawer }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 md:w-1/4 bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* close button */}
      <div className="flex p-4 justify-end">
        <button type="button" onClick={toggleCartDrawer}>
          <IoMdClose className="w-6 h-6 text-gray-600 hover:text-gray-800" />
        </button>
      </div>
    </div>
  );
}
