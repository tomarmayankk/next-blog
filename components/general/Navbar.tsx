"use client";
import Link from "next/link";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "../ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Navbar() {
  const {getUser} = useKindeBrowserClient();
  const user =  getUser();
  return (
    <nav className="py-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
        <Link href= "/">
        <h1 className="text-blue-500 text-3xl font-semibold">BLOG</h1>
        </Link>
        <div className="hidden sm:flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-blue-400 font-medium">Home</Link>
            <Link href="/dashboard" className="text-sm hover:text-blue-400 font-medium">Dashboard</Link>
        </div>
        </div>
        {
          user ? (
            <div className="flex items-center gap-4">
              <p>{user.given_name}</p>
              <LogoutLink className={buttonVariants()}>Logout</LogoutLink>
            </div>
          ) : (
            <div className="flex items-center gap-4">
            <LoginLink className={buttonVariants({variant: 'secondary'})}>Sign in</LoginLink>
            <RegisterLink className={buttonVariants()}>Sign up</RegisterLink>
            </div>
          )
        }
    </nav>
  )
}
