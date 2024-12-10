import React, { useRef } from "react";
import Cards from "./Cards";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaSpinner } from "react-icons/fa";

const HorizontalScroll = ({
  data = [],
  heading = "",
  trending,
  media_type,
  loading = false,
}) => {
  const containerRef = useRef();

  const handleNext = () => {
    const scrollAmount = containerRef.current.offsetWidth;
    containerRef.current.scrollLeft += scrollAmount;
  };

  const handlePrevious = () => {
    const scrollAmount = containerRef.current.offsetWidth;
    containerRef.current.scrollLeft -= scrollAmount;
  };

  return (
    <div className="container py-7 px-3 lg:px-10 mx-auto cursor-pointer">
      {/* Heading */}
      {heading && (
        <h2 className="text-xl lg:text-3xl font-bold mb-3 text-yellow-600 drop-shadow-lg">
          {heading}
        </h2>
      )}

      <div className="overflow-hidden relative">
        {loading ? (
          // Loader for the loading state
          <div className="flex items-center justify-center h-80">
            <FaSpinner className="text-neon-orange text-5xl animate-spin" />
          </div>
        ) : data.length > 0 ? (
          // Scrollable Content
          <>
            <div
              ref={containerRef}
              className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 grid-flow-col overflow-x-scroll relative scroll-smooth scroll-hide"
            >
              {data.map((item, index) => (
                <Cards
                  key={item.id || index}
                  data={item}
                  index={index}
                  trending={trending}
                  media_type={media_type}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-0 w-full h-full hidden lg:flex justify-between items-center">
              <button
                onClick={handlePrevious}
                className="p-2 bg-yellow-400 text-white rounded-full shadow-md hover:scale-110 transition-all duration-300"
                aria-label="Scroll Left"
              >
                <FaAngleLeft />
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-yellow-500 text-white rounded-full shadow-md hover:scale-110 transition-all duration-300"
                aria-label="Scroll Right"
              >
                <FaAngleRight />
              </button>
            </div>
          </>
        ) : (
          // Message for empty data
          <div className="flex items-center justify-center h-80">
            <p className="text-neon-pink">No items available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalScroll;
