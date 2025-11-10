
import BookingForm from "@/components/form/BookingForm";
import React from "react";

export default async function CheckOutPage({ params }) {
  const p = await params;
  const id = await p.id;

  const response = await fetch(`http://localhost:3000/api/services/${id}`);
  const data = await response.json();

  return (
    <div className="max-w-7xl mx-auto">
		  <BookingForm data={data} />
    </div>
  );
}
