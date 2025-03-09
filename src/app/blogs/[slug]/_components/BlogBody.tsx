import { FC } from "react";
import { getBlog } from "../../../_api/getBlog";
import Markdown from "@/components/Markdown";
import IncrementView from "./IncrementView";

interface BlogBodyProps {
  slug: string;
}
const BlogBody: FC<BlogBodyProps> = async ({ slug }) => {
  const blogs = await getBlog(slug);
  return (
    <section className="container mx-auto p-4 text-lg">
      {/* <h1>{blogs[0].description}</h1> */}
      <Markdown content={blogs[0].content} />
      <IncrementView
        objectId={blogs[0].objectId}
        totalView={blogs[0].totalView}
      />
    </section>
  );
};

export default BlogBody;
