import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { MdArrowDropDown, MdKeyboardArrowLeft } from "react-icons/md";
import logo from "../assets/Sky Castlogo.png";


const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(localStorage.getItem("Token"));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  const handleLogout = () => {
    localStorage.removeItem("Token");
    setIsLogin(false);
  };
  useEffect(function () {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  const { t, i18n } = useTranslation();
  const [lang, setlang] = useState(localStorage.getItem("lang") || "en");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <nav
      className={`rounded-[20px] border border-[#fff] container m-auto  bg-[#FFFFFF66] min-h-[100px] max-sm:min-h-[72px] flex items-center duration-200 ${
        scrolled
          ? "fixed  top-0 left-0 right-0 z-50 shadow-md translate-x-1 bg-[#fff]"
          : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5">
        <div className="flex flex-row-reverse gap-2 w-32 h-auto max-sm:w-20 max-w-[150px] max-h-[150px]">
          <Link to="/">
            <img src={logo} className="w-full h-full object-contain" alt="" />
          </Link>
          <button
            onClick={() => setOpenSidebar(true)}
            className="block text-4xl text-[#000]"
          >
            <RxHamburgerMenu />
          </button>
        </div>

        <div className="flex items-center gap-x-4 max-lg:hidden">
          <label className="max-lg:hidden input search input-bordered flex items-center gap-2">
            <input type="text" className=" grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>

          {isLogin ? (
            <div className="flex items-center gap-x-4 max-lg:hidden">
              <Link
                to="/"
                className="max-w-[56px] h-auto flex gap-1 justify-center items-center"
              >
                <svg
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                >
                  <g clipPath="url(#clip0_479_5200)">
                    <rect width="56" height="56" rx="28" fill="#E3E3E3" />
                    <rect
                      x="17"
                      y="9"
                      width="22"
                      height="22"
                      rx="11"
                      fill="#B5B5B5"
                    />
                    <rect
                      x="-14"
                      y="37"
                      width="84"
                      height="84"
                      rx="42"
                      fill="#B5B5B5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_479_5200">
                      <rect width="56" height="56" rx="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              {JSON.parse(localStorage.getItem("user")).name}
              <div className="dropdown-container relative w-12 ">
                <MdArrowDropDown
                  onClick={toggleMenu}
                  className={`arrow-icon cursor-pointer w-full h-full"}
         `}
                />
                {/*////////////////////////////DropDownMenu/////////////////////////////  */}
                {isOpen && (
                  <div className="dropMenu absolute bg-[#fff] z-[11111] right-[-111px] top-[38px] w-[300px] border-gray-300 rounded-md shadow-lg mt-6 p-[15px]">
                    <div className="p-1 pt-5">
                      <Link
                        onClick={() => setIsOpen(false)}
                        to="/profile/profile-personly"
                        className="flex items-center gap-3 justify-between border-b border-gray-300 pb-3"
                      >
                        <span className="flex items-center gap-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="45"
                            height="45"
                            viewBox="0 0 56 56"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_479_5200)">
                              <rect
                                width="56"
                                height="56"
                                rx="28"
                                fill="#E3E3E3"
                              />
                              <rect
                                x="17"
                                y="9"
                                width="22"
                                height="22"
                                rx="11"
                                fill="#B5B5B5"
                              />
                              <rect
                                x="-14"
                                y="37"
                                width="84"
                                height="84"
                                rx="42"
                                fill="#B5B5B5"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_479_5200">
                                <rect
                                  width="56"
                                  height="56"
                                  rx="28"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className="flex-1 ">
                          <p>الملف الشخصي</p>
                          <p className="overflow-hidden whitespace-no-wrap w-50 text-[14px]">
                            {JSON.parse(localStorage.getItem("user")).name}{" "}
                          </p>
                        </span>
                      </Link>

                      <Link
                        onClick={handleLogout}
                        className="text-[#C50905] hover:bg-gray-200 mt-1 flex items-center gap-2 py-3 px-2 justify-between"
                      >
                        <span className="flex items-center gap-4">
                          <p>تسجيل خروج</p>
                        </span>
                        <MdKeyboardArrowLeft />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link to={"/signup"}>
              <button className="bg-[#0FB3BBCC] px-5 py-2 rounded-md font-bold text-[#000]">
                Signup
              </button>
            </Link>
          )}
          <button
            className="text-[#000] text-[17px]"
            onClick={() => setlang(i18n.language === "ar" ? "en" : "ar")}
          >
            {i18n.language === "ar" ? "English 🇺🇸" : "🇪🇬عربي"}
          </button>
        </div>

        {/* MobileNav */}

        <aside
          className={` px-5 fixed top-0 bottom-0 h-[100dvh] z-50 transition-all ${
            openSidebar ? "left-0" : "-left-full"
          } w-full h-full bg-white`}
        >
          <header className="flex items-center justify-between min-h-[100px] max-sm:min-h-[72px]">
            <div className="w-20 h-w-20 max-sm:w-16 max-sm:h-16 max-w-[150px] max-h-[150px]">
              <Link to="/">
                <img
                  src={logo}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </Link>
            </div>

            <button
              onClick={() => setOpenSidebar(false)}
              className="block text-4xl text-[--color-primary] "
            >
              <IoClose />
            </button>
          </header>

          <ul className="flex flex-col gap-y-8 mt-6 mb-12">
            {isLogin && (
              <li className="flex items-center gap-4 border-b pb-4">
                <Link
                  to="#"
                  className="max-w-[56px] h-auto flex gap-1 justify-center items-center"
                >
                  <svg
                    className="w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_479_5200)">
                      <rect width="56" height="56" rx="28" fill="#E3E3E3" />
                      <rect
                        x="17"
                        y="9"
                        width="22"
                        height="22"
                        rx="11"
                        fill="#B5B5B5"
                      />
                      <rect
                        x="-14"
                        y="37"
                        width="84"
                        height="84"
                        rx="42"
                        fill="#B5B5B5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_479_5200">
                        <rect width="56" height="56" rx="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                {JSON.parse(localStorage.getItem("user")).name}
              </li>
            )}
            <label className="input search input-bordered flex items-center gap-2">
              <input type="text" className=" grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <li className="border-b pb-4">
              <NavLink
                className={({ isActive }) =>
                  `text-xl ${
                    isActive ? "text-black" : "text-[--color-dark-grey]"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="border-b pb-4">
              <NavLink
                className={({ isActive }) =>
                  `text-xl ${
                    isActive ? "text-black" : "text-[--color-dark-grey]"
                  }`
                }
                to="/"
              >
                About
              </NavLink>
            </li>
            {isLogin ? (
              <li className="border-b pb-4">
                <Link className="text-xl" onClick={handleLogout}>
                  LogOut
                </Link>
              </li>
            ) : (
              <Link to={"/signup"}>
                <button className="text-xl">Signup</button>
              </Link>
            )}
          </ul>
        </aside>
      </div>
    </nav>
  );
};
export default Navbar;
