"use client";

import { useRouter } from "next/navigation";

export default function Bharat() {
  const router = useRouter();
  return (
    <span
      // target="_black"
      // href="https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh/@23.1993882,77.3234907,12z/data=!3m1!4b1!4m6!3m5!1s0x397c428f8fd68fbd:0x2155716d572d4f8!8m2!3d23.2599333!4d77.412615!16zL20vMGN3NTE?entry=ttu"
      // href="/bharat"
      // prefetch={false}
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
