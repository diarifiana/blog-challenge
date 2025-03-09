import { getBlogsWithoutSize } from "../_api/getBlogsWithoutSize";

const PopularCategories = async () => {
  const blogs = await getBlogsWithoutSize();

  const categories = [...new Set(blogs.map((blog) => blog.category))];

  return (
    <div>
      <h2 className="py-4 text-center text-3xl font-bold">Categories</h2>
      <div>
        <ul className="flex">
          {categories.map((category) => (
            <li className="m-auto" key={category}>
              <a href={`/categories/${category}`}>
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[150px]" // Added w-[150px]
                >
                  {category}
                </button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularCategories;
