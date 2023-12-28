"use client";
import Heading from "./_components/Heading";
import Heroes from "./_components/Heroes";
import Footer from "./_components/Footer";
//from the public folder, grab logo.svg and logo-dark

export default function Home() {
  return (
    <main className="min-h-full flex flex-col">
      <div className=" md:pt-10 flex flex-col items-center justify-center md:justify-start text-center gap-y-5 flex-1">
        <Heading />
        {/* heroes component */}
        <hr className="w-1/2 mx-auto border-gray-400 mb-4" />
        {/* heroes component */}
        <Heroes />
        {/* footer component  */}
        <Footer />
      </div>
    </main>
  );
}