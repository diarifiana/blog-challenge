import { Badge } from "@/components/ui/badge";
import { BLog } from "@/types/blog";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface BlogCardProps {
  blog: BLog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm ">
        <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
          <Image
            src={blog.thumbnail}
            alt="thumbnail"
            fill
            className="object-cover"
          />
          <Badge className="capitalize">{blog.category}</Badge>
        </div>

        <a href="#">
          <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-blue-800 line-clamp-2">
            {blog.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 line-clamp-3">
          {blog.description}
        </p>
        <p className="font-light text-sm">
          {format(new Date(blog.created), "dd MMM yyyy")}
        </p>

        <a
          href="#"
          className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </Link>
  );
};

export default BlogCard;
