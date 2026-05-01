"use client";
import { useAuth } from '@/store/useAuthStore';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const OwnerLoginPage = () => {
    const [signInMode, setSignInMode] = useState<"signin" | "signup">("signin");
    const { ownerSignIn , ownerSignUp }= useAuth();
    const router = useRouter();

    const handleSignIn = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
          password: formData.get("password") as string,
          email: formData.get("email") as string,
        };
        console.log(data);
        const success = await ownerSignIn(data);
        if(success){
            router.push("/");
          }
      };
      const handleSignUp = async (e : React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const data = {
            name: formData.get("name") as string,
            phone: formData.get("phone") as string ,
            password: formData.get("password") as string,
            email: formData.get("email") as string,
          };
          console.log(data);
          const success = await ownerSignUp(data);
          if(success){
            router.push("/");
          }
        };

  return (
    <div className='mx-auto w-full p-5'>
        {signInMode === "signin" ? (
        <div className="flex justify-center items-center w-full">
          <div className="bg-white p-8 rounded-xl shadow-lg lg:w-md xl:w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-1">Welcome Back, PG Owner</h2>
            <p className="text-gray-500 text-sm mb-5">
              Manage your property and grow your business with StayNest
            </p>

            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBA00]"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBA00]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFBA00] text-white py-2 rounded-md hover:bg-[#BB8A52] transition font-bold"
              >
                Sign In
              </button>
            </form>

            <div className="text-center mt-4 text-sm text-gray-600">
              <p>
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => setSignInMode("signup")}
                  className=" hover:underline text-[#FFBA00]"
                >
                  Sign Up
                </button>
              </p>

              <Link
                href="/signin/renter"
                className="block mt-2 text-[#FFBA00] hover:underline"
              >
                Sign in as PG Renter instead →
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl lg:w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-1">Welcome, Owner</h2>
            <p className="text-gray-500 text-sm mb-5">
              Manage your property and grow your business with StayNest
            </p>

            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBA00]"
                  required
                />
              </div>
              <div>
                <label className="text-sm">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBA00]"
                  required
                />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBA00]"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBA00]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFBA00] text-white py-2 rounded-md hover:bg-[#BB8A52] transition font-bold"
              >
                Sign Up
              </button>
            </form>

            <div className="text-center mt-4 text-sm text-gray-600">
              <p>
                Already have an account?{" "}
                <button
                  onClick={() => setSignInMode("signin")}
                  className=" hover:underline text-[#FFBA00]"
                >
                  Sign In
                </button>
              </p>

              <Link
                href="/signin/renter"
                className="block mt-2 text-[#FFBA00] hover:underline"
              >
                Sign in as PG Renter instead →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OwnerLoginPage