import Loading from "@/components/Loading";
import { Suspense } from "react";
import { getBlog } from "../../_api/getBlog";
import BlogBody from "./_components/BlogBody";
import BlogHeader from "./_components/BlogHeader";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const blogs = await getBlog(slug);

  return {
    title: blogs[0].title,
    description: blogs[0].description,
    openGraph: {
      images: blogs[0].thumbnail,
    },
  };
};

const BlogDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  return (
    <main className="teko-3000">
      <Suspense fallback={<Loading />}>
        <BlogHeader slug={slug} />
        <BlogBody slug={slug} />
      </Suspense>
    </main>
  );
};

export default BlogDetail;
