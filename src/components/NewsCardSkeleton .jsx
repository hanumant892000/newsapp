const NewsCardSkeleton = () => {
    return (
        <article className="flex flex-col animate-pulse bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">

            {/* Image Skeleton */}
            <div className="w-full h-52 bg-gray-300 dark:bg-gray-700"></div>

            <div className="flex flex-col flex-1 p-6 space-y-3">

                {/* Category */}
                <div className="w-20 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>

                {/* Title */}
                <div className="space-y-2">
                    <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    <div className="w-5/6 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    <div className="w-4/6 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>

                {/* Footer */}
                <div className="flex justify-between pt-3">
                    <div className="w-16 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    <div className="w-20 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>

            </div>
        </article>
    );
};

export default NewsCardSkeleton;