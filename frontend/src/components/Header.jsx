import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
import Navbar from "./Navbar";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { useNavigate } from "react-router";

const Header = ({ setType }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [input, setInput] = useState("");

  const toggleMenu = () => setMenuOpened(!menuOpened);

  const navigate = useNavigate();

  const searchField = (e) => {
    navigate("/comapnies?search=" + input);
  };

  return (
    <header
      className="relative top-0 left-0 m-auto shadow-md  w-full ring-1 ring-slate-900/5 z-10"
      style={{ backgroundColor: "#081c3f" }}
    >
      <div className="px-4 flex gap-2 flex-wrap justify-evenly py-3 max-xs:px-2">
        <div className="logoContainer">
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              className="rounded-pill"
              style={{ width: "250px" }}
            />
          </Link>
        </div>

        <div className="searchFieldContainer d-flex">
          <input
            type="search"
            className=" border border-gray-900 text-gray-900 text-sm mr-1  p-3.5  rounded"
            placeholder="Search by Company..."
            value={input}
            onInput={(e) => setInput(e.target.value)}
          />
          <button
            className="btn_secondary_rounded flexCenter gap-x-2 medium-16 text-xs"
            onClick={searchField}
          >
            Search
          </button>
        </div>
        {localStorage.getItem("user") ? (
          <NavLink
            to={"/adminDashboard"}
            className={"btn_secondary_rounded flexCenter gap-x-2 medium-16 text-xs"}
          >
            Admin DashBoard
          </NavLink>
        ) : (
          ""
        )}

        <div className="loginContainer gap-1 flexBetween sm:gap-x-6">
          {localStorage.getItem("user") ? (
            <div>
              <NavLink
                to={"/"}
                className={"btn_secondary_rounded flexCenter gap-x-2 medium-16 text-xs"}
                onClick={(e) => localStorage.clear()}
              >
                <img src={logout} alt="logout" height={19} width={19} />
                Logout
              </NavLink>
            </div>
          ) : (
            <NavLink
              to={"/login"}
              className={
                "btn_secondary_rounded flexCenter gap-x-2 medium-16 text-xs"
              }
            >
              Admin Login
            </NavLink>
          )}
        </div>
      </div>
      <div className="flex flex-wrap justify-center px-10 py-3 relative">
        <Navbar
          containerStyles={
            "hidden md:flex gap-x-5 xl:gap-x10 medium-15 text-light"
          }
        />
        {menuOpened ? (
          <Navbar
            containerStyles={
              "flex item-start flex-col gap-y-4 fixed top-48 right-13 p-8 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/S transition-all duration-300"
            }
            setType={setType}
          />
        ) : (
          <Navbar
            containerStyles={
              "flex item-start flex-col gap-y-4 fixed top-60 right-13 p-8 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/S transition-all duration-300 -right-[100%]"
            }
            setType={setType}
          />
        )}
        <div className="flexBetween gap-x-1 sm:gap-x-6 bold-16">
          {!menuOpened ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 text-light ring-slate-100/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 text-light ring-1 ring-slate-100/30 h-8 w-8 rounded-full hover:ring-secondary"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
