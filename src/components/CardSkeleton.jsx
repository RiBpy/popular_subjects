import React from 'react';

const CardSkeleton = () => {
  return (
    <div className=" rounded-lg bg-white shadow-sm overflow-hidden border border-gray-100 animate-pulse">
      {/* Image placeholder */}
      <div className="h-40 bg-gray-200 w-full"></div>
      
      {/* Content placeholder */}
      <div className="p-4 space-y-4">
        {/* Subject name placeholder */}
        <div className="h-4 rounded-md w-full flex justify-center">
          <div className=" bg-gray-200 w-2/3 rounded"></div>
        </div>
        
        {/* Button placeholder */}
        <div className="h-8 bg-gray-200 rounded-md w-full"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;