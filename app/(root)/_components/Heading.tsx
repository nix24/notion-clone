import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import logoDark from "@/public/logoDark.svg";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Logo from "./Logo";
const Heading = () => {
  const bounceAnimation = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 2, // Increase this to make the animation last longer
        bounce: 0.75, // Increase this to make the animation more bouncy
      },
    },
  };

  return (
    <header className="max-w-3xl space-y-4">
      {/* have img fade in on load  */}
      <div className="w-60 h-60 md:w-[400px] md:h-[400px] mx-auto">
      {/* if Logo is not loaded, show skeleton  */}
        <Logo  width={400} height={400} />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold">
        Work, Notes, & Documents Made so much simpler with:
      </h1>
      <motion.h1
        variants={bounceAnimation}
        initial="initial"
        animate="animate"
        className="text-5xl md:text-6xl font-bold underline text-blue-500"
      >
        Jotion
      </motion.h1>
      <h3 className="text-xl md:text-2xl font-medium">
        Organize your work better, faster and with others!
      </h3>
      <Button>
        Enter Jotion <ArrowRight />
      </Button>
    </header>
  );
};

export default Heading;