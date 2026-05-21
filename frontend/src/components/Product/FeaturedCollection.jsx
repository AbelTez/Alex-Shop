import React from "react";
import { Link } from "react-router-dom";
import feature from "../../assets/images/collections.png";

export default function FeaturedCollection() {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        {/* left content */}

        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Style Made Simple
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 ">
            Elevated essentials for daily wear{" "}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We believe you shouldn't have to choose between feeling good and
            looking sharp. Our collection offers premium comfort and timeless
            style for your day-to-day. From relaxed hoodies to perfectly cut
            tees, these are the pieces you’ll reach for every single morning.
          </p>
          <Link
            to="/collections/all"
            className="bg-black  text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-gray-800"
          >
            Shop Now
          </Link>
        </div>
        {/* right content */}
        <div className="lg:w-1/2">
          <img
            src={feature}
            alt="featured collection"
            className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl "
          />
        </div>
      </div>
    </section>
  );
}
