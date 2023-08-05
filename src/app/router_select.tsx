"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectRoute() {
  const router = useRouter();

  const section = getCurrentSection(usePathname());

  return (
    <Select
      defaultValue={section}
      onValueChange={(value: string) => {
        if (value === "about") value = "";
        router.push(`/${value}`);
      }}
    >
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Select page" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem defaultChecked value="about">
            About
          </SelectItem>
          <SelectItem value="work">Work</SelectItem>
          <SelectItem value="stack">Stack</SelectItem>
          <SelectItem value="system">System</SelectItem>
          <SelectItem value="blog">Blog</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function getCurrentSection(pathname: string): string {
  let paths = pathname.split("/");
  paths = paths.filter((tok) => tok !== "/" && tok !== "");
  return paths[0] === undefined ? "about" : paths[0];
}
