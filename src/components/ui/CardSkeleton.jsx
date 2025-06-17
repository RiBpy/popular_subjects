const CardSkeleton = () => {
  return (
    <div className="rounded-xl bg-white shadow-md border border-gray-200 animate-pulse overflow-hidden">
      {/* Top badge and image */}
      <div className="relative h-32 bg-gray-200 w-full">
        {/* "Coming Soon" badge placeholder */}
        <div className="absolute top-2 left-2 h-6 w-24 bg-gray-300 rounded-full"></div>
      </div>

      <div className="px-4 pt-2 flex justify-between">
        <div className="h-3 w-2/4 bg-gray-200 rounded"></div>
        <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
      </div>

      <div className="p-4 space-y-3">
        {/* Date */}
        <div className="h-3 w-1/3 bg-gray-200 rounded"></div>

        {/* Department ID */}
        <div className="h-3 w-2/5 bg-gray-200 rounded"></div>

        {/* Button */}
        <div className="mt-3 h-9 w-full bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
