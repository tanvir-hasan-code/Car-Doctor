
import { collectionNames } from "@/lib/CollectionNames";
import DatabaseConnect from "@/lib/DatabaseConnect";
import Image from "next/image";
import React from "react";

export default async function OurService() {
//   const data = [
//     {
//       _id: "635a0c0b64a6d231228942ae",
//       service_id: "04",
//       title: "Engine Oil Change",
//       img: "https://i.ibb.co/T2cpBd5/888.jpg",
//       price: "20.00",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//       facility: [
//         {
//           name: "Instant Car Services",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "24/7 Quality Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "Easy Customer Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "Quality Cost Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//       ],
//     },
//     {
//       _id: "635a0c0b64a6d231228942af",
//       service_id: "05",
//       title: "Battery Charge",
//       img: "https://i.ibb.co/ydCbDN3/5555.jpg",
//       price: "20.00",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//       facility: [
//         {
//           name: "Instant Car Services",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "24/7 Quality Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "Easy Customer Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "Quality Cost Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//       ],
//     },
//     {
//       _id: "635b591a1dafe382a9da8c96",
//       service_id: "01",
//       title: "Full car Repair",
//       img: "https://i.ibb.co/R6Z2nFM/55.jpg",
//       price: "200.00",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//       facility: [
//         {
//           name: "Instant Car Services",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "24/7 Quality Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "Easy Customer Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "Quality Cost Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//       ],
//     },
//     {
//       _id: "635b5afc1dafe382a9da8c98",
//       service_id: "02",
//       title: "Engine Repair",
//       img: "https://i.ibb.co/5MvmD2g/88.jpg",
//       price: "150.00",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//       facility: [
//         {
//           name: "Instant Car Services",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "24/7 Quality Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "Easy Customer Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "Quality Cost Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//       ],
//     },
//     {
//       _id: "635b5b691dafe382a9da8c99",
//       service_id: "03",
//       title: "Automatic Services",
//       img: "https://i.ibb.co/wh7t3N3/555.jpg",
//       price: "30.00",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//       facility: [
//         {
//           name: "Instant Car Services",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "24/7 Quality Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "Easy Customer Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "Quality Cost Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//       ],
//     },
//     {
//       _id: "635b5ba51dafe382a9da8c9a",
//       service_id: "06",
//       title: "Electrical System",
//       img: "https://i.ibb.co/KzCG8qr/8888.jpg",
//       price: "20.00",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//       facility: [
//         {
//           name: "Instant Car Services",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "24/7 Quality Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "Easy Customer Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//         {
//           name: "Quality Cost Service",
//           details:
//             "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
//         },
//       ],
//     },
//   ];

	const servicesResponse =  DatabaseConnect(collectionNames.OUR_SERVICES);
	const data = await servicesResponse.find({}).toArray();
	
	
  return (
    <section className="max-w-7xl mx-auto my-36">
      <div className="text-center">
        <p className="text-red-500 uppercase   font-bold">Service</p>

        <h1 className="text-4xl font-bold lg:text-5xl my-5">Our Service Area</h1>
        <p className="text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
      </div>
      {/* cards Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10  mt-10 px-5 md:px-10 lg:px-0">
			  {data?.map((item, i) => {
				  return (
					  <div key={item?._id} className="border rounded-2xl p-6 shadow-lg border-gray-400 transform transition-transform duration-500 ease-in-out hover:scale-110">
						  <Image className="object-cover rounded-2xl h-48 mx-auto" src={item.img} width={350} height={210} alt={item.title}/>
						  <h1 className="text-gray-800 text-2xl my-2 font-bold">{item?.title}</h1>
						  <p className="text-red-600 font-bold text-lg flex justify-between">Price: ${item.price} <span><button className="text-xl text-red-700">➤</button></span></p>
						  
				</div>
			)
		})}
      </div>
    </section>
  );
}
