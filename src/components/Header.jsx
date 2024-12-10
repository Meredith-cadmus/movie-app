import React, { useState, useEffect } from "react";
import logo from "../assets/Movie-logo.png";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import user from "../assets/User.png";
import { navigation } from "../data";

const Header = () => {
  const location = useLocation();
  const removeSpace = location.search.slice(3).split("%20").join(" ");
  const [searchInput, setSearchInput] = useState(removeSpace);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="px-3 fixed top-0 w-full py-2 bg-gray-900 z-40 shadow-md">
      <div className="flex">
        {/* Logo */}
        <Link to={"/"}>
          <img src={logo} alt="logo" width={100} />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex pt-5 text-lg gap-3 ml-3">
          {navigation.map((nav, index) => (
            <div key={index}>
              <NavLink
                to={nav.href}
                className={({ isActive }) =>
                  `px-3 py-1 rounded transition-colors ${
                    isActive
                      ? "text-yellow-600"
                      : "text-white  hover:text-yellow-400"
                  }`
                }
              >
                {nav.lable}
              </NavLink>
            </div>
          ))}
        </nav>

        {/* Search and User */}
        <div className="ml-auto flex items-center gap-4">
          {/* Search Form */}
          <form
            className="flex items-center gap-2 group"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Search here..."
              className="px-4 py-2 bg-transparent text-white outline-none hidden lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button
              type="submit"
              className="hidden lg:block text-gray-400 px-3 py-2 group-hover:text-yellow-400 transition-all"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </form>

          {/* User Icon */}
          <div className="w-10 h-10 cursor-pointer transition-transform hover:scale-105">
            <img
              src={user}
              alt="user"
              className="rounded-full"
              onClick={() => alert("Coming Soon")}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
