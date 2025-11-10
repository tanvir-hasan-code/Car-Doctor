//"use client";
import MyBookingTable from "@/components/table/MyBookingsTable";
import { headers } from "next/headers";
import React from "react";

const fetchMyData = async () => {
	const header = await headers();
	const res = await fetch("http://localhost:3000/api/services", {
	  headers: header,
  });
  const d = await res.json();
  return d;
};

export default async function MyBookingsPage() {

	const data = await fetchMyData();

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {

  // 	fetchMyData()
  // },[])

  return (
    <div>
      <MyBookingTable  bookings={data} />
    </div>
  );
}
