import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const Cards = ({ data, trending, index, media_type, loading }) => {
  const mediaType = data?.media_type ?? media_type;
  const imageURL = useSelector((state) => state.movieData.imageURL);

  // Show Loader if data is still loading
  if (loading) {
    return (
      <div className="w-full min-w-[230px] max-w-[230px] h-80 rounded relative overflow-hidden flex items-center justify-center bg-gray-800">
        <FaSpinner className="text-white text-4xl animate-spin" />
      </div>
    );
  }

  // Render Actual Card Data when loading is complete
  return (
    <Link
      to={`/${mediaType}/${data.id}`}
      className="w-full min-w-[230px] max-w-[230px] h-80 rounded-lg relative cursor-pointer overflow-hidden block transition-all hover:scale-105"
    >
      <img
        src={imageURL + data?.poster_path}
        alt={data?.title || data?.name || "Movie Poster"} // Improved alt text for accessibility
        className="w-full h-full object-cover" // Ensures image is responsive and maintains aspect ratio
      />
      <div className="absolute top-1">
        {trending && (
          <div className="py-1 px-4 rounded-r-full bg-black/40 overflow-hidden backdrop-blur-3xl">
            #{index + 1} trending
          </div>
        )}
      </div>
      <div className="absolute backdrop-blur-3xl bg-black/60 p-2 h-16 w-full bottom-0">
        <h1 className="text-ellipsis line-clamp-1 text-lg font-semibold">
          {data?.title || data?.name}
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-sm text-neutral-400">
            {moment(data?.release_date).format("MMMM Do YYYY")}
          </p>
          <p className="text-xs bg-black px-1 rounded-full text-white">
            Rating: {Number(data?.vote_average).toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
