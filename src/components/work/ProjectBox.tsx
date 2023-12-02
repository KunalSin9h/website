import Link from "next/link";
import { OpenInNewWindow } from "../Icons/radix";

const languageColor = new Map([
  ["go", "bg-cyan-500"],
  ["golang", "bg-cyan-500"],
  ["rust", "bg-orange-300"],
  ["shell", "bg-lime-500"],
  ["typescript", "bg-sky-500"],
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
  const langs = language.split(" ");

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
          <span className="opacity-60 font-bold">Language: </span>
          <span className="flex space-x-2 items-center justify-start">
            {langs.map((lang: string) => {
              return (
                <>
                  <span>{lang}</span>
                  <span
                    className={`h-3 w-3 inline-block rounded-full opacity-80 ${languageColor.get(
                      lang.toLowerCase()
                    )}`}
                  ></span>
                </>
              );
            })}
          </span>
        </p>
        <p>
          <span className="opacity-60 font-bold">Description: </span>
          <span>{description}</span>
        </p>
      </div>
    </div>
  );
}
