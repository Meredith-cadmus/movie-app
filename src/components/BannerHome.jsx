import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaAngleLeft, FaAngleRight, FaSpinner } from "react-icons/fa";
import moment from "moment";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieData.bannerData);
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (bannerData.length > 0) {
      setIsLoading(false);
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev < bannerData.length - 1 ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerData.length]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-yellow-200 ">
        <FaSpinner className="animate-spin text-gray-900 text-5xl" />
      </div>
    );
  }

  return (
    <section className="h-full w-full bg-gray-900 ">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => (
          <div
            key={index}
            className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            <div className="w-full h-full">
              <img
                src={imageURL + data.backdrop_path}
                className="w-full h-full object-cover"
                alt="Banner"
              />
            </div>
            <div className="absolute w-full h-full top-0 hidden justify-between items-center z-10 px-3 group-hover:flex">
              <button
                onClick={handlePrevious}
                className="bg-yellow-400 p-2 rounded-full text-2xl text-white hover:shadow-lg"
              >
                <FaAngleLeft />
              </button>
              <button
                onClick={handleNext}
                className="bg-yellow-400 p-2 rounded-full text-2xl text-white hover:shadow-lg"
              >
                <FaAngleRight />
              </button>
            </div>
            <div className="h-full w-full absolute top-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="container mx-auto lg:px-10">
              <div className="absolute bottom-0 max-w-md px-3 pb-5">
                <h2 className="font-bold text-2xl lg:text-4xl drop-shadow-lg">
                  {data.original_title
                    ? data.original_title
                    : data.original_name}
                </h2>
                <p className="text-ellipsis line-clamp-3 my-2 text-white">
                  {data.overview}
                </p>
                <div className="flex gap-4 items-center">
                  <p>Rating: {Number(data.vote_average).toFixed(1)}</p>
                  <span>|</span>
                  <p>View: {Number(data.popularity).toFixed(0)}</p>
                </div>
                <p className="text-yellow-500 pt-3">
                  Release Date:{" "}
                  {moment(data?.release_date).format("MMMM Do YYYY")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerHome;
