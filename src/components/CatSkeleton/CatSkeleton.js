import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const CatSkeleton = () => {
    return (
        <div>
            {/* Skeleton  */}
      <div>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
          <div className="h-52 w-80 mx-auto">
          <SkeletonTheme baseColor="#878787" highlightColor="#444">
                <Skeleton height={200}></Skeleton>
              </SkeletonTheme>
          </div>
          <div className="p-5 relative h-64">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              <SkeletonTheme baseColor="#878787" highlightColor="#444">
                <Skeleton></Skeleton>
              </SkeletonTheme>
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              <SkeletonTheme baseColor="#878787" highlightColor="#444">
                <Skeleton count={5}></Skeleton>
              </SkeletonTheme>
            </p>
            <p
              className="w-3/4 absolute bottom-2 rounded-lg"
            >
              <SkeletonTheme baseColor="#003557" highlightColor="#444">
                <Skeleton height={40}></Skeleton>
              </SkeletonTheme>
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default CatSkeleton;