import Link from "next/link";
import { OpenInNewWindow } from "../Icons/radix";

const languageColor = new Map([
  ["go", "#29BEB0"],
  ["golang", "#29BEB0"],
  ["rust", "#CE422B"],
  ["shell", "#8ce454"],
  ["typescript", "#007acc"],
]);

export default function ProjectBox({
  name,
  url,
  language,
  description,
}: {
  name: string;
  url: string;
  language: string;
  description: string;
}) {
  const langColor = languageColor.get(language.toLowerCase());

  return (
    <div className="hover:bg-slate-100 p-2 rounded dark:hover:bg-white/[.10]">
      <Link href={url} target="_black">
        <div className="flex space-x-2 items-center justify-start">
          <span className="font-bold text-lg">{name}</span>
          <OpenInNewWindow />
        </div>
      </Link>
      <div className="ml-4">
        <p className="flex space-x-2">
          <span className="opacity-70">Language: </span>
          <span className="flex space-x-2 items-center justify-start">
            <span>{language}</span>
            <span
              className={`h-3 w-3 inline-block rounded-full opacity-80 bg-[${langColor}]`}
            ></span>
          </span>
        </p>
        <p>
          <span className="opacity-70">Description: </span>
          <span>{description}</span>
        </p>
      </div>
    </div>
  );
}
