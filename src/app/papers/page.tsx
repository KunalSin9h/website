import PaperBox from "@/components/PaperBox";
import PageMeta from "@/lib/pageMetadata";
import { Metadata } from "next";

export const metadata: Metadata = PageMeta({
    title: "Papers",
    description: "My Independent Research Papers",
    url: "https://kunalsin9h.com/papers/",
});


export default function Papers() {
    return  (
        <>
        <p className="text-3xl font-bold">
            <span className="opacity-30">#</span> Papers
        </p>
        <PaperBox url="/papers/set_notations.pdf" title="Set Theory Notations" authors={["Kunal Singh"]} date="May 23, 2022" image="/images/papers/set_notations.webp" width={618} height={126} />
        </>
    );
}
