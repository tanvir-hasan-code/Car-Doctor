import BookingForm from "@/components/form/BookingForm";
import React from "react";

export default async function CheckOutPage({ params }) {
  const p = await params;
  const id = await p.id;

  const response = await fetch(
    `https://car-doctor-flax.vercel.app/api/services/${id}`
  );
  const data = await response.json();

  return (
    <div className="max-w-7xl mx-auto">
      <BookingForm data={data} />
    </div>
  );
}
