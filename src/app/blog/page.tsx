import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { Metadata } from "next";
import PageMeta from "@/lib/pageMetadata";
import Posts from "@/components/Posts";
import { PostMeta } from "@/types/PostMeta";

export const metadata: Metadata = PageMeta({
  title: "All Blogs",
  description: "All blogs posts from Kunal Singh on kunalsin9h.com",
  url: "https://kunalsin9h.com/blog/",
});

export default async function blog() {
  const posts = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.published), new Date(b.published))
  );

  const postsMeta: PostMeta[] = posts.map((post: Post) => {
    return {
      id: post.slug.split("/").at(-1) || "-NON-ID-",
      slug: post.slug,
      title: post.title,
      description: post.description,
      published: post.published,
      content: post.body.raw,
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
          data: postsMeta,
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

  return <Posts posts={postsMeta} />;
}
