import { BLog } from "@/types/blog";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getBlogByCategory = cache(async (category: string) => {
  const response = await fetch(
    `https://helpfulpickle-us.backendless.app/api/data/blogs?where=%60category%60%20%3D%20'${category}'`
  );
  const blogs: BLog[] = await response.json();


  if (!blogs.length) {
    return notFound();
  }

  return blogs;
});
