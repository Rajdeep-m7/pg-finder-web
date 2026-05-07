import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { GoClock } from "react-icons/go";

const AdminBookingCard = () => {
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-2xl p-5 mt-3">
        <div className="flex justify-between gap-5">
          <div className="flex items-center md:gap-3">
            <h1 className="text-xl font-bold">Arvind Sharma</h1>
            <p className="text-sm">· 2 hours ago</p>
          </div>
          <div>
            <p className="text-lg font-bold">
              9500 <span className="text-sm font-normal">/month</span>
            </p>
          </div>
        </div>
        <div>
          <p>Sunrise Heights PG</p>
          <div className="flex items-center gap-3 my-3">
            <p className="text-sm flex items-center gap-2">
              <CiCalendarDate />
              Check-in: May 5, 2026{" "}
            </p>
            <p className="text-sm flex items-center gap-2">
              <GoClock />6 months
            </p>
          </div>
          <p className="p-1 rounded-md w-full bg-gray-100">
            Hi, Im a working professional. Can I visit this weekend?
          </p>
        </div>

        <div className="border-t mt-3 border-t-gray-400">
          <div className="mt-2 flex gap-5">
            <button className="p-1 rounded bg-[#6D9773] text-white">
              Accept
            </button>
            <button className="text-white bg-red-400 p-1 rounded">
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBookingCard;
