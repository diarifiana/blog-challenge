import { Skeleton } from "@/components/ui/skeleton";

const BlogListSkeleton = () => {
  return (
    <section className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>

      {/* Skeleton 2 */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>

      {/* Skeleton 3 */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogListSkeleton;
