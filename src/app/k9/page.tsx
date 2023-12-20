import BlurImage from "@/components/BlurImage";
import PageMeta from "@/lib/pageMetadata";
import { Metadata } from "next";

export const metadata: Metadata = PageMeta({
  title: "So why 9?",
  description: "Reasons what 9 has to do with me.",
  url: "https://kunalsin9h.com/k9/",
  image: "https://i.imgur.com/eBbZLkq.png",
});

export default function K9() {
  return (
    <>
      <p className="text-3xl font-bold">
        <span className="opacity-30">#</span> So why 9?
      </p>
      <p className="">
        9 (nine) is the natural number following 8 and preceding 10. Nine is a
        number which i used often. I have a lot of reasons to use 9.
      </p>
      <p className="text-xl font-semibold ">
        Here are some of the reasons why i use 9:
      </p>
      <div className="pl-4">
        <p className="text-xl my-4">My Name with 9</p>
        <BlurImage
          src="/images/k9/name.png"
          className="rounded"
          alt="Name with 9"
          width={304}
          height={233}
        />
        <p className="text-xl my-4">My Username with 9</p>
        <BlurImage
          src="/images/k9/username.png"
          className="rounded"
          alt="Username with 9"
          width={552}
          height={166}
        />
        <p className="text-xl my-4">My Date of birth with 9</p>
        <BlurImage
          src="/images/k9/dob.png"
          className="rounded"
          alt="Dob with 9"
          width={1050}
          height={550}
        />

        <div className="text-xl my-8">
          <p>
            I was born at <strong>9:55</strong> PM on{" "}
            <span className="font-semibold">Wednesday</span>. So assuming it
            took <strong>1</strong> minute to grab my birth record entry, I
            would have been born at <strong>9:45</strong>, which means...
          </p>
          <BlurImage
            src="/images/k9/birth.png"
            className="rounded my-1"
            alt="Time of birth with 9"
            width={317}
            height={308}
          />
          <p>
            Now coming to <strong>Wednesday</strong>, how many characters are in
            word Wednesday?
          </p>
          <BlurImage
            src="/images/k9/wed.png"
            className="rounded my-1"
            alt="Day of birth with 9"
            width={423}
            height={197}
          />
          <p>Some more.</p>
          <p className="mt-2">
            I use <strong>Arch Linux</strong> as my Operating System, and length
            of word Arch is <strong>4</strong>, Linux is <strong>5</strong>,
            Hence 4+5=
            <strong>9</strong>.
          </p>
          <p className="mt-4">
            I use <strong>Vim Editor</strong> for writing code, and length of
            word Vim is <strong>3</strong> and Editor is <strong>6</strong>,
            Hence 3+6=
            <strong>9</strong>.
          </p>
        </div>
      </div>
      <p className="text-xl">
        There might be more facts about 9 and me awaiting to be discovered.
      </p>
      <p>
        😀 Join <strong>K9</strong>{" "}
        <a
          href="https://discord.gg/CvX3UKjwEc"
          className="underline underline-offset-2 text-blue-700"
        >
          Discord Server
        </a>
        , Bye for now.
      </p>
    </>
  );
}
