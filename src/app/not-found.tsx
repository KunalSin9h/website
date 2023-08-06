import Image from "next/image";

export default function Loading() {
  return (
    <>
      <h1 className="text-3xl font-bold">
        <span className="opacity-60">#</span> 404
      </h1>
      <p className="text-xl">Page Not Found</p>
      <Image
        className="rounded w-full h-full"
        src="/gifs/404.webp"
        alt="Where am i, meme image"
        fill={false}
      />
    </>
  );
}
