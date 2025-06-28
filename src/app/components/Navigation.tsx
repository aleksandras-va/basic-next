"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

// aleksandrasvasinas+clerkmock@gmail.com
// 1da907b00b1b03c0
export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      <Link href="/" className={pathname === "/" ? "text-green-400" : ""}>
        Home
      </Link>
      <Link href="/about" className={pathname === "/about" ? "text-green-400" : ""}>
        About
      </Link>
      <Link href="/products/1" className={pathname.startsWith("/products") ? "text-green-400" : ""}>
        Product 1
      </Link>
      <SignInButton mode="modal" />
      <UserButton />
    </nav>
  );
};
