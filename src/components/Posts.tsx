"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { GetViews } from "@/components/Views";
import { Input } from "./ui/input";
import { PostMeta } from "@/types/PostMeta";

function PostCard(post: PostMeta) {
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

export default function Posts({ posts }: { posts: PostMeta[] }) {
  const original = posts;
  const [blogPosts, setBlogPosts] = useState(posts);
  const [textSearch, setTextSearch] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `https://api.kunalsin9h.com/v1/search/blog?text=${textSearch}`
      );
      const data: PostMeta[] = await response.json();
      setBlogPosts(data);
    };
    if (textSearch !== "") {
      fetchPosts();
    }
  }, [textSearch]);

  return (
    <div className="w-full py-4 transition">
      <h1 className="mb-4 text-2xl font-black">All Blogs</h1>
      <div>
        <span className={`text-sm ${subscribed ? "text-green-500" : "text-purple-500"} font-bold`}>{subscribed ? "Subscribed!" :  "Subscribe the newsletter"}</span>
        <form target="_blank" action="https://newsletter.kunalsin9h.com/subscription" method="POST"  className="flex items-center justify-between flex-wrap">
            <input type="text" placeholder="your name" name="name" className="border px-2 rounded bg-inherit my-2" required/>
            <input type="email" placeholder="email" name="email" className="border px-2 rounded bg-inherit my-2" required/>
            <button type="submit" className="rounded px-8 bg-gray-800 hover:bg-gray-700 text-white my-2" onClick={() => {
                setSubscribed(true);
            }}>Subscribe</button>
        </form>
      </div>
      <div className="mx-full my-4">
        <Input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            if (e.target.value === "") {
              setBlogPosts(original);
            } else {
              setTextSearch(e.target.value);
            }
          }}
        />
      </div>
      <div>
        {blogPosts.length === 0 ? (
          <div className="font-bold mx-full text-center my-16">
            No Post Matches
          </div>
        ) : (
          blogPosts.map((post: PostMeta, idx: number) => (
            <PostCard key={idx} {...post} />
          ))
        )}
      </div>
    </div>
  );
}
