import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import { IoMdMenu, IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

const navLink = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "About",
  },
  {
    id: 3,
    title: "Hidropedia",
  },
  {
    id: 4,
    title: "Monitoring",
  },
  {
    id: 5,
    title: "Product",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center px-5 lg:px-[15px] h-[80px] w-full fixed top-4">
      <div className="w-[113px] h-[58px]">
        <a href="#">
          <img src={Logo} alt="logo_hydrosense" />
        </a>
      </div>
      <ul className="hidden md:flex">
        <li className="flex gap-x-20 ">
          {navLink.map((item) => {
            return (
              <Link
                to={item.id}
                key={item.id}
                className="hover:text-liniear-greem2 text-[20px] md:text-xl"
              >
                {item.title}
              </Link>
            );
          })}
        </li>
      </ul>
      <div className="flex items-center gap-x-5">
        <button className="px-6 lg:px-10 py-2 text-[20px] bg-liniear-greem outline-none hover:bg-liniear-greem2 hover:text-white rounded-full">
          Login
        </button>
        <IoMdMenu
          className="text-[20px] block md:hidden"
          onClick={() => setNav((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          nav ? "right-0 " : "right-[100%]"
        } flex flex-col gap-4 pt-5 px-5 md:hidden absolute top-0 right-0 w-full h-screen bg-white`}
      >
        <IoIosCloseCircleOutline
          className="cursor-pointer text-[20px]"
          onClick={() => setNav((prev) => !prev)}
        />
        <ul className="md:hidden">
          <li className="flex gap-y-4 flex-col">
            {navLink.map((item) => {
              return (
                <Link
                  to={item.id}
                  key={item.id}
                  className="hover:text-liniear-greem2 text-[20px] xl:text-xl border-b cursor-pointer"
                >
                  {item.title}
                </Link>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
