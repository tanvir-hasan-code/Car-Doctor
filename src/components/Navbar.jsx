"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const {data: session, status} = useSession()
  const navMenu = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        <Link href={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link href={"/my-bookings"}>My-Bookings</Link>
      </li>
    </>
  );

  return (
    <div className="navbar rounded-2xl mt-2 bg-base-100 shadow-sm max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navMenu}
          </ul>
        </div>
			  <Link href={"/"} className=" text-xl">
			  <Image src={"/assets/logo.svg"} width={70} height={70} alt="Logo"/>
			  </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navMenu}
        </ul>
      </div>
      <div className="navbar-end">
        {status === "authenticated"?  (<><Image className="rounded-full border-3 border-blue-500" src={session?.user?.image || "data:image/jpeg;base64,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"} width={54} height={50} alt="User Profile"/> <p className="btn btn-outline mx-3" onClick={()=>signOut()}>Log Out</p></>) : <><Link href={"/login"} className="text-blue-500 btn  mr-3 ">Login</Link></> }
       
        <a className="btn btn-outline text-orange-600">Appointment</a>
      </div>
    </div>
  );
}
