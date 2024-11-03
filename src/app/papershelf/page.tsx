import PageMeta from "@/lib/pageMetadata";
import { Metadata } from "next";

export const metadata: Metadata = PageMeta({
  title: "Paper Shelf",
  description:
    "Collections of research papers and books I have read or am reading...",
  url: "https://kunalsin9h.com/papershelf/",
});

type Paper = {
  title: string;
  link: string;
  reading: boolean;
  readingList: boolean;
};

type Book = {
  title: string;
  link: string;
  autohor: string;
  reading: boolean;
  readingList: boolean;
};

const distributedSystems: Paper[] = [
  {
    title: "Scalability! But at what COST?",
    link: "https://www.usenix.org/system/files/conference/hotos15/hotos15-paper-mcsherry.pdf",
    reading: true,
    readingList: false,
  },
  {
    title: "MapReduce: Simplified Data Processing on Large Clusters",
    link: "https://pdos.csail.mit.edu/6.824/papers/mapreduce.pdf",
    reading: false,
    readingList: true,
  },
];

const books: Book[] = [
  {
    title: "Build a Large Language Model (From Scratch)",
    link: "https://www.manning.com/books/build-a-large-language-model-from-scratch",
    autohor: "Sebastian Raschka",
    reading: false,
    readingList: true,
  },
  {
    title: "Adventures in Rocket Science",
    link: "https://www.nasa.gov/wp-content/uploads/2009/07/265386main_Adventures_In_Rocket_Science.pdf",
    autohor: "NASA",
    reading: false,
    readingList: true,
  },
  {
    title: "Zero To Production In Rust",
    link: "https://www.zero2prod.com/index.html",
    autohor: "Luca Palmieri",
    reading: false,
    readingList: false,
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
        <p className="font-bold uppercase text-gray-500 tracking-wider">
          Distributed Systems
        </p>
        <ol>
          {distributedSystems.map((item: Paper, index: number) => {
            return (
              <li className="my-2" key={index}>
                <div
                  className={`flex flex-col  p-2 ${item.reading && "border rounded bg-gray-100 dark:bg-gray-900"}`}
                >
                  <span
                    className={`text-xs uppercase text-green-500 ${!item.reading && "hidden"}`}
                  >
                    Reading
                  </span>
                  <span
                    className={`text-xs uppercase text-blue-500 ${!item.readingList && "hidden"}`}
                  >
                    Up Next on Reading List
                  </span>
                  <a
                    href={item.link}
                    target="_blank"
                    className="underline underline-offset-2 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    {item.title}
                  </a>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <div>
        <p className="font-bold uppercase text-gray-500 tracking-wider">
          Books
        </p>
        <ol>
          {books.map((book: Book, index: number) => {
            return (
              <li className="my-2" key={index}>
                <div
                  className={`flex flex-col  p-2 ${book.reading && "border rounded bg-gray-100 dark:bg-gray-900"}`}
                >
                  <span
                    className={`text-xs uppercase text-green-500 ${!book.reading && "hidden"}`}
                  >
                    Reading
                  </span>
                  <span
                    className={`text-xs uppercase text-blue-500 ${!book.readingList && "hidden"}`}
                  >
                    Up Next on Reading List
                  </span>
                  <a
                    href={book.link}
                    target="_blank"
                    className="underline underline-offset-2 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    {book.title}
                  </a>
                  <p className="text-xs text-gray-400">from {book.autohor}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
