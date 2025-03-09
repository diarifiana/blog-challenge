import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { FC } from "react";

interface BlogListHeaderProps {
  category: string;
  setCategory: (value: string) => void;
  setSearch: (value: string) => void;
}
const BlogListHeader: FC<BlogListHeaderProps> = ({
  category,
  setCategory,
  setSearch,
}) => {
  return (
    <div>
      <h2 className="mt-8 text-center text-3xl font-bold">Featured Posts</h2>
      <section className="flex gap-4 max-w-[100%] md:max-w-[40%] mt-8">
        <Input
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="food">Automotive</SelectItem>
          <SelectItem value="school">Sports</SelectItem>
        </SelectContent>
      </Select> */}
      </section>
    </div>
  );
};

export default BlogListHeader;
