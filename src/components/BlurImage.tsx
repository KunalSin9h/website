"use client";

import Image from "next/image";
import { rgbDataURL } from "./MDX_CLIENT";

export default function BlurImage({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      blurDataURL={rgbDataURL(230, 230, 230)}
    />
  );
}
