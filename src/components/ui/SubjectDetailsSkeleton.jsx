const SubjectDetailsSkeleton = () => (
  <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md animate-pulse">
    {/* Title Skeleton */}
    <div className="h-60 bg-gray-200 rounded w-full mb-4"></div>

    {/* Date Skeleton */}
    <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>

    {/* Description Skeleton */}
    <div className="space-y-2 mb-6">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
    </div>

    {/* Details Skeleton */}
    <div className="space-y-3 mb-8">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex">
          <div className="h-4 bg-gray-200 rounded w-32 mr-2"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </div>
      ))}
    </div>

    {/* Back Link Skeleton */}
    <div className="border-t pt-4">
      <div className="h-5 bg-gray-200 rounded w-24"></div>
    </div>
  </div>
);

export default SubjectDetailsSkeleton;
