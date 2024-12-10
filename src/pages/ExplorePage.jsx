import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axios, token } from "../api/AxiosConfig";
import Cards from "../components/Cards";
import { FaSpinner } from "react-icons/fa";

const ExplorePage = () => {
  const param = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state

  const fetchData = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get(`/discover/${param.explore}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: { page: pageNo }, // Fix 'params' typo
      });

      setData((prev) => [...prev, ...response.data.results]);
      setTotalPageNo(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
  }, [param.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Show spinner if loading
  if (loading && pageNo === 1) {
    return (
      <div className="flex items-center justify-center h-screen bg-yellow-200">
        <FaSpinner className="animate-spin text-gray-900 text-5xl" />
      </div>
    );
  }

  return (
    <div className="container bg-yellow-200 mx-auto px-10 lg:px-2 pb-10">
      <h3 className="capitalize text-xl p-4 lg:text-3xl text-yellow-600 font-semibold my-3">
        Popular {param.explore} Show
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center">
        {data.map((explore, index) => (
          <Cards data={explore} key={explore.id} media_type={param.explore} />
        ))}
      </div>
      {loading && pageNo > 1 && (
        <div className="flex justify-center mt-6">
          <Spinner size="md" color="danger" /> {/* Inline Spinner */}
        </div>
      )}
    </div>
  );
};

export default ExplorePage;
