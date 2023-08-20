import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { Metadata } from "next";
import PageMeta from "@/lib/pageMetadata";
import { GetViews } from "@/components/Views";

export const metadata: Metadata = PageMeta({
  title: "All Blogs",
  description: "All blogs posts from Kunal Singh on kunalsin9h.com",
  url: "https://kunalsin9h.com/blog/",
});

function Post(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-lg md:text-xl">
        <Link
          href={post.slug}
          className="text-slate-700 hover:text-slate-900 dark:text-slate-400"
        >
          {post.title}
        </Link>
      </h2>
      <div className="flex space-x-2 items-center block text-xs text-gray-600">
        <time dateTime={post.published}>
          {format(parseISO(post.published), "LLLL d, yyyy")}
        </time>
        <GetViews slug={post.slug} />
      </div>
    </div>
  );
}

export default async function blog() {
  const posts = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.published), new Date(b.published))
  );

  const search = posts.map((p: Post) => {
    return {
      id: p.slug.split("/").at(-1),
      title: p.title,
      description: p.description,
      published: p.published,
      content: p.body.raw,
    };
  });

  if (process.env.NODE_ENV === "production") {
    const index = "blog";
    const response = await fetch(
      `https://api.kunalsin9h.com/v1/search/${index}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: search,
        }),
      }
    );

    if (response.status !== 200) {
      console.log("Failed to create / update document in the search server");
      process.exit(1);
    } else {
      console.log("Updated search server");
    }
  }

  return (
    <div className="w-full py-4">
      <h1 className="mb-4 text-2xl font-black">All Blogs</h1>
      {posts.map((post: Post, idx: number) => (
        <Post key={idx} {...post} />
      ))}
    </div>
  );
}
