import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import orSignUp from "../assets/ourSignUp.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import { IoMdArrowDropdown } from "react-icons/io";
 
const Signup = () => {
  const [tooglePassword, setTooglePassword] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { t, i18n } = useTranslation();
  const [lang, setlang] = useState(localStorage.getItem("lang") || "en");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }, [lang]);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordVaild =
      /^.{8,}$/.test(password) &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) &&
      /\d/.test(password);

    if (!passwordVaild) {
      return;
    }
    console.log(passwordVaild);
    localStorage.setItem("Token", "123456789");
    localStorage.setItem("user", JSON.stringify({ name, email }));
    navigate("/");
  };

  return (
    <div className="singup h-[100vh] flex flex-row-reverse ">
      <div className="bg-[#fff] w-[50%] rounded-tl-[30px]  rounded-bl-[30px] flex flex-col p-7 max-lg:w-full">
        <div className="text-[#000] text-[20px] font-bold text-right ">
        <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="flex items-center gap-1 ">
  <IoMdArrowDropdown /> {i18n.language === "ar" ? "🇪🇬عربي" : "English 🇺🇸"}

  </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52">
     <li><button
            className="text-[#000] text-[17px]"
            onClick={() => setlang(i18n.language === "ar" ? "en" : "ar")}
          >
            {i18n.language === "ar" ? "English 🇺🇸" : "🇪🇬عربي"}
          </button></li>
  </ul>
</div>
        </div>
        <div className="flex flex-col items-start mt-[70px]">
          <h1 className="text-[#000] text-[50px] ">{t("Create Account")}</h1>
          <form
            onSubmit={handleSubmit}
            className="w-full mt-20 flex flex-col  items-center justify-center gap-8 "
          >
            <input
              type="text"
              required
              placeholder={t("FullName")}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-[#000] text-[24px] p-4 rounded-[10px] bg-[#FCF7E8]"
            />
            <input
              required
              type="email"
              placeholder={t("Email Address")}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-[#000] text-[24px] p-4 rounded-[10px] bg-[#FCF7E8]"
            />
            <div className=" flex w-full rounded-[10px] items-center p-1 relative">
              <div className="w-full ">
                <input
                  required
                  type={tooglePassword ? "password" : "text"}
                  placeholder={t("password")}
                  onChange={(e) => setPassword(e.target.value)}
                  className="passwordField w-full text-[#000] text-[24px] p-4 rounded-[10px] bg-[#FCF7E8]"
                />
                <ul className="text-red-500">
                  {!/^.{8,}$/.test(password) && password.length > 0 && (
                    <li>the password must at least contain 8 Char</li>
                  )}
                  {!/[A-Z]/.test(password) && password.length > 0 && (
                    <li>the password must at least contain capital letter</li>
                  )}
                  {!/[a-z]/.test(password) && password.length > 0 && (
                    <li>the password must at least contain small letter</li>
                  )}
                  {!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) &&
                    password.length > 0 && (
                      <li>the password must at least contain special letter</li>
                    )}
                  {!/\d/.test(password) && password.length > 0 && (
                    <li>the password must at least contain one Number</li>
                  )}
                </ul>
              </div>
              <div
                className={`${lang === "en" ? "right-[20px]" : "left-[30px]"} eye-password cursor-pointer absolute top-[15px] cursor z-50`}

                onClick={() => setTooglePassword(!tooglePassword)}
              >
                {tooglePassword ? (
                  <VscEye size="50px" color="#0000006b" />
                ) : (
                  <VscEyeClosed size="50px" color="#0000006b" />
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#0FB3BB] text-white text-[36px] px-[70px] py-2 w-[60%] rounded-full"
            >
              {t("SignUP")}
            </button>
          </form>
        </div>
        <div className="mt-[50px]">
          <div className="border w-full p-0 relative">
            <p className=" absolute bg-white px-9 left-1/2 transform -translate-x-1/2 top-[-9px]">
              {t("Or Sign Up with")}
            </p>
          </div>

          <ul className="flex gap-9 items-center mt-[50px] justify-center">
            <li>
              <a href="#">
                <img src={google} alt="scialIcon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={facebook} alt="scialIcon" />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} alt="scialIcon" />{" "}
              </a>
            </li>
          </ul>
          <div className="flex gap-1 mt-[50px] justify-center">
            <p className="text-xl">{t("Already have an account ?")}</p>
            <Link to={"/login"}>
                <button className="text-xl text-[#000]">{t("login")}</button>
              </Link>
          </div>
        </div>
      </div>
      <div className="cloud w-[50%] p-10 mt-[50px] max-lg:hidden">
        <h1 className="text-[48px] text-[#000] font-bold">
           {t("Join to our community")}
        </h1>
        <p className="text-[40px] text-[#00000099] mt-[20px]">
           {t("decSignUp")}
        </p>
      </div>
    </div>
  );
};

export default Signup;
