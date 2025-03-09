import Link from "next/link";
import { getCategories } from "../_api/getCategories";

const CategoryPage = async () => {
  const data = await getCategories();

  return (
    <main className="teko-300 min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">
          Browse Categories
        </h1>
        <div className="space-y-6">
          {data.map((categories) => (
            <Link
              key={categories.category}
              href={`/categories/${categories.category}`}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                  {categories.category}
                </h2>
                <p className="text-gray-600 text-2xl">
                  Get expert analysis on {categories.category}. We deliver
                  detailed car reviews and insights into the latest
                  technologies.
                </p>
              </div>
              <div className="flex justify-end">
                <span className="text-blue-600 hover:underline">View More</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;
