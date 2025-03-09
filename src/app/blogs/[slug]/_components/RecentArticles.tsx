import { BLog } from "@/types/blog";
import { getBlogsWithoutSize } from "../../../_api/getBlogsWithoutSize";
import BlogCard from "../../../_components/BlogCard";

interface RecentArticlesProps {
  category: string;
}
const RecentArticles = async () => {
  const blogs: BLog[] = await getBlogsWithoutSize();

  const sortedBlogs = blogs.sort(
    (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
  );

  const recentArticles = sortedBlogs.slice(0, 3);

  if (recentArticles.length === 0) {
    return <p>No recent articles in this category</p>;
  }

  return (
    <div className="p-12">
      <h2 className="text-center text-3xl font-bold pb-8">Recent Articles</h2>

      <div className="grid grid-cols-3 gap-4">
        {recentArticles.map((article) => (
          <BlogCard key={article.objectId} blog={article} />
        ))}
      </div>
    </div>
  );
};

export default RecentArticles;
