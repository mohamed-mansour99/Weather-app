import React, { useEffect, useState } from "react";
import ChartWeather from "../components/ChartWeather";
import Carousel from "../components/Carousel ";
import ClockIcon from "../assets/clockIcon.svg";
import sunny from "../assets/sunny.png";
import rainy from "../assets/rainy.png";
import windy from "../assets/Windy.png";
import Temp from "../assets/heatTemp.png";
import sunnyColor from "../assets/sunnylevelone.png";
import TabCarousal from "../components/TabCarousal";
import { useTranslation } from "react-i18next";



const Home = () => {
  const [time, setTime] = useState(new Date());

  const { t, i18n } = useTranslation();
  const [lang, setlang] = useState(localStorage.getItem("lang") || "en");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }, [lang]);



  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert time to Egypt time
  const egyptTime = new Date(
    time.toLocaleString("en-US", { timeZone: "Africa/Cairo" })
  );

  return (
    <div className="h-[71vh] mb-8 container mt-[30px]  flex justify-between m-auto overflow-hidden gap-5 flex-wrap max-lg:h-full">

 {/* /////////////////////////MainContainer////////////////////////////////// */}

      <div className="w-[70%] flex flex-col justify-between  max-lg:w-full max-sm:flex-wrap max-sm:h-full">
        <div className="flex  h-[50%] justify-between gap-7  max-sm:flex-wrap max-sm:w-full max-sm:h-full">
          <div className="w-[60%] max-sm:w-full h-[85%] border border-[#fff]  rounded-[20px] bg-[#FFFFFF66] p-9 flex flex-col justify-around max-lg:h-full ">
            <div className="text-[#000]">
              <p className="text-[23px] ">{t('Current Weather')}</p>
              <p className="text-[23px] ml-9">
                {egyptTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>{" "}
            </div>
            <div className="flex items-center gap-[24px]">
              <img src={sunnyColor} width="80px" alt="suuny" />
              <p className="text-[50px] text-[#000]">25°C</p>
              <p>{t('Cloudy')}  </p>
            </div>
            <div className="text-[#000] text-[24px]" > {t('intro')}</div>
          </div>
          <div className="w-[40%] max-sm:w-full h-[95%]  border border-[#fff]  rounded-[20px] bg-[#FFFFFF66] p-4 max-lg:h-full ">
            <TabCarousal />
          </div>
        </div>

        <div className="w-full mt-5 h-[50%] flex items-end justify-end flex-col max-sm:h-[400px]  ">
          <ChartWeather />
        </div>
      </div>

{/* /////////////////////////SideContainer////////////////////////////////// */}

      <div className="w-[27%] pt-[50px] border border-[#fff]  rounded-[20px] bg-[#FFFFFF66] p-4  max-lg:w-full">
        <div className="flex flex-col gap-4 items-center">
          <Carousel />
          <span className="flex items-center gap-2 text-[#000] mb-6">
            <img src={ClockIcon} alt="clock" />
            <p className="text-[23px] ">
              {egyptTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </span>
        </div>
        <div>
          <h3 className="text-[#000] font-bold text-[20px] mb-6">
            AIR CONDITIONS
          </h3>
          <div className="flex flex-col gap-6 max-lg:flex-row">
            <div className="text-[#000] text-[18px] flex gap-1 items-start">
              <span>
                <img src={Temp} alt="Temp" />
              </span>
              <span className="font-medium">
                <p>{t("Real Feel")}</p>
                <p>30°</p>
              </span>
            </div>
            <div className="text-[#000] text-[18px] flex gap-2 items-start">
              <span>
                <img src={windy} alt="windy" />
              </span>
              <span className="font-medium">
                <p>{t("Wind")} </p>
                <p>0.8 km/hr</p>
              </span>
            </div>
            <div className="text-[#000] text-[18px] flex gap-2 items-start">
              <span>
                <img src={rainy} alt="rainy" />
              </span>
              <span className="font-medium">
                <p>{ t("Chance of rain")}</p>
                <p>2%</p>
              </span>
            </div>
            <div className="text-[#000] text-[18px] flex gap-2 items-start">
              <span>
                <img src={sunny} alt="sunny" />
              </span>
              <span className="font-medium">
                <p>{t("UV Index") }</p>
                <p>4</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
