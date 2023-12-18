"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  //when we click the button, it will popup an alert
  const handleAlert = () => {
    alert("Hello World");
  };
  return (
    <main>
      <Button onClick={handleAlert} variant="secondary" size="lg">
        Click me
      </Button>
    </main>
  );
}
