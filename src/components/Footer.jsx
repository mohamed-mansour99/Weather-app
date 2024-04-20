import React, { useEffect, useState } from "react";
import logo from "../assets/Sky Castlogo.png";
import Email from "../assets/Email.svg";
import Phone from "../assets/phone.svg";
import { useTranslation } from "react-i18next";
 

const Footer = () => {
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
    <div className="border-t-2 text-[#000] bg-[#FFFFFF66]">
      <footer className="flex container mx-auto py-16 gap-10 px-8 flex-wrap justify-between ">
        <div className="space-y-10 min-w-[290px] max-w-[477px]">
          <img src={logo} alt="" className="max-w-[200px]" />
          <p className="text-xl text-[#000]">
            {t("FooterDes")}
          </p>
          <ul className="flex flex-col gap-4 text-[#000]">
            <li className="flex items-center gap-5">
              <img src={Email} alt="" className="w-5 h-5 object-contain" />
              <span>SkyCast@mail.com</span>
            </li>
            <li className="flex items-center gap-5">
              <img src={Phone} alt="" className="w-5 h-5 object-contain" />
              <span>+ 12 3456 7890</span>
            </li>
          </ul>
        </div>
        <div className="space-y-10 max-w-[477px]">
          <h6 className="text-xl font-semibold text-[var(--color-primary)]">
               {t("Services")}
          </h6>
          <ul className="flex flex-col gap-4">
            <li>{t("Web Hosting")}</li>
            <li>{t("Domains")}</li>
            <li>{t("Premium Hosting")}</li>
            <li>{t("Private Server")}</li>
            <li>{t("E-mail Hosting")}</li>
          </ul>
        </div>
        <div className="space-y-10 max-w-[477px]">
          <h6 className="text-xl font-semibold text-[var(--color-primary)]">
 
              {t("Support")}
          </h6>
          <ul className="flex flex-col gap-4">
            <li>{t("Pricing Plan")}</li>
            <li>{t("Documentation")}</li>
            <li>{t("Guide")}</li>
            <li>{t("Tutorial")}</li>
          </ul>
        </div>
        <div className="space-y-10 max-w-[477px]">
          <h6 className="text-xl font-semibold text-[var(--color-primary)]">
               {t("Company")}
          </h6>
          <ul className="flex flex-col gap-4">
            <li>{t("About")}</li>
            <li>{t("Blog")}</li>
            <li>{t("Join Us")}</li>
            <li>{t("Press")}</li>
            <li>{t("Partners")}</li>
          </ul>
        </div>
        <div className="space-y-10 max-w-[477px]">
          <h6 className="text-xl font-semibold text-[var(--color-primary)]">
              {t("Legal")}
          </h6>
          <ul className="flex flex-col gap-4">
            <li> {t("Claim")}</li>
            <li> {t("Privacy")}</li>
            <li> {t("Terms")}</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
