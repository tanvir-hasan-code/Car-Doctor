"use client";
import DeleteBookingButton from "@/app/my-bookings/components/DeleteBookingButton";
import Image from "next/image";
import React from "react";
import { FaEdit } from "react-icons/fa";

export default function MyBookingTable({ bookings }) {
  //   if (loading || bookings.length === 0) {
  //     return (
  //       <div className="flex flex-col justify-center items-center h-[60vh]">
  //         <span className="loading loading-spinner loading-lg text-orange-500"></span>
  //         <p className="text-gray-600 mt-3 font-medium">Loading bookings...</p>
  //       </div>
  //     );
  //   }
  return (
    <div className="overflow-x-auto w-full mt-10 max-w-7xl mx-auto">
      <table className="table w-full border border-gray-200 rounded-lg shadow-md">
        {/* Table Head */}
        <thead className="bg-orange-500 text-white ">
          <tr>
            <th className="text-center py-3 px-2">#</th>
            <th className="py-3 px-4">Service Image</th>
            <th className="py-3 px-4">Service Name</th>
            <th className="py-3 px-4 text-center">Price</th>
            <th className="py-3 px-4 text-center">Date</th>
            <th className="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {bookings?.length > 0 ? (
            bookings.map((item, index) => (
              <tr
                key={item._id}
                className="hover:bg-orange-50 transition-all duration-200"
              >
                {/* Index */}
                <td className="text-center font-medium text-gray-600">
                  {index + 1}
                </td>

                {/* Image */}
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-14">
                      <Image
                        width={50}
                        height={50}
                        src={item.service_image}
                        alt={item.service_name}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </td>

                {/* Name */}
                <td className="font-semibold text-gray-800">
                  {item.service_name}
                </td>

                {/* Price */}
                <td className="text-center text-gray-700 font-medium">
                  ${item.service_price}
                </td>

                {/* Date */}
                <td className="text-center text-gray-600">
                  {new Date(item.date).toLocaleDateString("en-GB")}
                  {/* GB format → DD/MM/YYYY */}
                </td>

                {/* Actions */}
                <td className="text-center flex justify-center">
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="btn btn-sm bg-orange-400 hover:bg-orange-500 text-white mr-2"
                  >
                    <FaEdit />
                  </button>
                  <DeleteBookingButton id={item._id} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="text-center text-gray-500 py-8 font-medium"
              >
                No Bookings Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
