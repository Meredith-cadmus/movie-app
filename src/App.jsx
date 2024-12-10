import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { axios, token } from "./api/AxiosConfig";
import { setBannerData, setImageURL } from "./store/MovieSlice";
import NotFound from "./pages/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  // Fetch Trending Data
  const FetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week", {
        headers: {
          "Content-Type": "application.json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setBannerData(response.data.results));
    } catch (error) {
      setError("Failed to load trending data");
    }
  };

  // Fetch Configuration
  const FetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration", {
        headers: {
          "Content-Type": "application.json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setImageURL(response.data.images.secure_base_url + "original"));
    } catch (error) {
      setError("Failed to load configuration");
    }
  };

  useEffect(() => {
    FetchTrendingData();
    FetchConfiguration();
    setLoading(false);
    const handleOnline = () => {
      toast.success("Connection restored! You're back online.");
    };

    const handleOffline = () => {
      toast.error("You are offline. Check your network connection.");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (error) {
    return <NotFound />;
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow pt-16">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
      <ToastContainer />
    </main>
  );
}

export default App;
