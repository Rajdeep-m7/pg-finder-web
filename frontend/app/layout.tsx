import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "sonner";
import AuthProvider from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "StayNest",
  description: "stayNest - Find your perfect PG accommodation with ease. ",
  icons:{
    icon : "/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <AuthProvider>
        <Header />
        {children}
        <Toaster
          position="top-right"
          richColors
          expand
          duration={1000}
          closeButton
        />
        <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
