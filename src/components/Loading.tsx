import { LoaderPinwheel } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoaderPinwheel className="animate-spin size-12" />
    </div>
  );
};

export default Loading;
