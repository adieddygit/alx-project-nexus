"use client";

const SkeletonCard = () => {
    return (
        <div className="animate-pulse bg-gray-100 rounded-lg p-4">
            <div className= "h-32 bg-gray-300 rounded mb-3" />
            <div className="h-4 bg-gray-300 rounded mb-2" />
            <div className="h-4 bg-gray-300 rounded w-1/2"/>
            <div aria-hidden="true" className="animate-pusle ..."/>
        </div>
    );
};

export default SkeletonCard;