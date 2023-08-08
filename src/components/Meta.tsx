export default function Meta(params: {
  title?: string;
  description?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
}) {
  const title = params.title || "Kunal Singh";
  const description =
    params.description || "Kunal Singh's Personal Website. Software Developer.";
  const url = params.url || "https://kunalsin9h.com";
  const type = params.type || "website";
  const publishedTime = params.publishedTime || "";

  return {
    metadataBase: new URL("https://kunalsin9h.com"),
    title,
    description,
    keywords: [
      "Kunal",
      "Singh",
      "Personal",
      "Portfolio",
      "Website",
      "Writings",
      "Articles",
      "Blogs",
    ],
    authors: [{ name: "Kunal Singh", url: "https://kunalsin9h.com" }],
    openGraph: {
      title,
      description,
      url,
      siteName: "kunalsin9h.com",
      locale: "en_US",
      type,
      publishedTime,
      images: [
        {
          url: "/images/og.jpg",
          width: 1200,
          height: 630,
        },
        {
          url: "/images/og.jpg",
        },
      ],
    },
    icons: {
      icon: "/images/favicon.ico",
      shortcut: "/images/favicon.ico",
    },
    themeColor: "#ffffff",
    twitter: {
      card: "summary",
      title,
      description,
      site: "kunalsin9h.com",
      creator: "@KunalSin9h",
      images: [
        {
          url: "/images/og.jpg",
          width: 1200,
          height: 630,
        },
        {
          url: "/images/og.jpg",
        },
      ],
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
    },
    category: "technology",
  };
}
