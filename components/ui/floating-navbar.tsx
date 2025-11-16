"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // Keep visible by default; hide only when scrolling down past the top threshold.
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current !== "number") return;

    const direction = current - scrollYProgress.getPrevious()!;
    const nearTop = scrollYProgress.get() < 0.05;

    setVisible(nearTop || direction < 0);
  });

  return (
    <>
      {/* Mobile hamburger */}
      <div className="fixed top-4 left-4 z-[5100] md:hidden">
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/90 text-white px-3 py-2 shadow-lg"
        >
          <Menu className="w-5 h-5" />
        </button>
        {menuOpen && (
          <div className="mt-3 w-56 rounded-xl border border-neutral-800 bg-neutral-900/95 shadow-2xl backdrop-blur p-3 space-y-2">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`mobile-link=${idx}`}
                href={navItem.link}
                className="block rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-800 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {navItem.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Desktop nav */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: 0,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "hidden md:flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-neutral-800/70 dark:border-white/20 rounded-full bg-neutral-900/90 dark:bg-black/80 backdrop-blur shadow-[0px_6px_24px_rgba(0,0,0,0.25),0px_0px_0px_1px_rgba(255,255,255,0.04)] z-[5000] px-6 py-2 items-center justify-center space-x-4",
            className
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
