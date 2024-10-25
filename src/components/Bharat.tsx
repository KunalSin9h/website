"use client";

import { useRouter } from "next/navigation";

export default function Bharat() {
  const router = useRouter();
  return (
    <span
      onClick={(e) => {
        e.preventDefault();
        router.push("/bharat");
      }}
      className="inline"
    >
      <span className="font-bold hover:opacity-60 text-[1rem] inline">
        <svg
          className="inline text-orange-400"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
        </svg>{" "}
        Bhopal, BHARAT
      </span>
    </span>
  );
}
