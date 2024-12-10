import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";

export const navigation = [
  {
    lable: "TV Shows",
    href: "tv",
    icon: <PiTelevisionFill />,
  },
  {
    lable: "Movies",
    href: "movie",
    icon: <BiSolidMoviePlay />,
  },
];

export const mobileNav = [
  {
    lable: "Home",
    href: "/",
    icon: <MdHomeFilled />,
  },
  {
    lable: "Search",
    href: "search",
    icon: <IoSearchOutline />,
  },
  ...navigation,
];
