import React from "react";
import { mobileNav } from "../data";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
  return (
    <section className="lg:hidden fixed bottom-0 w-full h-14 px-3 bg-gray-900">
      <div className="flex justify-between items-center h-full text-neutral-400">
        {mobileNav.map((mobile, index) => (
          <NavLink
            key={index}
            to={mobile.href}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
                isActive ? "text-white scale-110" : ""
              }`
            }
          >
            <div className="text-2xl">{mobile.icon}</div>
            <p className="text-xs">{mobile.lable}</p>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default MobileNavigation;
