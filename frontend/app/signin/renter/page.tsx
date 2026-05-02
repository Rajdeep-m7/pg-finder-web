import React from "react";
import { FiUser } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import RenterLoginPage from "@/components/RenterLoginPage";

const Page = () => {
  
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

      <RenterLoginPage />
    </div>
  );
};

export default Page;
