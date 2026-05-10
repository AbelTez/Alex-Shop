import React from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";

export default function CartDrawer({ drawerOpen, toggleCartDrawer }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-2/4 sm:w-120 md:w-3/10 bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* close button */}
      <div className="flex p-4 justify-end">
        <button type="button" onClick={toggleCartDrawer}>
          <IoMdClose className="w-6 h-6 text-gray-600 hover:text-gray-800" />
        </button>
      </div>
      {/* cart drawer with scrollable content */}
      <div className="grow overflow-y-auto p-4">
        {/* <p>Cart items will be displayed here.</p> */}
        <h2 className="text-xl font-semibold mb-4">Your Cart </h2>
        <CartContents />
      </div>
      {/* components for cart contents */}
      
      <div className="p-4 bg-white sticky bottom-0">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes and discounts will be calculated at checkout.
        </p>
      </div>
    </div>
  );
}
