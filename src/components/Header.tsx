import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";
import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { Contact2, EyeIcon, Home, MenuIcon, Workflow } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

  // on scroll down
  const onScrollDown = () => {
    // move header up
    const header = document.querySelector("header");
    if (header) {
      header.classList.add("-translate-y-20", "opacity-0");
    }
  };

  const onScrollUp = () => {
    const header = document.querySelector("header");
    if (header) {
      header.classList.remove("-translate-y-20", "opacity-0");
    }
  };

  // add scroll listener
  React.useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        onScrollDown();
      } else {
        onScrollUp();
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, transform: "translateY(-40px)" }}
        animate={{ opacity: 1, transform: "translateY(8px)" }}
        transition={{ duration: 0.3, delay: 0.5, type: "tween" }}
        className="fixed left-0 right-0 top-0 z-40 transition-all duration-300 ease-in-out"
      >
        <div className="w-[60%] rounded-[11px] mx-auto flex items-center justify-between px-3 py-3 md:px-4 bg-background/90 backdrop-blur-sm border">
          <nav className="hidden md:flex items-center gap-2">
            <Button
              variant={`${location.pathname === "/" ? "secondary" : "ghost"}`}
              asChild
            >
              <Link to="/">
                <Home /> Portfolio
              </Link>
            </Button>
            <Button
              variant={`${
                location.pathname === "/about" ? "secondary" : "ghost"
              }`}
              asChild
            >
              <Link to="/about">
                <Contact2 /> About
              </Link>
            </Button>
          </nav>

          <Link
            to="/"
            className="relative md:absolute md:left-1/2 md:-translate-x-1/2 font-mono text-base md:text-xl font-bold tracking-widest uppercase flex items-center gap-1 hover:underline underline-offset-4"
          >
            Thrumyeyes <EyeIcon />
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" onClick={() => setIsContactOpen(true)}>
              <Workflow /> Contact
            </Button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden" asChild>
              <Button variant="ghost" size={"icon"} aria-label="Menu">
                <MenuIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIsContactOpen(true)}>
                Contact
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.header>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default Header;
