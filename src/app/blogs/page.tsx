"use client";

import useGetBlogs from "@/hooks/api/blog/useGetBlogs";
import { useState } from "react";
import { useDebounceValue } from "usehooks-ts";

import PaginationSection from "@/components/PaginationSection";
import BlogListHeader from "@/app/_components/BlogListHeader";
import BlogListBody from "@/app/_components/BlogListBody";

const limit = 5;

const BlogsPage = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");

  const [debounceValue] = useDebounceValue(search, 700);

  const { data: blogs, isPending } = useGetBlogs({
    title: debounceValue,
    category,
    limit,
    offset: (page - 1) * limit,
  });

  return (
    <main className="teko-300 container mx-auto p-4">
      {/* Blog list header */}
      <BlogListHeader
        category={category}
        setCategory={setCategory}
        setSearch={setSearch}
      />

      {/* Blog list body */}
      <BlogListBody isPending={isPending} blogs={blogs?.data} />

      <PaginationSection
        page={page}
        count={blogs?.count || 0}
        limit={limit}
        setPage={setPage}
      />
    </main>
  );
};

export default BlogsPage;
