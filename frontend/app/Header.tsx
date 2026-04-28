"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [, setIsOpen] = useState<boolean>(false);
  const toggleNavBar = (): void => setIsOpen((prev) => !prev);
  return (
    <div className="bg-[#0C3B2E] h-18 w-full flex justify-between md:px-10 px-2 items-center">
      <div className="flex justify-between items-center">
        <Image
          className="rounded-xl"
          src="/image.png"
          alt="logo"
          width={40}
          height={35}
        />
        <h1 className="md:text-2xl text-xl font-bold text-white ml-2">
          StayNest{" "}
        </h1>
        <p className="text-gray-400 text-sm ml-3">
          | Find the perfect PG for you
        </p>
      </div>
      <div className="lg:hidden cursor-pointer" onClick={toggleNavBar}>
        <GiHamburgerMenu className="text-2xl text-white" />
      </div>
      <div className="text-white lg:flex justify-between items-center md:gap-5 hidden">
        <Link
          className="rounded-xl hover:bg-emerald-800 p-2 px-3 hover:text-amber-500"
          href="/"
        >
          Home
        </Link>
        <Link
          className="rounded-xl hover:bg-emerald-800 p-2 px-3 hover:text-amber-500"
          href="/"
        >
          Explore PGs
        </Link>
        <Link
          className="rounded-xl hover:bg-emerald-800 p-2 px-3 hover:text-amber-500"
          href="/"
        >
          About
        </Link>
        <Link
          className="rounded-xl hover:bg-emerald-800 p-2 px-3 hover:text-amber-500"
          href="/"
        >
          Contact
        </Link>
      </div>
      <div className="hidden lg:block">
        <button className="rounded-xl p-2 px-3 border border-gray-200 text-white hover:bg-emerald-800 hover:text-amber-500 font-semibold">
          + List Your PG
        </button>
        <Link
          href="/signin/renter"
          className="bg-amber-500 rounded-xl p-2 px-5 text-black font-semibold ml-3 hover:bg-amber-600"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default Header;
