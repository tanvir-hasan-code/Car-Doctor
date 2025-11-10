import UpdateBookingForm from "@/components/form/UpdateBookingForm";
import { headers } from "next/headers";
import React from "react";

export default async function UpdateBooking({ params }) {
  const p = await params;

  const res = await fetch(
	  `https://car-doctor-flax.vercel.app/api/my-bookings/${p.id}`, {
		  headers: new Headers(await headers())
	}
  );
  const data = await res.json();

  return (
    <div>
      <UpdateBookingForm data={data} />
    </div>
  );
}
