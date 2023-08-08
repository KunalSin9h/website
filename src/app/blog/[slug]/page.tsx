import "@/styles/mdx.css";

import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import MDX from "@/components/MDX";
import Meta from "@/components/Meta";

allPosts.sort((a, b) => (a.published < b.published ? 1 : -1));

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) return Meta({ title: "Blog by Kunal Singh" });

  const { title, published: publishedTime, description, slug } = post;

  return Meta({
    title,
    description,
    url: `https://kunalsin9h.com/blog/${slug}`,
    publishedTime,
    type: "article",
  });
};

const BlogPage = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  return (
    <article className="max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.published} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.published), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <MDX code={post.body.code} />
    </article>
  );
};

export default BlogPage;
