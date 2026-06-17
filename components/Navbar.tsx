"use client";

import { NAVBAR_HEIGHT } from "@/lib/constants";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 bg-black shadow-sm"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex items-center justify-between h-full py-3 px-8 bg-primary-700 text-white">
       
        <Link
          href="/"
          className="cursor-pointer hover:text-primary-300"
          scroll={false}
        >
          <div className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="Rentiful Logo"
              width={24}
              height={24}
              className="w-8 h-8"
            />
            <div className="text-lg font-bold">RENT
              <span className="text-amber-500">IFUL</span>
            </div>
          </div>
          
        </Link>
        <p className=" text-stone-300 hidden md:block">
          Discover your perfact rental apartment with our advanced search
        </p>
        <div className="flex items-center gap-5">
          <Link href="/SignIn"
          >
           <Button variant="outline" className=" hover:text-black hover:bg-white  border-white text-white bg-transparent">
              Sign In
            </Button>
          </Link>
           <Link href="/SignUp"
          >
           <Button variant="outline" className="text-white border-white bg-rose-600 hover:bg-white hover:text-black rounded-lg">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
