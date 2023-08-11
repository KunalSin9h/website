import "@/styles/mdx.css";

import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import MDX from "@/components/MDX";
import PageMeta from "@/lib/pageMetadata";

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
    <article className="w-full py-4">
      <div className="mb-8 text-left">
        <time dateTime={post.published} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.published), "LLLL d, yyyy")}
        </time>
        <h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
      </div>
      <MDX code={post.body.code} />
    </article>
  );
};

export default BlogPage;
