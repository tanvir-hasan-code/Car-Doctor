"use client";

import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import GoogleLogin from '../login/components/GoogleLogin';
import { UserRegister } from '../actions/auth/UserRegister';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function RegisterPage() {
	const router = useRouter();

	const handleRegisterForm = async (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const payload = {name, email, password };
		const result = await UserRegister(payload);
		if (result?.insertedId) {
			form.reset();
			router.push("/")
			toast.success("Register Successfully!")
		} else {
			toast.error("Register Failed!")
		}
	}

  return (
	<section className='max-w-7xl mx-auto flex flex-col md:flex-row my-10'>
		  <div className='flex-1 flex justify-center'>
			  <Image className='w-9/12' src={"/images/login/login.svg"} width={900} height={400} alt='Login Page'/>
		  </div>
		  <div className='flex-1'> 
			  <form onSubmit={handleRegisterForm} className='grid gap-6 max-w-md mx-auto border rounded-2xl shadow-xl p-10'>
				  <h1 className='lg:text-5xl font-bold'>Register</h1>
				  <div>
					  <label className='grid gap-2' htmlFor="Email">Name: 
						  <input type='text' className='input w-full' name='name' placeholder='Type your name...'></input>
					  </label>
				  </div>
				  <div>
					  <label className='grid gap-2' htmlFor="Email">Email: 
						  <input type='email' className='input w-full' name='email' placeholder='Type your email...'></input>
					  </label>
				  </div>
				  <div>
					  <label className='grid gap-2' htmlFor="Password">Confirm Password: 
						  <input type='password' className='input w-full' name='password' placeholder='Type your password...'></input>
					  </label>
				  </div>
				  <div className='flex'>
					  <button type='reset' className='btn flex-1 btn-error text-white'>Reset</button>
					  <button type="submit" className='btn flex-1  text-white bg-orange-500'>Register</button>
				  </div>
					<p className='text-center text-gray-500'>Or Sign In with</p>

				  <p onClick={(e) => e.preventDefault()}><GoogleLogin/></p>
				  <p className='text-center'>Already have an account?<Link href={"/login"} className='font-bold text-orange-600'> Login</Link></p>
			  </form>
		  </div>
	</section>
  )
}
