import AdminBookingCard from "@/components/AdminBookingCard";
import React from "react";

const page = () => {
  return (
    <div>
      <p className="text-2xl font-bold">Bookings & Inquiries</p>
      <p className="mb-5">Review requests and manage renter relationships.</p>

      <AdminBookingCard />
      <AdminBookingCard />
      <AdminBookingCard />
    </div>
  );
};

export default page;
