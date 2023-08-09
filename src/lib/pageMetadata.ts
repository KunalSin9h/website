export default function PageMeta({
  title,
  description,
  publishedTime,
  url,
  image,
  type,
}: {
  title?: string;
  description?: string;
  publishedTime?: string;
  url?: string;
  image?: string;
  type?: string;
}) {
  title = !title ? "" : title;
  description = !description ? "" : description;
  publishedTime = !publishedTime ? "" : publishedTime;
  url = !url ? "" : url;
  image = !image ? "" : image;
  type = !type ? "website" : type;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type,
      publishedTime,
      url,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
