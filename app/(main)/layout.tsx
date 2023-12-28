"use client";
import { useConvexAuth } from "convex/react";
import Loading from "../(intro)/_components/Loading";
import { redirect } from "next/navigation";
import NavBar from "../(intro)/_components/Navbar";
import SideBar from "./_components/SideBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }
  return (
    <>
      <NavBar />
      <div className="pt-14 flex">
        <SideBar />

        <main>{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
