"use client";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoMdTrendingUp } from "react-icons/io";
import { FiShield } from "react-icons/fi";
import { FaRegChartBar } from "react-icons/fa";

import React, { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [signInMode, setSignInMode] = useState<"signin" | "signup">("signin");
  return (
    <div className="flex h-screen w-full items-center">
      <div className="bg-[#FFBA00] hidden md:block h-screen min-w-1/2">
        <div className="flex flex-col gap-5 justify-center h-full px-10 max-w-xl mx-auto text-white">
          <HiOutlineBuildingOffice2 className="text-6xl text-gray-400 rounded-xl p-2 bg-amber-200" />
          <h1 className="text-3xl font-bold">Grow Your PG Business</h1>
          <p>
            Join 2,000+ PG owners who trust StayNest to connect with quality
            tenants and manage their properties efficiently.
          </p>
          <div className="flex gap-5 items-center">
            <IoMdTrendingUp className="text-4xl text-gray-600 bg-amber-200 rounded-xl p-2" />
            <p>Track occupancy & revenue</p>
          </div>
          <div className="flex gap-5 items-center">
            <FiShield className="text-4xl text-gray-600 bg-amber-200 rounded-xl p-2" />
            <p>Verified tenant requests</p>
          </div>
          <div className="flex gap-5 items-center">
            <FaRegChartBar className="text-4xl text-gray-600 bg-amber-200 rounded-xl p-2" />
            <p>Analytics dashboard</p>
          </div>
        </div>
      </div>

      {signInMode === "signin" ? (
        <div className="flex justify-center items-center w-full">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl lg:w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-1">Welcome Back, PG Owner</h2>
            <p className="text-gray-500 text-sm mb-5">
              Manage your property and grow your business with StayNest
            </p>

            <form className="space-y-4">
              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBA00]"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBA00]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFBA00] text-white py-2 rounded-md hover:bg-[#BB8A52] transition font-bold"
              >
                Sign In
              </button>
            </form>

            <div className="text-center mt-4 text-sm text-gray-600">
              <p>
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => setSignInMode("signup")}
                  className=" hover:underline text-[#FFBA00]"
                >
                  Sign Up
                </button>
              </p>

              <Link
                href="/signin/renter"
                className="block mt-2 text-[#FFBA00] hover:underline"
              >
                Sign in as PG Renter instead →
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl lg:w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-1">Welcome, Owner</h2>
            <p className="text-gray-500 text-sm mb-5">
              Manage your property and grow your business with StayNest
            </p>

            <form className="space-y-4">
              <div>
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBA00]"
                  required
                />
              </div>
              <div>
                <label className="text-sm">Phone</label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBA00]"
                  required
                />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBA00]"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBA00]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFBA00] text-white py-2 rounded-md hover:bg-[#BB8A52] transition font-bold"
              >
                Sign Up
              </button>
            </form>

            <div className="text-center mt-4 text-sm text-gray-600">
              <p>
                Already have an account?{" "}
                <button
                  onClick={() => setSignInMode("signin")}
                  className=" hover:underline text-[#FFBA00]"
                >
                  Sign In
                </button>
              </p>

              <Link
                href="/signin/renter"
                className="block mt-2 text-[#FFBA00] hover:underline"
              >
                Sign in as PG Renter instead →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
