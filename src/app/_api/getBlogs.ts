import { BLog } from "@/types/blog";

export const getBlogs = async (size: number = 3) => {
  const response = await fetch(
    `https://helpfulpickle-us.backendless.app/api/data/blogs?pageSize=${size}`
  );
  const blogs: BLog[] = await response.json();
  return blogs;
};
