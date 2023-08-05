import HoverTooltip from "@/components/hover-tooltip";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <p className="text-3xl font-bold">
        <span className="opacity-30">#</span> Hello 👋🏼
      </p>
      <p>
        I am <span className="">Kunal</span>, a{" "}
        <HoverTooltip content="29th May 2002" child={<span>21</span>} /> y/o
        developer based in{" "}
        <Link
          target="_black"
          href="https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh/@23.1993882,77.3234907,12z/data=!3m1!4b1!4m6!3m5!1s0x397c428f8fd68fbd:0x2155716d572d4f8!8m2!3d23.2599333!4d77.412615!16zL20vMGN3NTE?entry=ttu"
          prefetch={false}
        >
          <span className="font-bold hover:opacity-60 inline-block">
            <svg
              className="inline text-orange-400"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
            </svg>{" "}
            Bhopal, INDIA
          </span>
        </Link>
        . I am doing my bachelors in{" "}
        <span className="italic">Computer Science & Engineering.</span>
      </p>
      <p>
        I love building end-to-end products, tools, beautiful interfaces. I have
        strong passion for Backend Development, Servers & Linux, CLI, Databases
        and Cloud.{" "}
      </p>
      <p></p>
      <p>
        Right now i&#39;m working on{" "}
        <Link
          href="https://github.com/dearapp"
          target="_black"
          prefetch={false}
        >
          <span className="font-bold inline-block hover:opacity-60">
            <Image
              className="rounded inline"
              src="/images/dearapp.jpg"
              alt="DearApp Logo"
              width={20}
              height={20}
            />{" "}
            DearApp
          </span>
        </Link>
        : A privacy focused closed network social media app and{" "}
        <Link
          href="https://github.com/meltred"
          target="_black"
          prefetch={false}
        >
          <span className="font-bold inline-block hover:opacity-60">
            <Image
              className="rounded inline"
              src="/images/meltred.jpg"
              alt="Meltred Logo"
              width={20}
              height={20}
            />{" "}
            Meltred
          </span>
        </Link>
        : A program for managing and working with app deployments.{" "}
      </p>
    </>
  );
}
