"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

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

  return (
    <Select
      defaultValue="about"
      onValueChange={(value: string) => {
        if (value === "about") value = "";
        router.replace(`/${value}`);
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
