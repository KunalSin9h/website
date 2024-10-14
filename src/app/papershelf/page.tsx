import PageMeta from "@/lib/pageMetadata";
import { Metadata } from "next";

export const metadata: Metadata = PageMeta({
  title: "Paper Shelf",
  description: "Collections of research papers I have read or reading...",
  url: "https://kunalsin9h.com/papershelf/",
});

type Paper = {
  title: string;
  link: string;
  reading: boolean;
};

const distributedSystems: Paper[] = [
  {
    title: "MapReduce: Simplified Data Processing on Large Clusters",
    link: "https://pdos.csail.mit.edu/6.824/papers/mapreduce.pdf",
    reading: true,
  },
];

export default function Papers() {
  return (
    <>
      <p className="text-3xl font-bold">
        <span className="opacity-30">#</span> Paper Shelf
      </p>
      <p className="text-xl">{metadata.description}</p>

      <div>
        <p className="font-bold uppercase text-red-400 tracking-wider">
          Distributed Systems
        </p>
        <ol>
          {distributedSystems.map((item: Paper, index: number) => {
            return (
              <li className="my-2" key={index}>
                <div
                  className={`flex flex-col  p-2 ${item.reading && "border rounded bg-gray-100"}`}
                >
                  <span
                    className={`text-sm uppercase text-green-500 ${!item.reading && "hidden"}`}
                  >
                    Reading
                  </span>
                  <a
                    href={item.link}
                    target="_blank"
                    className="underline underline-offset-2 hover:text-gray-700"
                  >
                    {item.title}
                  </a>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
