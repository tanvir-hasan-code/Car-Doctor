import UpdateBookingForm from '@/components/form/UpdateBookingForm'
import React from 'react'

export default async function UpdateBooking({params}) {

	const p = await params;

	const res = await fetch(`http://localhost:3000/api/my-bookings/${p.id}`);
	const data = await res.json();



  return (
	<div>
	  <UpdateBookingForm data={data}/>
	</div>
  )
}
