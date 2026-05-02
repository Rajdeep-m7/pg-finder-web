import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoMdTrendingUp } from "react-icons/io";
import { FiShield } from "react-icons/fi";
import { FaRegChartBar } from "react-icons/fa";
import OwnerLoginPage from "@/components/OwnerLoginPage";


const Page = () => {
  
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

      <OwnerLoginPage />
    </div>
  );
};

export default Page;
