import React from "react";
import { AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/theme/theme-toggle";

const Header = () => {
  return (
    <AnimatePresence>
      <div className="w-screen min-h-[200px] sticky top-0 left-0 right-0 inset-0 bg-red-300">
        <ThemeToggle />
      </div>
    </AnimatePresence>
  );
};
export default Header;
