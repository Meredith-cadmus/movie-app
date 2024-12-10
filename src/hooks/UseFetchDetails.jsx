import { useState } from "react";
import { axios, token } from "../api/AxiosConfig";
import { useEffect } from "react";

const UseFetchDetails = (endpoint) => {
  const [data, setData] = useState();
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
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, loading };
};

export default UseFetchDetails;
