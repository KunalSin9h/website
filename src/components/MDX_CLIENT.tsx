"use client";

/**
 * SOME CLIENT COMPONENT USED IN MDX.tsx
 */

import Image, { ImageProps } from "next/image";

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

export const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

export function ImageThatOpensInNewTab({ props }: { props: ImageProps }) {
  let imageURL = props.src as string;

  return (
    <div className="py-2 xl:py-4">
      <Image
        {...props}
        placeholder="blur"
        blurDataURL={rgbDataURL(230, 230, 230)}
        onClick={() => window.open(imageURL, "_blank")}
        draggable={true}
        className="hover:cursor-zoom-in rounded"
        alt={props.alt}
      />
    </div>
  );
}
