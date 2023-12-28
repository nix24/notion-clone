import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const font = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "600"],
});
const Footer = () => {
  return (
    <footer className="flex items-center justify-center h-24 border-t bg-background w-full">
      <div className="flex flex-row items-center justify-start gap-x-1 px-3">
        <p className="text-sm md:text-base font-bold">Jotion</p>
      </div>
      <div className="w-full mx-auto flex items-center justify-end gap-x-2 px-5">
        {/* github button  */}

        <Button
          className="text-sm md:text-base font-bold p-2 rounded-full"
          variant="secondary"
          asChild
        >
          <Link href="https://github.com/nix24" passHref target="_blank">
            {/* github icon */}
            <Github className="w-7 h-7" />
          </Link>
        </Button>

        <Button
          className="text-sm md:text-base font-bold p-2 rounded-full"
          variant="secondary"
          asChild
        >
          <Link
            href="https://www.linkedin.com/in/jaylon-carrington-07b924211/"
            passHref
            target="_blank"
          >
            {/* github icon */}
            <Linkedin className="w-7 h-7" />
          </Link>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
