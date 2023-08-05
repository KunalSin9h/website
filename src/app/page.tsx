import HoverTooltip from "@/components/hover-tooltip";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <p className="text-3xl font-bold">
        <span className="opacity-30">#</span> Hello 👋🏼
      </p>
      <p>
        I&#39;m <span className="">Kunal</span>, a{" "}
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
            </svg>{" "}
            Bhopal, INDIA
          </span>
        </Link>
        . I am pursuing my bachelor&#39;s in{" "}
        <span className="italic">Computer Science & Engineering.</span>
      </p>
      <p>
        I love building end-to-end products, tools, beautiful interfaces. I have
        a strong passion for Backend Development, Servers & Linux, CLI,
        Databases, Cloud & Networking.{" "}
      </p>
      <p>
        Arch Linux and Vim are my daily drivers for development, though for big
        projects, I have to switch to VSCode. Currently, I am learning Rust and
        Real-time Systems. I love contributing to Open-Source Software
        Development.
      </p>
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
        : A software for managing and working with app deployments.{" "}
      </p>
      <p>
        Apart from software development, I love to play basketball, attempt to
        wake up early for a morning run (although I &#39;m really struggling
        with this), have a strong interest in national and global geopolitics
        and occasionally upload videos on{" "}
        <Link
          href="https://www.youtube.com/@kunalsin9h"
          target="_black"
          prefetch={false}
          className="font-bold text-red-500 hover:opacity-60"
        >
          youtube
        </Link>
        .
      </p>
      <p className="text-xl font-bold">
        <span className="opacity-30">#</span> Let&#39;s Connect
      </p>
      <p>
        I have a consistent username of @
        <span className="font-bold">kunalsin9h</span>, so you can find me
        everywhere with that. I am always looking for new and exciting
        opportunity. Reach out to{" "}
        <Link href="mailto:kunal@kunalsin9h.com">
          <span className="hover:opacity-60 font-mono font-bold">
            kunal@kunalsin9h.com
          </span>
        </Link>
      </p>
      <div className="flex items-center space-x-2">
        <HoverTooltip
          content="LinkedIn"
          child={
            <Button variant="ghost" size="icon">
              <a href="https://linkedin.com/in/kunalsin9h" target="_black">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </Button>
          }
        />
      </div>
    </>
  );
}
