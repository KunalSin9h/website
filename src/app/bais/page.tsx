import Image from "next/image";
import { Metadata } from "next";
import PageMeta from "@/lib/pageMetadata";

export const metadata: Metadata = PageMeta({
  title: "Bais Flag and Details",
  description: "",
  url: "https://kunalsin9h.com/bais/",
});

export default function Bais() {
  return (
    <div>
      <p className="text-3xl font-bold">
        <span className="opacity-30">#</span> Bais
      </p>

      <div className="mt-4">
        <KeyVal name="Vansh" val="Suryavanshi Rajput" />
        <KeyVal name="Gotra" val="Bharadwaja" />
        <KeyVal name="Veda" val="Yajurveda" />
        <KeyVal name="Kull Devi" val="Kalika Mata" />
        <KeyVal name="Isht Dev" val="Shiva" />
        <KeyVal name="Pravaras" val="Bharadwaja, Bharhaspatya, Angirasa" />
        <div className="p-4 border rounded">
          <KeyVal name="Dwaj (Flag)" val="Skyblue color with Snake Emblem" />
          <Image
            className="mt-2"
            src="/bais/flag.webp"
            alt="Bais Rajput Dwaj"
            width={1200}
            height={756}
          />
          <p className="text-xs font-semibold text-gray-600 mt-2">
            This Dwaj (flag) is created by{" "}
            <a
              href="https://kunalsin9h.com"
              className="underline hover:text-blue-500"
            >
              Kunal Singh
            </a>
            . Download{" "}
            <a className="underline hover:text-blue-500" href="/bais/flag.png">
              PNG
            </a>
            {"/"}
            <a className="underline hover:text-blue-500" href="/bais/flag.svg">
              SVG
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function KeyVal({ name, val }: { name: string; val: string }) {
  return (
    <div className="flex items-center gap-2">
      <p className="text-purple-600">{name}</p>
      <p className="italic">{val}</p>
    </div>
  );
}
