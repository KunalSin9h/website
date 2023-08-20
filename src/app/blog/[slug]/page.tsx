import "@/styles/mdx.css";

import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import MDX from "@/components/MDX";
import PageMeta from "@/lib/pageMetadata";
import Link from "next/link";
import { GetViewsAndUpdate } from "@/components/Views";

allPosts.sort((a, b) => (a.published < b.published ? 1 : -1));

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post)
    return PageMeta({
      title: "404, Blog post not found",
      description: "This blog post does not exit, check the URL and try again.",
    });

  const { title, published: publishedTime, description, slug } = post;

  return PageMeta({
    title,
    description,
    image: `https://api.kunalsin9h.com/v1/image/${title}`,
    type: "article",
    publishedTime,
    url: `https://kunalsin9h.com/blog/${slug}`,
  });
};

const BlogPage = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  return (
    <article className="w-full py-2">
      <Link
        href={"/blog"}
        className="underline underline-offset-4 hover:decoration-pink-400"
      >
        &larr; back
      </Link>
      <div className="mb-8 text-left">
        <div className="mb-1 text-xs text-gray-600 flex items-center space-x-2">
          <time dateTime={post.published}>
            {format(parseISO(post.published), "LLLL d, yyyy")}
          </time>
          {/* Only update views when env is production not on local dev*/}
          {process.env.NODE_ENV === "production" ? (
            <GetViewsAndUpdate slug={params.slug} />
          ) : null}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
      </div>
      <MDX code={post.body.code} />
    </article>
  );
};

export default BlogPage;
