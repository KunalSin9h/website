import Image from "next/image";
import Link from "next/link";
import { OpenInNewWindow } from "../Icons/radix";

export default function WorkBox({
  url,
  icon,
  name,
  tagline,
  role,
  work,
  period,
}: {
  url: string;
  icon: string;
  name: string;
  tagline: string;
  role: string;
  work: string;
  period?: string;
}) {
  return (
    <Link href={url} target="_black">
      <div
        className={`flex flex-col rounded-xl hover:bg-slate-50 dark:bg-inherit  border`}
      >
        <div className="flex items-center justify-start space-x-2 p-4 border-b ">
          <Image
            className="rounded-xl"
            src={icon}
            alt={`${name} logo`}
            width={65}
            height={65}
          />
          <div>
            <span className="uppercase text-[0.7rem] text-[#f545da]">
              {period}
            </span>
            <div className="flex items-center space-x-1">
              <span className="font-bold text-[1rem]">{name}</span>
              <OpenInNewWindow />
            </div>
            <span className="opacity-90">{tagline}</span>
          </div>
        </div>
        <div className="flex flex-col space-y-2 text-sm leading-non p-4">
          <p className="font-bold">Role</p>
          <span>{role}</span>
          <p className="font-bold">
            {period === undefined ? "What I Do" : "What I Did"}
          </p>
          <span>{work}</span>
        </div>
      </div>
    </Link>
  );
}
