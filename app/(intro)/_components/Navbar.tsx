"use client";
import { useScrollTop } from "@/hook/useScrollTop";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useConvexAuth } from "convex/react";
import { SignUpButton, SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Loading from "./Loading";
const NavBar = () => {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    // normal nav styles but when scrolled, add fixed and border to bottom
    <nav
      className={cn(
        "z-[999] fixed top-0 w-full flex items-center bg-background transition-all duration-500 ease-in-out",
        scrolled && "border-b border-primary shadow-md "
      )}
    >
      <Link href="/" className="w-14 h-14">
        <Logo width={46} height={46} />
      </Link>
      <h1 className="font-bold text-2xl">Jotion</h1>
      <div className="flex flex-grow justify-end items-center gap-x-5 px-5">
        <ModeToggle />

        {isLoading && <Loading />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignUpButton mode="modal">
              <Button className="border" variant="ghost" size="sm">
                Sign Up
              </Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button className="border" variant="ghost" size="sm">
                Log In
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button className="border" variant="ghost" size="sm" asChild>
              <Link href="/documents">Enter Jotion</Link>
            </Button>

            <UserButton afterSignOutUrl="/" />
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
