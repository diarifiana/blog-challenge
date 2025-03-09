import { BLog } from "@/types/blog";
import { getBlogsWithoutSize } from "../_api/getBlogsWithoutSize";
import BlogCard from "./BlogCard";

interface FeaturedPosts {
  category: string;
}
const FeaturedPosts = async () => {
  const blogs: BLog[] = await getBlogsWithoutSize();

  const sortedBlogs = blogs.sort(
    (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
  );

  const FeaturedPosts = sortedBlogs.slice(0, 3);

  if (FeaturedPosts.length === 0) {
    return <p>No recent articles in this category</p>;
  }

  return (
    <div className="p-12">
      <h2 className="text-center text-3xl font-bold pb-8">Featured Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {FeaturedPosts.map((post) => (
          <BlogCard key={post.objectId} blog={post} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
