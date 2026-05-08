import React from "react";
import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-[#fafafa]">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        
        {/* Newsletter */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-gray-900">
            Stay Updated
          </h3>

          <p className="mb-4 text-sm leading-6 text-gray-500">
            Be the first to hear about new collections, exclusive offers,
            seasonal sales, and fashion updates.
          </p>

          <p className="mb-6 text-sm font-medium text-gray-700">
            Sign up today and get{" "}
            <span className="text-rabbit-red font-semibold">
              10% OFF
            </span>{" "}
            your first order.
          </p>

          {/* Newsletter Form */}
          <form className="space-y-4">
            <div className="relative">
              <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm outline-none transition duration-300 focus:border-black focus:ring-2 focus:ring-black/10"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-black py-3 text-sm font-medium text-white transition duration-300 hover:bg-gray-800"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        {/* Shop */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-gray-900">
            Shop
          </h3>

          <ul className="space-y-3">
            {[
              "Men's Top Wear",
              "Women's Top Wear",
              "Men's Bottom Wear",
              "Women's Bottom Wear",
            ].map((item) => (
              <li key={item}>
                <Link
                  to="#"
                  className="text-sm text-gray-500 transition duration-300 hover:translate-x-1 hover:text-black"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-gray-900">
            Support
          </h3>

          <ul className="space-y-3">
            {["Contact Us", "About Us", "FAQs", "Features"].map((item) => (
              <li key={item}>
                <Link
                  to="#"
                  className="text-sm text-gray-500 transition duration-300 hover:translate-x-1 hover:text-black"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-gray-900">
            Follow Us
          </h3>

          <div className="mb-8 flex items-center gap-4">
            {[
              {
                icon: <TbBrandMeta className="h-5 w-5" />,
                link: "https://facebook.com",
              },
              {
                icon: <IoLogoInstagram className="h-5 w-5" />,
                link: "https://instagram.com",
              },
              {
                icon: <RiTwitterXLine className="h-5 w-5" />,
                link: "https://twitter.com",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="mb-2 text-sm text-gray-500">
              Customer Support
            </p>

            <p className="flex items-center text-lg font-semibold text-gray-900">
              <FiPhoneCall className="mr-3 text-rabbit-red" />
              123-456-7890
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Mon - Fri / 9AM - 6PM
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center md:flex-row lg:px-10">
          
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Rabbit Store. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link
              to="#"
              className="transition hover:text-black"
            >
              Privacy Policy
            </Link>

            <Link
              to="#"
              className="transition hover:text-black"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}