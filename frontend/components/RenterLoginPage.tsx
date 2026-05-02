"use client";
import { useAuth } from "@/store/useAuthStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RenterLoginPage = () => {
  const [signInMode, setSignInMode] = useState<"signin" | "signup">("signin");
  const {isUserSignIn , isUserSignUp , userSignIn, userSignUp } = useAuth();
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      password: formData.get("password") as string,
      email: formData.get("email") as string,
    };
    console.log(data);
    const success = await userSignIn(data);
    if (success) {
      router.push("/");
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      password: formData.get("password") as string,
      email: formData.get("email") as string,
    };
    console.log(data);
    const success = await userSignUp(data);
    if (success) {
      router.push("/");
    }
  };

  return (
    <div className="mx-auto w-full p-5">
      {signInMode === "signin" ? (
        <div className="flex justify-center items-center w-full">
          <div className="bg-white p-8 rounded-xl shadow-lg lg:w-md xl:w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-1">Welcome Back, Renter</h2>
            <p className="text-gray-500 text-sm mb-5">
              Find and book the perfect PG for your stay with StayNest
            </p>

            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D9773]"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D9773]"
                  required
                />
              </div>

              <button disabled={isUserSignIn}
                type="submit"
                className="w-full bg-[#6D9773] text-white py-2 rounded-md hover:bg-[#5a7d5f] transition font-bold"
              >
                { isUserSignIn ? "signIn In..." : "Sign In"}
              </button>
            </form>

            <div className="text-center mt-4 text-sm text-gray-600">
              <p>
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => setSignInMode("signup")}
                  className=" hover:underline text-[#6D9773]"
                >
                  Sign Up
                </button>
              </p>

              <Link
                href="/signin/owner"
                className="block mt-2 text-[#6D9773] hover:underline"
              >
                Sign in as PG Owner instead →
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl lg:w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-1">Welcome, Renter</h2>
            <p className="text-gray-500 text-sm mb-5">
              Find and book the perfect PG for your stay
            </p>

            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D9773]"
                  required
                />
              </div>
              <div>
                <label className="text-sm">Phone</label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  name="phone"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D9773]"
                  required
                />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D9773]"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  name="password"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6D9773]"
                  required
                />
              </div>

              <button disabled={isUserSignUp}
                type="submit"
                className="w-full bg-[#6D9773] text-white py-2 rounded-md hover:bg-[#5a7d5f] transition font-bold"
              >
                {isUserSignUp ? "SignIn up..." : "Sign Up"}
              </button>
            </form>

            <div className="text-center mt-4 text-sm text-gray-600">
              <p>
                Already have an account?{" "}
                <button
                  onClick={() => setSignInMode("signin")}
                  className=" hover:underline text-[#6D9773]"
                >
                  Sign In
                </button>
              </p>

              <Link
                href="/signin/owner"
                className="block mt-2 text-[#6D9773] hover:underline"
              >
                Sign in as PG Owner instead →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RenterLoginPage;
