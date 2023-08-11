import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { Metadata } from "next";
import PageMeta from "@/lib/pageMetadata";

export const metadata: Metadata = PageMeta({
  title: "All Blogs",
  description: "All blogs posts from Kunal Singh on kunalsin9h.com",
  url: "https://kunalsin9h.com/blog/",
});

function Post(post: Post) {
  return (
    <div className="mb-4">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.slug}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time
        dateTime={post.published}
        className="mb-2 block text-xs text-gray-600"
      >
        {format(parseISO(post.published), "LLLL d, yyyy")}
      </time>
    </div>
  );
}

export default function blog() {
  const posts = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.published), new Date(b.published))
  );

  return (
    <div className="w-full py-4">
      <h1 className="mb-4 text-2xl font-black">All Blogs</h1>
      {posts.map((post: Post, idx: number) => (
        <Post key={idx} {...post} />
      ))}
    </div>
  );
}
