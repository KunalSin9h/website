"use client";

import useSWR, { Fetcher } from "swr";
import { Skeleton } from "@/components/ui/skeleton";
import millify from "millify";

type Response = {
  success: boolean;
  data: Data;
};

type Data = {
  views: number;
};

export function GetViews({ slug }: { slug: string }) {
  // this slug is different
  // here the slug is /blog/abcd
  // so we need only last part here like "abcd"
  let s = slug.split("/").at(-1);

  const fetcher: Fetcher<Response> = (input: RequestInfo | URL) =>
    fetch(input).then((res) => res.json());

  const { data, error, isLoading } = useSWR<Response>(
    `https://api.kunalsin9h.com/v1/views/${s}`,
    fetcher
  );

  if (error) return null;
  if (isLoading) return <Skeleton className="w-[30px] h-[15px] rounded" />;

  const views = data?.data.views;

  return (
    <span className="inline flex space-x-2">
      {views ? `${millify(views)} views` : null}
    </span>
  );
}

export function GetViewsAndUpdate({ slug }: { slug: string }) {
  const fetcher: Fetcher<Response> = (input: RequestInfo | URL) =>
    fetch(input, {
      method: "POST",
    }).then((res) => res.json());

  // This query q=update does not do anything in backend
  // this is just to differentitate the two urls
  const { data, error, isLoading } = useSWR<Response>(
    `https://api.kunalsin9h.com/v1/views/${slug}?q=update`,
    fetcher
  );

  if (error) return null;
  if (isLoading) return <Skeleton className="w-[30px] h-[15px] rounded" />;

  const views = data?.data.views;

  return (
    <span className="inline flex space-x-2">
      {views ? `${millify(views)} views` : null}
    </span>
  );
}
