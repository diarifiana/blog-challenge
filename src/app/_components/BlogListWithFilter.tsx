import { BLog } from "@/types/blog";
import BlogCard from "./BlogCard";

interface BlogListWithFilterProps {
  blogs: BLog[];
}

const BlogListWithFilter = ({ blogs }: BlogListWithFilterProps) => {
  if (!blogs || blogs.length === 0) {
    return (
      <section className="container mx-auto p-4">
        <p>No blogs found.</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog) => {
          return <BlogCard key={blog.objectId} blog={blog} />;
        })}
      </div>
    </section>
  );
};

export default BlogListWithFilter;
