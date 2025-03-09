// import { FC } from "react";
// import { getBlog } from "../../../_api/getBlog";
// import { format } from "date-fns";
// import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
// import Link from "next/link";

// interface BlogHeaderProps {
//   slug: string;
// }
// const BlogHeader: FC<BlogHeaderProps> = async ({ slug }) => {
//   const blogs = await getBlog(slug);
//   return (
//     <section className="container mx-auto p-4">
//       <Badge className="capitalize">{blogs[0].category}</Badge>
//       <h1 className="text-xl font-bold">{blogs[0].title}</h1>
//       <p className="font-light text-sm">
//         {format(new Date(blogs[0].created), "dd MMM yyyy")}
//       </p>
//       <Link href={`/about/${blogs[0].user.firstName}`}>
//         {blogs[0].user.firstName} {blogs[0].user.lastName}
//       </Link>
//       <div className="relative w-full h-[300px]">
//         <Image
//           src={blogs[0].thumbnail}
//           alt="thumbnail"
//           fill
//           className="object-cover"
//         />
//       </div>
//     </section>
//   );
// };

// export default BlogHeader;

import { FC } from "react";
import { getBlog } from "../../../_api/getBlog";
import { format } from "date-fns";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface BlogHeaderProps {
  slug: string;
}

const BlogHeader: FC<BlogHeaderProps> = async ({ slug }) => {
  const blogs = await getBlog(slug);

  return (
    <section className="container mx-auto p-8">
      {" "}
      {/* Removed background and shadow */}
      <div className="mb-4">
        <Badge className="capitalize text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
          {blogs[0].category}
        </Badge>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        {blogs[0].title}
      </h1>
      <p className="font-light text-gray-600 mb-4">
        {format(new Date(blogs[0].created), "dd MMM yyyy")}
      </p>
      <Link
        href={`/about/${blogs[0].user.firstName}`}
        className="text-blue-600 hover:underline mb-4 block"
      >
        {blogs[0].user.firstName} {blogs[0].user.lastName}
      </Link>
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src={blogs[0].thumbnail}
          alt="thumbnail"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default BlogHeader;
