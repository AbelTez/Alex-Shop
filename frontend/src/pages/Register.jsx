import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaApple } from "react-icons/fa6";
import register from "../assets/images/signup.png";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here (e.g., API call)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    /* CLEANED UP: Single parent viewport wrapper managing the split row layout seamlessly */
    <div className="w-full min-h-screen flex flex-col md:flex-row items-stretch bg-gray-50">
      {/* Form Side Wrapper */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 lg:p-16">
        <form
          className="w-full max-w-md bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-bold tracking-wide uppercase">
              Rabbit
            </h2>
          </div>

          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            Create an account
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            Get started with our service today.
          </p>
          <div className="mb-4">
            <label
              className="block text-sm text-gray-700 font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-sm text-gray-700 font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="w-full bg-black text-white p-2.5 rounded-lg font-semibold hover:bg-gray-800 transition mb-4"
            type="submit"
          >
            Create Account
          </button>

          <div className="relative flex py-2 items-center my-4">
            <div className="grow border-t border-gray-200"></div>
            <span className="shrink mx-4 text-gray-400 text-xs uppercase">
              Or continue with
            </span>
            <div className="grow border-t border-gray-200"></div>
          </div>

          {/* Google Button using react-icons */}
          <button
            type="button"
            className="w-full bg-gray-100 text-gray-800 p-2.5 rounded-lg mb-3 flex items-center justify-center font-semibold hover:bg-gray-200 transition"
          >
            <FaGoogle className="w-5 h-5 text-red-500" />
            <span className="ml-2">Sign in with Google</span>
          </button>

          {/* Apple Button using react-icons */}
          <button
            type="button"
            className="w-full bg-gray-100 text-gray-800 p-2.5 rounded-lg mb-4 flex items-center justify-center font-semibold hover:bg-gray-200 transition"
          >
            <FaApple className="w-5 h-5 text-black" />
            <span className="ml-2">Sign in with Apple</span>
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>

      {/* Image Side Wrapper */}
      <div className="hidden md:block w-1/2 bg-gray-100">
        <div className="h-full w-full">
          <img
            src={register}
            alt="register visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
