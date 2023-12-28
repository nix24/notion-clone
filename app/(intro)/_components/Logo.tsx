import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import logoDark from "@/public/logoDark.svg";
import { Skeleton } from "@/components/ui/skeleton";

interface LogoProps {
  width: number | string;
  height: number | string;
}

const Logo: React.FC<LogoProps> = () => {
  const { theme, systemTheme, resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState(null);


  useEffect(() => {
    let activeTheme = theme === "system" ? systemTheme : theme;
    setLogoSrc(activeTheme === "dark" ? logoDark : logo);
  }, [theme, systemTheme, resolvedTheme]);
  return logoSrc ? (
    <Image src={logoSrc} alt="Jotion Logo" className="mx-auto" />
  ) : (
    <Skeleton
      className="mx-auto rounded w-10 h-10 mt-3"
    />
  );
};

export default Logo;