import { cn } from "@/lib/utils";
import { ChevronLeft, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { ElementRef, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const SideBar = () => {
  const pathName = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  /**
   * Handles the mouse move event for resizing the sidebar.
   *
   * @param e - The MouseEvent object.
   */
  const handleMouseMove = (e: MouseEvent) => {
    if (isResizingRef.current) {
      let newWidth = e.clientX;
      if (newWidth < 240) {
        newWidth = 240;
      }
      if (newWidth > 480) {
        newWidth = 480;
      }
      //if we have sidebar and navbar current
      if (sidebarRef.current && navbarRef.current) {
        sidebarRef.current.style.width = `${newWidth}px`;
        navbarRef.current.style.setProperty("left", `${newWidth}px`);
        navbarRef.current.style.setProperty(
          "width",
          `calc(100% - ${newWidth}px)`
        );
      }
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  //creating a reset function for the sidebar
  const resetWidth = () => {
    //if we have sidebar and navbar current
    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `240px`;
      navbarRef.current.style.setProperty("left", `240px`);
      navbarRef.current.style.setProperty("width", `calc(100% - 240px)`);
    }
  };
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) {
      resetWidth();
    } else {
      setIsResetting(true);
      setTimeout(() => {
        setIsResetting(false);
      }, 300);
    }
  };

  return (
    <div className="h-screen">
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar p-2 h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-50 no-scrollbar",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0 p-0"
        )}
      >
        <div
          role="button"
          className={cn(
            "opacity-0 group-hover/sidebar:opacity-100 absolute right-3 top-3",
            isMobile && "opacity-100"
          )}
        >
          <ChevronLeft className="h-6 w-6  hover:bg-primary/50 rounded-full transition " />
        </div>
        <div className="mt-5">
          <p>Action Items</p>
        </div>
        <div className="mt-5">
          <p>Documents</p>
        </div>
        <div
          onMouseDown={handleMouseDown}
          onClick={toggleSidebar}
          className=" opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/25 right-0 top-0"
        />
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-[55px] z-[999]  w-[calc(100%-240px)] ",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0 p-0"
        )}
      >
        <nav className="bg-transparent px-3 py-2 w-full opacity-0">
          {isCollapsed && (
            <MenuIcon role="button" className="h-6 w-6 text-muted-foreground" />
          )}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
