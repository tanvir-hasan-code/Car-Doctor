"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import GoogleLogin from "./components/GoogleLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
	const router = useRouter();
  const handleLoginForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const Credentials = { email, password };

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: "/",
      });
		if (res.ok) {
			toast.success('Login Successfully!')
			router.push("/")
		} else {
			toast.error("Login Failed!")
	  }
	} catch (error) {
		toast.error(error.message)
      console.log(error);
    }
  };

  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row my-10">
      <div className="flex-1 flex justify-center">
        <Image
          className="w-9/12"
          src={"/images/login/login.svg"}
          width={900}
          height={400}
          alt="Login Page"
        />
      </div>
      <div className="flex-1">
        <form
          onSubmit={handleLoginForm}
          className="grid gap-6 max-w-md mx-auto border rounded-2xl shadow-xl p-10"
        >
          <h1 className="lg:text-5xl font-bold">Login</h1>

          <div>
            <label className="grid gap-2" htmlFor="Email">
              Email:
              <input
                type="email"
                className="input w-full"
                name="email"
                placeholder="Type your email..."
                required
              />
            </label>
          </div>

          <div>
            <label className="grid gap-2" htmlFor="Password">
              Password:
              <input
                type="password"
                className="input w-full"
                name="password"
                placeholder="Type your password..."
                required
              />
            </label>
          </div>

          <div className="flex">
            <button type="reset" className="btn flex-1 btn-error text-white">
              Reset
            </button>
            <button
              type="submit"
              className="btn flex-1 text-white bg-orange-500"
            >
              Sign In
            </button>
          </div>

          <p className="text-center text-gray-500">Or Sign In with</p>
          <p onClick={(e) => e.preventDefault()}>
            <GoogleLogin />
          </p>

          <p className="text-center">
            Don’t have an account?
            <Link href="/register" className="font-bold text-orange-600">
              {" "}
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
