import { useState } from "react";
import { axios, token } from "../api/AxiosConfig";
import { useEffect } from "react";

const UseFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(endpoint, {
      headers: {
        "Content-Type": "application.json",
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    setData(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};

export default UseFetch;
