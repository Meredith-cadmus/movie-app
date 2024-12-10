import React from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import HorizontalScroll from "../components/HorizontalScroll";
import UseFetch from "../hooks/UseFetch";
import { MdUpcoming } from "react-icons/md";

const Home = () => {
  const trendingData = useSelector((state) => state.movieData.bannerData);
  const { data: nowPlaying } = UseFetch("/movie/now_playing");
  const { data: topRated } = UseFetch("/movie/top_rated");
  const { data: popularTVShow } = UseFetch("/tv/popular");
  const { data: upcoming } = UseFetch("/movie/upcoming");

  return (
    <div className=" bg-yellow-200">
      <BannerHome />
      <HorizontalScroll
        data={trendingData}
        heading={"Trending Movies"}
        trending={true}
      />
      <HorizontalScroll
        data={nowPlaying}
        heading={"Now Playing"}
        media_type={"movie"}
      />
      <HorizontalScroll
        data={topRated}
        heading={"Top Rated Movies"}
        media_type={"movie"}
      />
      <HorizontalScroll
        data={popularTVShow}
        heading={"Popular TV Show"}
        media_type={"tv"}
      />
      <HorizontalScroll
        data={upcoming}
        heading={"Upcoming"}
        media_type={"movie"}
      />
    </div>
  );
};

export default Home;
