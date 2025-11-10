"use client"
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

export default function DeleteBookingButton({ id }) {
	const router = useRouter();

	const handleDelete = async (id) => {
		const res = await fetch(`http://localhost:3000/api/services/${id}`, {
			method: "DELETE"
		})
		const result = await res.json();
		console.log(result);
		router.refresh();
	}

  return (
	<div>
	  <button
                    onClick={() => handleDelete(id)}
                    className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                  >
                    <FaTrash />
                  </button>
	</div>
  )
}
