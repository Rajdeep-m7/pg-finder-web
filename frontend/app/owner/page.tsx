import { cookies } from "next/headers";
import { MdCurrencyRupee } from "react-icons/md";
import { RxPeople } from "react-icons/rx";
import { IoIosTrendingUp } from "react-icons/io";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const cookieStore = cookies();
  const stayNest = (await cookieStore).get("stayNest")?.value;

  const res = await fetch("http://localhost:8001/api/auth/check", {
    headers: {
      Cookie: `stayNest=${stayNest}`,
    },
    cache: "no-store",
  });

  const data = await res.json();

  const name = data?.name || "Owner";
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
        <h1 className="text-xl md:text-2xl font-bold">Welcome Back, {name}!</h1>
        <p className=" text-gray-600 mt-4">
          This is your owner dashboard. Manage your properties and bookings
          here.
        </p>
      </div>
      <Link href="/owner/profile" className="mt-5 bg-amber-400 text-black px-4 py-2 rounded-md hover:bg-amber-500">
        Add new PG
      </Link>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded shadow p-4 ">
            <MdCurrencyRupee className="text-3xl  bg-amber-100 rounded-md p-1" />
            <div>
              <p className="text-xl font-bold my-2">₹1,25,000</p>
              <p className="text-xs">Total Revenue</p>
            </div>
          </div>
          <div className="bg-white rounded shadow p-4">
            <RxPeople className="text-3xl bg-amber-100 rounded-md p-1" />
            <div>
              <p className="text-xl font-bold my-2">1,250</p>
              <p className=" text-xs">Total Guests</p>
            </div>
          </div>
          <div className="bg-white rounded shadow p-4">
            <IoIosTrendingUp className="text-3xl bg-amber-100 rounded-md p-1" />
            <div>
              <p className="text-xl font-bold my-2">125</p>
              <p className="text-xs">Total Bookings</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 shadow-2xl rounded-md max-w-fit mt-5">
        <h1 className="text-xl font-bold mb-4">Top Property</h1>
        <div>
          <Image
            className="rounded-md"
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop"
            alt="Top Property"
            width={300}
            height={250}
          />
          <p className="font-semibold text-xl">Sunrise Heights PG</p>
          <p className="text-sm text-gray-500">
            Koramangala 5th Block, Bangalore
          </p>
        </div>
      </div>

      <div className="bg-white mt-5 p-5 rounded-md shadow-2xl">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold mb-4">Recent Bookings</h1>
          <Link href="owner/bookings" className="text-blue-500 hover:underline">
            <p>view all</p>
          </Link>
        </div>
        <div className="bg-white rounded-md p-2 flex items-center justify-between shadow-2xl border border-gray-200">
          <div>
            <p>Aarav Sharma </p>
            <p className="text-xs text-gray-400">
              Sunrise Heights PG · May 5, 2026
            </p>
          </div>
          <p>9500</p>
        </div>
        <div className="bg-white rounded-md my-2 p-2 flex items-center justify-between shadow-2xl border border-gray-200">
          <div>
            <p>Aarav Sharma </p>
            <p className="text-xs text-gray-400">
              Sunrise Heights PG · May 5, 2026
            </p>
          </div>
          <p>9500</p>
        </div>
        <div className="bg-white rounded-md p-2 flex items-center justify-between shadow-2xl border border-gray-200">
          <div>
            <p>Aarav Sharma </p>
            <p className="text-xs text-gray-400">
              Sunrise Heights PG · May 5, 2026
            </p>
          </div>
          <p>9500</p>
        </div>
      </div>
    </div>
  );
};

export default page;
