import { FaArrowRight } from "react-icons/fa";
import { collectionNames } from '@/lib/CollectionNames';
import DatabaseConnect from '@/lib/DatabaseConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ServicesDetailsPage({params}) {
	const p = await params;
	const id = await p.id;
	const filter = {_id: new ObjectId(id)}
	const serviceResponse = DatabaseConnect(collectionNames.OUR_SERVICES);
	const data = await serviceResponse.findOne(filter);

	return (<>
	<section className=' max-w-7xl mx-auto my-6'>
			<div className='relative'>

				<Image className='rounded-2xl' src={"/images/checkout/checkout.png"} width={1437} height={300} alt='Details Banner'/>

				<div className='absolute color-overly top-0 rounded-2xl w-full h-full  '>
					<h1 className='text-white text-xl md:text-3xl lg:text-5xl font-bold flex items-center h-full ml-8 md:ml-12 lg:ml-16'>⟴ Service Details</h1>
					<p className='font-bold absolute top-0 text-white text-xs md:text-base lg:text-xl flex justify-center w-full h-full items-end px-4'>
						<span className='bg-orange-500 px-4 py-2 '>Home/Service Details</span>
					</p>
				</div>
		</div>
	</section>
		<section className='max-w-7xl mx-auto'>
			<div className='grid md:grid-cols-12'>
				<div className='md:col-span-8'>
					<Image className='rounded-2xl' src={data?.img} width={1200} height={400} alt={data?.title} />
					<div>
						<h1 className="lg:text-5xl font-bold my-5">{data?.title}</h1>
						<p className="text-gray-500">{data?.description}</p>
					</div>
				{/* Card facility */}
					<div className="grid md:grid-cols-2 gap-2 mt-5">
						{data?.facility.map((item, i) => {
							return (
								<div key={i} className="p-8 bg-gray-200 rounded-2xl   border-t-3  border-orange-600">
									<h1 className="text-xl font-bold">{item?.name}</h1>
									<p>{item?.details}</p>
							</div>
						)
					})}
					</div>

				</div>
				<div className='md:col-span-4 lg:pl-8'>
					<div className=' bg-gray-200 w-full p-8 rounded-2xl'>
						<h1 className='font-bold md:text-2xl '>Services</h1>
						<div className="flex items-center mt-5 bg-orange-500 py-3 text-white px-2 font-bold justify-between rounded-2xl">
							<h1>Full Car Repair</h1>
							<FaArrowRight/>
						</div>
						<div className="flex items-center mt-5 bg-white  py-3  px-2 font-bold justify-between rounded-2xl">
							<h1>Engine Repair</h1>
							<FaArrowRight/>
						</div>
						<div className="flex items-center mt-5 bg-white py-3  px-2 font-bold justify-between rounded-2xl">
							<h1>Automatic Services</h1>
							<FaArrowRight/>
						</div>
						<div className="flex items-center mt-5 bg-white py-3  px-2 font-bold justify-between rounded-2xl">
							<h1>Engine Oil Change</h1>
							<FaArrowRight/>
						</div>
						<div className="flex items-center mt-5 bg-white py-3  px-2 font-bold justify-between rounded-2xl">
							<h1>Battery Charge</h1>
							<FaArrowRight/>
						</div>
					</div>
				</div>
		{/* Sideber */}
			</div>
		  
			
	</section>
  </>
  )
}
