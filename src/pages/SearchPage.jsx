import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { token, axios } from "../api/AxiosConfig";
import debounce from "lodash/debounce";
import Cards from "../components/Cards";
import { FaSpinner } from "react-icons/fa";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false); // State to track loading
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true); // Set loading state to true before fetching
    try {
      const response = await axios.get("/search/multi", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: {
          query: new URLSearchParams(location.search).get("q") || "the",
          page: page,
        },
      });

      setData((prev) => [...prev, ...response.data.results]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading state to false after fetching
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prev) => prev + 1);
    }
  };

  const handleSearch = debounce((value) => {
    navigate(`/search?q=${value}`);
  }, 300);

  useEffect(() => {
    setPage(1);
    setData([]);
  }, [location?.search]);

  useEffect(() => {
    fetchData();
  }, [page, location?.search]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-yellow-200">
      <div className="lg:hidden sticky top-16 py-5 z-50 bg-gray-900 px-2">
        <input
          type="text"
          placeholder="Search here..."
          onChange={(e) => handleSearch(e.target.value)}
          className="px-4 py-1 rounded-full outline-none w-full text-lg text-black"
        />
      </div>

      <h3 className="capitalize text-yellow-600 text-xl lg:text-3xl p-4 font-semibold my-3">
        Search Results
      </h3>

      {/* Show spinner when loading */}
      {loading && page === 1 ? (
        <div className="flex items-center justify-center h-screen bg-yellow-200">
          <FaSpinner className="animate-spin text-gray-900 text-5xl" />
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center items-center">
          {data.map((search) => (
            <Cards
              data={search}
              key={search.id}
              media_type={search.media_type}
            />
          ))}
        </div>
      )}

      {/* Show spinner when loading additional data on scroll */}
      {loading && page > 1 && (
        <div className="flex items-center justify-center h-screen bg-yellow-200">
          <FaSpinner className="animate-spin text-gray-900 text-5xl" />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
