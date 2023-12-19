import { ImageThatOpensInNewTab } from "@/components/MDX_CLIENT";
import PageMeta from "@/lib/pageMetadata";
import { Metadata } from "next";
import Image, { ImageProps } from "next/image";

export const metadata: Metadata = PageMeta({
  title: "Unsubscribe Email",
  description: "Instructions to unsubscribe from my email list",
  url: "https://kunalsin9h.com/unsubscribe/",
});

export default function Papers() {
  return (
    <>
      <p className="text-3xl font-bold">
        <span className="opacity-30">#</span> Unsubscribe Newsletter
      </p>
      <p className="text-xl">
        To unsubscribe from my newsletters, send me an email at{" "}
        <a
          href="mailto:kunal@kunalsin9h.com?subject=Unsubscribe from Newsletter"
          className="py-1 px-2 rounded bg-slate-200 dark:bg-slate-800 hover:bg-pink-200 dark:hover:bg-zinc-700"
        >
          kunal@kunalsin9h.com
        </a>{" "}
        with the subject line &quot;Unsubscribe&quot;.
      </p>
      <Image
        src="/images/cat.png"
        alt="Cat Image"
        width={702}
        height={356}
        className="dark:invert"
      />
    </>
  );
}
