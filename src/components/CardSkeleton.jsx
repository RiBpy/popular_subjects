const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-pulse">
      <div className="p-6">
        {/* Icon Skeleton */}
        <div className="w-16 h-16 bg-gray-200 rounded-2xl mb-4" />

        {/* Title Skeleton */}
        <div className="space-y-2 mb-3">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-6 bg-gray-200 rounded w-1/2" />
        </div>

        {/* Badge Skeleton */}
        <div className="w-20 h-6 bg-gray-200 rounded-full mb-4" />

        {/* Status Skeleton */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gray-200 rounded-full" />
            <div className="w-16 h-4 bg-gray-200 rounded" />
          </div>
          <div className="w-12 h-5 bg-gray-200 rounded-full" />
        </div>

        {/* Button Skeleton */}
        <div className="w-full h-12 bg-gray-200 rounded-xl" />
      </div>
    </div>
  );
};
export default CardSkeleton;
