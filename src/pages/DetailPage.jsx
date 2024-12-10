import React from "react";
import { useParams } from "react-router-dom";
import UseFetchDetails from "../hooks/UseFetchDetails";
import { useSelector } from "react-redux";
import moment from "moment";
import Divider from "../components/Divider";
import HorizontalScroll from "../components/HorizontalScroll";
import { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import UseFetch from "../hooks/UseFetch";

const DetailPage = () => {
  const params = useParams();
  const imageURL = useSelector((state) => state.movieData.imageURL);

  // Fetch details
  const { data } = UseFetchDetails(`/${params.explore}/${params.id}`);
  const { data: castData } = UseFetchDetails(
    `/${params.explore}/${params.id}/credits`
  );
  const { data: similarData } = UseFetch(
    `/${params.explore}/${params.id}/similar`
  );

  // Play Video
  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState("");

  const handleVideoPlayer = () => {
    setPlayVideo(true);
    setPlayVideoId(data.id);
  };

  // Safeguards and computations
  const duration = data?.runtime
    ? (Number(data.runtime) / 60).toFixed(1).split(".")
    : ["0", "0"];
  const writer =
    castData?.crew
      ?.filter((el) => el?.department === "Writing")
      ?.map((el) => el?.name)
      ?.join(", ") || "Unknown";
  const director =
    castData?.crew?.find((crew) => crew.job === "Director")?.name || "Unknown";

  return (
    <div className="overflow-hidden bg-yellow-200 text-black">
      {/* Backdrop Image */}
      <div className="w-full h-[400px] relative ">
        <img
          src={imageURL + data?.backdrop_path}
          alt={data?.title || "Backdrop"}
          className="h-full w-full object-top object-cover"
        />
        <div className="w-full h-full absolute top-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className=" lg:-bottom-64 justify-center items-start mx-auto px-3  flex flex-col lg:flex-row gap-5 lg:gap-10">
        {/* Poster */}
        <div className="mx-auto pt-3 lg:mx-0 w-fit min-w-60">
          <img
            src={imageURL + data?.poster_path}
            alt={data?.title || "Poster"}
            className="h-80 w-60 object-cover rounded"
          />
          <button
            onClick={handleVideoPlayer}
            className="bg-yellow-500 w-full py-2 font-semibold hover:bg-gradient-to-r from-red-600 to-orange-600 hover:scale-105 duration-200 text-black rounded mt-3"
          >
            Play Now
          </button>
        </div>

        {/* Details */}
        <div>
          <h2 className="text-3xl lg:text-4xl text-yellow-600 font-bold pt-2">
            {data?.name || data?.title}
          </h2>
          <p className="text-neutral-400 pt-2">{data?.tagline}</p>
          <Divider />
          <div className="flex gap-3">
            <p>Rating: {Number(data?.vote_average).toFixed(1)}+</p>
            <span>|</span>
            <p>View: {Number(data?.vote_count).toLocaleString()}</p>
            <span>|</span>
            <p>
              Duration: {duration[0]}h {duration[1]}m
            </p>
          </div>
          <Divider />
          <h3 className="text-2xl font-bold text-yellow-600 pb-3">Overview</h3>
          <p>{data?.overview || "No overview available."}</p>
          <Divider />
          <div className="flex gap-3 text-center items-center">
            <p>Status: {data?.status}</p>
            <span>|</span>
            <p>
              Release Date: {moment(data?.release_date).format("MMMM Do YYYY")}
            </p>
            <span>|</span>
            <p>Revenue: {Number(data?.revenue) || "0"} $ </p>
          </div>
          <Divider />
          <p>
            <span className="text-yellow-600">Director: </span>
            {director}
          </p>
          <Divider />
          <p>
            <span className="text-yellow-600">Writer: </span>
            {writer}
          </p>
          <Divider />

          {/* Cast */}
          <div className="overflow-hidden">
            <h2 className="font-bold text-2xl text-yellow-600 pb-3">Cast</h2>
            <div className="grid grid-cols-[repeat(auto-fit,112px)] gap-5 justify-center">
              {castData?.cast?.map((starCast) => (
                <div
                  key={starCast.id || starCast.name}
                  className="min-w-[120px]"
                >
                  <img
                    src={imageURL + starCast?.profile_path}
                    alt={starCast?.name || "Cast"}
                    className="w-full h-28 object-cover rounded"
                  />
                  <p>{starCast?.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Similar Items */}
      <div>
        <HorizontalScroll
          data={similarData}
          heading={`Similar ${params.explore}`}
          media_type={"movie"}
        />
      </div>
      {playVideo && (
        <VideoPlayer
          videoId={playVideoId}
          close={() => setPlayVideo(false)}
          media_type={`${params.explore}`}
        />
      )}
    </div>
  );
};

export default DetailPage;
