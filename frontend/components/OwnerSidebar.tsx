"use client";
import { useAuth } from "@/store/useAuthStore";
import { usePathname } from "next/navigation";
import Link from "next/link";

const OwnerSidebar = () => {
  const { authOwner } = useAuth();
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `p-2 rounded block ${
      pathname === path ? "bg-amber-400 font-semibold" : "hover:bg-amber-300"
    }`;
  return (
    <div className="rounded p-3 shadow-2xl max-h-fit m-5">
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
          <li className={linkClass("/owner/properties")}>
            <Link href="/owner/properties">My Properties</Link>
          </li>

          <li className={linkClass("/owner/bookings")}>
            <Link href="/owner/bookings">Bookings</Link>
          </li>

          <li className={linkClass("/owner/profile")}>
            <Link href="/owner/profile">+ List New Property</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OwnerSidebar;
