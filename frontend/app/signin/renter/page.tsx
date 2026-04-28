"use client"

import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import Link from "next/link";

const Page = () => {
  const [signInMode, setSignInMode] = useState<"signin" | "signup">("signin");
  return (
    <div className="flex h-screen w-full items-center">
      <div className="bg-[#6D9773] hidden md:block h-screen min-w-1/2">
        <div className="flex flex-col gap-5 justify-center h-full px-10 max-w-xl mx-auto text-white">
          <FiUser className="text-6xl text-gray-400 rounded-xl p-2 bg-emerald-100" />
          <h1 className="text-3xl font-bold">Find Your Next Home</h1>
          <p>
            Over 50,000 tenants have found their perfect PG through StayNest.
            Your next home is just a click away.
          </p>
          <div className="flex gap-5 items-center">
            <IoSearch className="text-4xl text-gray-600 bg-emerald-100 rounded-xl p-2" />
            <p>Search 5000+ verified PGs</p>
          </div>
          <div className="flex gap-5 items-center">
            <FaRegStar className="text-4xl text-gray-600 bg-emerald-100 rounded-xl p-2" />
            <p>Read real tenant reviews</p>
          </div>
          <div className="flex gap-5 items-center">
            <IoKeyOutline className="text-4xl text-gray-600 bg-emerald-100 rounded-xl p-2" />
            <p>Book your PG with confidence</p>
          </div>
        </div>
      </div>

      {signInMode === "signin" ? (
      <div className="flex justify-center items-center w-full">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl lg:w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-1">Welcome Back, Renter</h2>
          <p className="text-gray-500 text-sm mb-5">
            Find and book the perfect PG for your stay
          </p>

          <form className="space-y-4">
            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D9773]"
                required
              />
            </div>

            <div>
              <label className="text-sm">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D9773]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#6D9773] text-white py-2 rounded-md hover:bg-[#5a7d5f] transition font-bold"
            >
              Sign In
            </button>
          </form>

          <div className="text-center mt-4 text-sm text-gray-600">
            <p>
              Don&apos;t have an account?{" "}
              <button onClick={()=>setSignInMode("signup")} className=" hover:underline text-[#6D9773]">
                Sign Up
              </button>
            </p>

            <Link href="/" className="block mt-2 text-[#6D9773] hover:underline">
              Sign in as PG Owner instead →
            </Link>
          </div>
        </div>
      </div>
      )
      :
       (
        <div className="flex justify-center items-center w-full">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl lg:w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-1">Welcome, Renter</h2>
            <p className="text-gray-500 text-sm mb-5">
              Find and book the perfect PG for your stay
          </p>

          <form className="space-y-4">
            <div>
              <label className="text-sm">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D9773]"
                required
              />
            </div>
            <div>
              <label className="text-sm">Phone</label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D9773]"
                required
              />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D9773]"
                required
              />
            </div>

            <div>
              <label className="text-sm">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D9773]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#6D9773] text-white py-2 rounded-md hover:bg-[#5a7d5f] transition font-bold"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-4 text-sm text-gray-600">
            <p>
              Already have an account?{" "}
              <button onClick={()=>setSignInMode("signin")} className=" hover:underline text-[#6D9773]">
                Sign In
              </button>
            </p>

            <Link href="/" className="block mt-2 text-[#6D9773] hover:underline">
              Sign in as PG Owner instead →
            </Link>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Page;
