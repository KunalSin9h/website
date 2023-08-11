import * as React from "react";
import Image, { ImageProps } from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { cn } from "@/lib/utils";

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

const components = {
  // @ts-ignore
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-2xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  // @ts-ignore
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-4 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),

  // @ts-ignore
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mt-4 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),

  // @ts-ignore
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "mt-4 scroll-m-20 text-md font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),

  // @ts-ignore
  h5: ({ className, ...props }) => (
    <h5
      className={cn(
        "mt-4 scroll-m-20 text-sm font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),

  // @ts-ignore
  a: ({ className, ...props }) => (
    <a
      className={cn(
        "font-medium underline underline-offset-4 decoration-[#52525b80] dark:decoration-slate-500 hover:decoration-pink-400 dark:hover:decoration-pink-400",
        className
      )}
      {...props}
    />
  ),

  // @ts-ignore
  p: ({ className, ...props }) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-4", className)}
      {...props}
    />
  ),

  // @ts-ignore
  ul: ({ className, ...props }) => (
    <ul className={cn("my-4 ml-4 list-disc", className)} {...props} />
  ),

  // @ts-ignore
  ol: ({ className, ...props }) => (
    <ol className={cn("my-4 ml-4 list-decimal", className)} {...props} />
  ),

  // @ts-ignore
  li: ({ className, ...props }) => (
    <li className={cn("mt-2 ml-4", className)} {...props} />
  ),

  // @ts-ignore
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-4 border-l-4 pl-4 rounded pt-1 bg-slate-200 border-slate-400 text-slate-700 dark:bg-slate-900 dark:border-l-slate-700 dark:text-slate-200",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-2 md:my-4" {...props} />,

  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-4 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),

  // @ts-ignore
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  // @ts-ignore
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  // @ts-ignore
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "mb-4 mt-4 overflow-x-auto rounded-lg border bg-black py-4",
        className
      )}
      {...props}
    />
  ),
  // @ts-ignore
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  // @ts-ignore
  BlogImage: (props) => (
    <Image
      {...(props as ImageProps)}
      placeholder="blur"
      blurDataURL={rgbDataURL(255, 255, 255)}
      draggable={false}
      alt=""
    />
  ),
};

interface MdxProps {
  code: string;
}

export default function MDX({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <div className="mdx">
      {/*@ts-ignore*/}
      <Component components={{ ...components }} />
    </div>
  );
}
