import { allPosts } from "contentlayer/generated";

const Sitemap = () => {
  const posts = allPosts.map((post) => ({
    // post.slub is like "/blog/xyz"
    url: `https://kunalsin9h.com${post.slug}`,
    lastModified: post.published,
  }));

  const routes = ["", "/", "/blog", "/system", "/work"].map(
    (route) => ({
      url: `https://kunalsin9h.com${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return [...routes, ...posts];
};

export default Sitemap;
