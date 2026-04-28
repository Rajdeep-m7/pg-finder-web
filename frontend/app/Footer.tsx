import React from "react";

import Image from "next/image";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-emerald-950 w-full">
      <div className=" text-gray-400 flex justify-between flex-wrap p-10 gap-10 md:gap-15 md:flex-row flex-col md:max-w-6xl mx-auto">
        <div className=" flex-1 flex flex-col gap-2 max-w-xs items-start">
          <div className="flex items-center gap-4">
            <Image
              src="/image.png"
              alt="logo"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <p className="text-2xl font-bold">StayNest</p>
          </div>
          <p className="text-sm text-gray-400">
            Find your perfect paying guest accommodation with ease. Trusted by
            thousands of tenants and PG owners across India.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-lg font-semibold">Quick Links</h1>
          <Link className="hover:text-white cursor-pointer" href="/">
            Home
          </Link>
          <Link className="hover:text-white cursor-pointer" href="/">
            Explore PGs
          </Link>
          <Link className="hover:text-white cursor-pointer" href="/">
            About
          </Link>
          <Link className="hover:text-white cursor-pointer" href="/">
            Contact
          </Link>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-lg font-semibold">Support</h1>
          <Link className="hover:text-white cursor-pointer" href="/">
            FAQ
          </Link>
          <Link className="hover:text-white cursor-pointer" href="/">
            Help Center
          </Link>
          <Link className="hover:text-white cursor-pointer" href="/">
            Terms of Service
          </Link>
          <Link className="hover:text-white cursor-pointer" href="/">
            Privacy Policy
          </Link>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-lg font-semibold">Get in Touch</h1>
          <div className="flex items-center gap-2">
            <IoMdMail />
            <p>staynest@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <p>+91 9876543210</p>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot />
            <p>123, Main Street, Anytown, USA</p>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Link
              className="hover:text-white cursor-pointer text-2xl"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="hover:text-white cursor-pointer text-2xl"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </Link>
            <Link
              className="hover:text-white cursor-pointer text-2xl"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm p-5">
        © {new Date().getFullYear()} StayNest. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
