import React from "react";
import Link from "next/link.js";

const Navbar = () => {
  return (
    <nav className=" w-full grid place-items-center">
      <div className=" w-8/12 bg-gray-700 my-8 py-2 px-4">
      <Link href="/">Home </Link>
      <Link href="/notes">Notes </Link>
      </div>
    </nav>
  );
};

export default Navbar;
