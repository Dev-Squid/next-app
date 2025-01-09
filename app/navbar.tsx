'use client'

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
      {status === "authenticated" && 
      <div> 
        {session.user?.name}
        {" "}
        <Link href="/api/auth/signout">Sign Out</Link>
      </div>}
    </div>
  );
};

export default NavBar;
