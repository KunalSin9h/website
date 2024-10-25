import { Metadata } from "next";

import PageMeta from "@/lib/pageMetadata";
import Image from "next/image";
export const metadata: Metadata = PageMeta({
  title: "My Country Bharat",
  description: "This is where i live, the land, culture and life",
  url: "https://kunalsin9h.com/bharat/",
});

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

export default function Bharat() {
  return (
    <div className="">
      <p className="flex space-x-2">
        <span className="">
          <Image
            className="shadow-lg hover:scale-125 transition rounded"
            placeholder="blur"
            blurDataURL={rgbDataURL(255, 255, 255)}
            draggable={false}
            alt="Bharat Flag Picture"
            src="/images/bharat-flag.webp"
            width={50}
            height={40}
          />
        </span>{" "}
        <span className="text-4xl font-bold ">Bharat भारत</span>
      </p>
      <p className="italic pt-4 md:pt-8 text-xl">
        The country that lies north of the oceans and south of the snowy
        mountains is called Bhárata, for there dwell the descendants of Bharata.
        Bhárata is the land of works, in consequence of which men go to heaven,
        or obtain emancipation.
      </p>
      <div className="text-xs opacity-80 pt-2">
        The Vishnu Purana, Chapter III 400 BCE
      </div>
      <Image
        className="my-4 mx-auto rounded-xl shadow-xl"
        placeholder="blur"
        blurDataURL={rgbDataURL(255, 255, 255)}
        draggable={false}
        src="/images/bharat.webp"
        alt="Ancient Bharat Map"
        width={596}
        height={713}
      />
      <Image
        className="my-4 mx-auto rounded-xl shadow-xl"
        placeholder="blur"
        blurDataURL={rgbDataURL(255, 255, 255)}
        draggable={false}
        src="/images/bharat_geo.jpeg"
        alt="Bharat Geographic Map"
        width={596}
        height={713}
      />
      <div className="my-8">
        <div className="font-bold text-xl">On the map</div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117350.3935062054!2d77.32349071838195!3d23.199388245784927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1693933361952!5m2!1sen!2sin"
          className="w-full h-96 rounded-xl shadow-lg mx-auto my-2"
        ></iframe>
      </div>
    </div>
  );
}
