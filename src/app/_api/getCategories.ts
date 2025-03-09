import { Categories } from "@/types/category";
import { cache } from "react";

export const getCategories = cache(async () => {
  const response = await fetch(
    `https://helpfulpickle-us.backendless.app/api/data/blogs?property=%60category%60&groupBy=%60category%60`
  );
  const categories: Categories[] = await response.json();

  return categories;
});
