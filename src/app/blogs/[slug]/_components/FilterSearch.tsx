// "use client";

// import { ChangeEvent, useEffect, useState } from "react";
// import { BLog } from "@/types/blog";
// import { getBlogsWithoutSize } from "@/app/_api/getBlogsWithoutSize";
// import BlogListWithFilter from "@/app/_components/BlogListWithFilter";

// const FilterSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [blogs, setBlogs] = useState<BLog[]>([]);
//   const [filteredBlogs, setFilteredBlogs] = useState<BLog[]>([]);

//   useEffect(() => {
//     const fetchAllBlogs = async () => {
//       const allBlogs = await getBlogsWithoutSize();
//       setBlogs(allBlogs);
//       setFilteredBlogs(allBlogs);
//     };

//     fetchAllBlogs();
//   }, []);

//   useEffect(() => {
//     let results = blogs;

//     if (searchTerm) {
//       results = results.filter((blog) =>
//         blog.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (selectedCategory) {
//       results = results.filter((blog) => blog.category === selectedCategory);
//     }

//     setFilteredBlogs(results);
//   }, [searchTerm, selectedCategory, blogs]);

//   const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCategory(event.target.value);
//   };

//   const categories = [...new Set(blogs.map((blog) => blog.category))];

//   return (
//     <div className="mb-4">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//         className="border p-2 mr-2"
//       />

//       <select
//         value={selectedCategory}
//         onChange={handleCategoryChange}
//         className="border p-2"
//       >
//         <option value="">All Categories</option>
//         {categories.map((category) => (
//           <option key={category} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>

//       <BlogListWithFilter blogs={filteredBlogs} />
//     </div>
//   );
// };

// export default FilterSearch;

"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { BLog } from "@/types/blog";
import { getBlogsWithoutSize } from "@/app/_api/getBlogsWithoutSize";
import BlogListWithFilter from "@/app/_components/BlogListWithFilter";

const FilterSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [blogs, setBlogs] = useState<BLog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BLog[]>([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      const allBlogs = await getBlogsWithoutSize();
      setBlogs(allBlogs);
      setFilteredBlogs(allBlogs);
    };

    fetchAllBlogs();
  }, []);

  useEffect(() => {
    let results = blogs;

    if (searchTerm) {
      results = results.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      results = results.filter((blog) => blog.category === selectedCategory);
    }

    setFilteredBlogs(results);
  }, [searchTerm, selectedCategory, blogs]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const categories = [...new Set(blogs.map((blog) => blog.category))];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Search and Filter Blogs
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border rounded-md p-3 w-full sm:w-1/2 focus:outline-none focus:ring focus:border-blue-300"
          />

          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border rounded-md p-3 w-full sm:w-1/2 focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <BlogListWithFilter blogs={filteredBlogs} />
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
