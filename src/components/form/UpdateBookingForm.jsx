"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function UpdateBookingForm({ data }) {
  const { data: session } = useSession();
	const [loading, setLoading] = useState(false);
	const router = useRouter();

  const handleSubmit = async (e) => {
	e.preventDefault();
	setLoading(true);
	toast.loading("Submitting your order...", { id: "order-toast" });

	const form = e.target;
	const payload = {
	//   name: form.name.value,
	//   email: form.email.value,
	  phone: form.phone.value,
	  date: form.date.value,
	  address: form.address.value,
	//   service_id: data._id,
	//   service_name: data.title,
	//   service_price: data.price,
	//   service_image: data.img,
	};

	try {
	  const response = await fetch(`/api/my-bookings/${data?._id}`, {
		method: "PATCH",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(payload),
	  });

		const result = await response.json();
		console.log(result)
	  if (result.modifiedCount) {
		toast.success("Order Updated Successfully!", { id: "order-toast" });
		  form.reset();
		  router.push("/my-bookings")
	  } else {
		toast.error("Something went wrong. Please try again.", { id: "order-toast" });
	  }
	} catch (error) {
	  console.error(error);
	  toast.error("Failed to Update order!", { id: "order-toast" });
	} finally {
	  setLoading(false);
	}
  };

  return (
	<div className="min-h-screen flex justify-center items-center bg-linear-to-br from-orange-50 via-white to-orange-100 p-6">
	  <div className="w-full max-w-4xl bg-base-100 shadow-lg border border-orange-100 rounded-2xl p-10">
		<h2 className="text-3xl font-bold text-center text-orange-600 mb-10">
		  🧾 Update Order Information    
		</h2>

		<form onSubmit={handleSubmit} className="space-y-10 mt-10">
		  {/* Input Fields */}
		  <div className="grid md:grid-cols-2 gap-6">
			{/* Name */}
			<div className="form-control">
			  <label className="label">
				<span className="label-text font-semibold text-gray-700">Name</span>
			  </label>
			  <input
				type="text"
				name="name"
				defaultValue={session?.user?.name}
				readOnly
				required
				className="input input-bordered w-full h-12 rounded-lg"
			  />
			</div>

			{/* Email */}
			<div className="form-control">
			  <label className="label">
				<span className="label-text font-semibold text-gray-700">Email</span>
			  </label>
			  <input
				type="email"
				name="email"
				defaultValue={session?.user?.email}
				readOnly
				required
				className="input input-bordered w-full h-12 rounded-lg"
			  />
			</div>

			{/* Phone */}
			<div className="form-control">
			  <label className="label">
				<span className="label-text font-semibold text-gray-700">Phone</span>
			  </label>
			  <input
				type="text"
							  name="phone"
							  defaultValue={data?.phone}
				placeholder="Enter your phone number"
				required
				className="input input-bordered w-full h-12 rounded-lg"
			  />
			</div>

			{/* Date */}
			<div className="form-control">
			  <label className="label">
				<span className="label-text font-semibold text-gray-700">Date</span>
			  </label>
						  <input
							  defaultValue={data?.date}
				type="date"
				name="date"
				required
				className="input input-bordered w-full h-12 rounded-lg"
			  />
			</div>

			{/* Due */}
			<div className="form-control">
			  <label className="label">
				<span className="label-text font-semibold text-gray-700">Due</span>
			  </label>
			  <input
				type="number"
				name="due"
				defaultValue={data?.service_price}
				readOnly
				required
				className="input input-bordered w-full h-12 rounded-lg"
			  />
			</div>

			{/* Present Address */}
			<div className="form-control md:col-span-2">
			  <label className="label">
				<span className="label-text font-semibold text-gray-700">Present Address</span>
			  </label>
			  <textarea
				name="address"
				defaultValue={data?.address}
				placeholder="Enter your present address"
				required
				className="textarea textarea-bordered w-full h-24 rounded-lg resize-none"
			  ></textarea>
			</div>
		  </div>

		  {/* Submit Button */}
		  <div>
			<button
			  type="submit"
			  disabled={loading}
			  className={`btn w-full h-14 text-lg font-semibold text-white rounded-lg shadow-md transition-all duration-300 ${
				loading
				  ? "bg-orange-300 cursor-not-allowed"
				  : "bg-orange-500 hover:bg-orange-600"
			  }`}
			>
			  {loading ? "Submitting..." : "Confirm Order"}
			</button>
		  </div>
		</form>
	  </div>
	</div>
  );
}
