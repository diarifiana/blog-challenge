// import { BLog } from "@/types/blog";

// export const getBlogsWithoutSize = async () => {
//   const response = await fetch(
//     `https://helpfulpickle-us.backendless.app/api/data/blogs`,

//   );
//   const allBlogs: BLog[] = await response.json();
//   return allBlogs;
// };

import { BLog } from "@/types/blog";

export const getBlogsWithoutSize = async () => {
  const response = await fetch(
    `https://helpfulpickle-us.backendless.app/api/data/blogs`,
    {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    }
  );

  if (!response.ok) {
    // Handle errors appropriately
    console.error(`Failed to fetch blogs. Status: ${response.status}`);
    return []; // Or throw an error
  }

  const allBlogs: BLog[] = await response.json();
  return allBlogs;
};
