import Image from "next/image";
import { RxPeople } from "react-icons/rx";
import { IoBedOutline } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import React from "react";

const OwnerPropertyCard = () => {
  return (
    <div className="flex flex-wrap gap-5 items-center lg:max-w-5xl">
      <div className="bg-white rounded-2xl shadow-md mt-5 max-w-fit">
        <Image
          className="rounded-t-2xl h-45 object-cover"
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop"
          alt="Property"
          width={440}
          height={100}
        />
        <div className="px-5">
          <h1 className="font-semibold">Sunrise Heights PG</h1>
          <h1 className="text-sm text-gray-500">
            Koramangala 5th Block, Bangalore
          </h1>
          <div className="flex gap-5">
            <div className="p-1 bg-gray-200 rounded-lg mt-3">
              <span className="ml-1 flex items-center gap-1">
                <RxPeople className="inline-block" />4
              </span>
              <p>Total Guests</p>
            </div>
            <div className="p-1 bg-gray-200 rounded-lg mt-3">
              <span className="ml-1 flex items-center gap-1">
                <IoBedOutline className="inline-block" />
                12
              </span>
              <p>Available Beds</p>
            </div>
          </div>
          <div className="border-t border-gray-500 mt-2 flex justify-between">
            <h1 className="mt-2 mb-2 font-bold text-lg">₹9,500/mo</h1>
            <div className="flex gap-1 mt-2">
              <CiPlay1 className="  border rounded-md p-1 text-2xl cursor-pointer" />
              <CiPause1 className=" border rounded-md p-1 text-2xl cursor-pointer" />
              <FiEdit2 className=" border rounded-md p-1 text-2xl cursor-pointer" />
              <MdDeleteOutline className="text-red-500 border rounded-md p-1 text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerPropertyCard;