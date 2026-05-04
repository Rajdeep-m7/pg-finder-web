"use client";
import { useAuth } from "@/store/useAuthStore";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";

const OwnerSidebar = () => {
  const { authOwner } = useAuth();
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `p-1 md:p-2 rounded block ${
      pathname === path ? "bg-amber-400 font-semibold" : "hover:bg-amber-300"
    }`;
  return (
    <div>
      <div className="rounded p-3 shadow-2xl max-h-fit m-5 hidden md:block">
        <h1 className="text-xl font-bold mb-4">Owner Dashboard</h1>
        <div className="flex items-center gap-2 mb-6 bg-amber-50 p-2 rounded">
          <div className=" bg-[#FFBA00] rounded-full h-10 w-10 flex items-center justify-center text-black font-bold">
            {authOwner?.name.charAt(0)}
          </div>
          <div>
            <h1>{authOwner?.name}</h1>
            <p className="text-sm text-gray-500">Manage your all PGs</p>
          </div>
        </div>
        <div>
          <ul className="space-y-2">
            <li>
              <Link
                href="/owner"
                className={linkClass("/owner") + " flex items-center gap-2"}
              >
                <MdOutlineDashboard /> Dashboard
              </Link>
            </li>
            <li>
              <Link href="/owner/properties" className={linkClass("/owner/properties") + " flex items-center gap-2"}>
                <BiBuildings /> My Properties
              </Link>
            </li>

            <li>
              <Link href="/owner/bookings" className={linkClass("/owner/bookings") + " flex items-center gap-2"}>
                <FaRegCalendarCheck /> Bookings
              </Link>
            </li>

            <li>
              <Link href="/owner/profile" className={linkClass("/owner/profile") + " flex items-center gap-2"}>
                <IoAddCircleOutline /> List New Property
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="fixed bottom-1 p-2 z-20 md:hidden w-full">
        <div className="flex w-full justify-around items-center bg-white shadow-xl p-1 rounded-md">
          <Link
            href="/owner"
            className={linkClass("/owner") + " text-center flex-1"}
          >
            <MdOutlineDashboard className="mx-auto" />
            <span className="text-xs">Dashboard</span>
          </Link>
          <Link
            href="/owner/properties"
            className={linkClass("/owner/properties") + " text-center flex-1"}
          >
            <BiBuildings className="mx-auto" />
            <span className="text-xs text-nowrap">My Properties</span>
          </Link>
          <Link
            href="/owner/bookings"
            className={linkClass("/owner/bookings") + " text-center flex-1"}
          >
            <FaRegCalendarCheck className="mx-auto" />
            <span className="text-xs">Bookings</span>
          </Link>
          <Link
            href="/owner/profile"
            className={linkClass("/owner/profile") + " text-center flex-1"}
          >
            <IoAddCircleOutline className="mx-auto" />
            <span className="text-xs text-nowrap">List Property</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OwnerSidebar;
