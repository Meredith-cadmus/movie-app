import React from "react";
import { IoClose } from "react-icons/io5";
import UseFetchDetails from "../hooks/UseFetchDetails";

const VideoPlayer = ({ videoId, close, media_type }) => {
  const { data: videoPlay } = UseFetchDetails(
    `${media_type}/${videoId}/videos`
  );

  return (
    <div className="bg-neutral-700/60 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
      <div className="bg-black w-full max-h-[70vh] max-w-screen-md aspect-video rounded relative z-30">
        <button
          onClick={close}
          className="absolute -right-1 text-white text-3xl -top-7 z-100"
        >
          <IoClose />
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoPlay?.results[0]?.key}`}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
