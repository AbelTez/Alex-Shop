import React from "react";
import {
  HiShoppingBag,
  HiRefresh,
  HiCreditCard,
} from "react-icons/hi";

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        {/* feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4 bg-gray-100">
            <HiShoppingBag className="text-3xl text-black" />
          </div>

          <h4 className="tracking-tighter mb-2 font-semibold">
            FREE INTERNATIONAL SHIPPING
          </h4>

          <p className="text-gray-600 text-sm tracking-tighter">
            We ship to over 100 countries worldwide
          </p>
        </div>

        {/* feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4 bg-gray-100">
            <HiRefresh className="text-3xl text-black" />
          </div>

          <h4 className="tracking-tighter mb-2 font-semibold">
            100% SECURE PAYMENT
          </h4>

          <p className="text-gray-600 text-sm tracking-tighter">
            Your payment information is protected with SSL encryption
          </p>
        </div>

        {/* feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4 bg-gray-100">
            <HiCreditCard className="text-3xl text-black" />
          </div>

          <h4 className="tracking-tighter mb-2 font-semibold">
            EASY RETURNS
          </h4>

          <p className="text-gray-600 text-sm tracking-tighter">
            Not satisfied with your purchase? Return it within 30 days
          </p>
        </div>

      </div>
    </section>
  );
}