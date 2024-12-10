import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import DetailPage from "../pages/DetailPage";
import SearchPage from "../pages/SearchPage";
import NotFound from "../pages/NotFound";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import PrivacyPolicy from "../pages/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // Home route
        element: <Home />,
      },
      {
        path: ":explore", // Dynamic route for ExplorePage
        element: <ExplorePage />,
      },
      {
        path: ":explore/:id", // Dynamic route for DetailPage
        element: <DetailPage />,
      },
      {
        path: "search", // Relative path for SearchPage
        element: <SearchPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "*", // Catch-all route for 404
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
