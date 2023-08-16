"use client";

import { useState, useEffect } from "react";
import { UpArray } from "./Icons/radix";

export default function BackToTop() {
  const [up, setUp] = useState(false);

  useEffect(() => {
    const toggleDirection = () => setUp(window.scrollY > 200);
    window.addEventListener("scroll", toggleDirection);
    return () => window.removeEventListener("scroll", toggleDirection);
  }, []);

  return (
    <button
      aria-label="Back to top"
      className={`fixed p-2 bottom-2 right-2 backdrop-blur-sm rounded cursor-pointer bg-slate-500/30 hover:bg-slate-500/40 dark:bg-white/30 dark:hover:bg-white/40 transition-all ease-linear ${
        up ? "rotate-0" : "rotate-180"
      }`}
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({
          top: up ? 0 : document.body.scrollHeight,
          behavior: "smooth",
        });
      }}
    >
      <UpArray />
    </button>
  );
}
