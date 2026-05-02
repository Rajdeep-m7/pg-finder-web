"use client";

import { useAuth } from "@/store/useAuthStore";
import { useEffect } from "react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {isCheckingAuth} = useAuth();


  useEffect(() => {
    useAuth.getState().checkAuth(); 
  }, []);

  if (isCheckingAuth) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-black"></div>
      </div>
    );
  }

  return <>{children}</>;
}