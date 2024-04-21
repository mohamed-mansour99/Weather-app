import React, { useEffect, useState } from "react";
import { IoCloudyNightSharp, IoRainy } from "react-icons/io5";
import { MdOutlineNightlightRound } from "react-icons/md";
import { FaCloudMoonRain } from "react-icons/fa";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ClockIcon from "../assets/clockIcon.svg";
import { useTranslation } from "react-i18next";

const data = [
  {
    name: "Page A",
    pv: 26,
    degree: "26°",
    state: "night-cloudy",
    wind: "15 km/h",
    time: "22:00",
  },
  {
    name: "Page B",
    pv: 26,
    degree: "26°",
    state: "night",
    wind: "9 km/h",
    time: "00:00",
  },
  {
    name: "Page C",
    pv: 22,
    degree: "22°",
    state: "night-rain",
    wind: "5 km/h",
    time: "02:00",
  },
  {
    name: "Page D",
    pv: 16,
    degree: "16°",
    state: "rain",
    wind: "12 km/h",
    time: "04:00",
  },
  {
    name: "Page E",
    pv: 20,
    degree: "20°",
    state: "rain",
    wind: "10 km/h",
    time: "06:00",
  },
  {
    name: "Page F",
    pv: 22,
    degree: "22°",
    state: "night-rain",
    wind: "7 km/h",
    time: "23:00",
  },
  {
    name: "Page G",
    pv: 16,
    degree: "16°",
    state: "rain",
    wind: "12 km/h",
    time: "01:00",
  },
];
const icons = {
  "night-cloudy": <IoCloudyNightSharp size={24} />,
  night: <MdOutlineNightlightRound size={24} />,
  "night-rain": <FaCloudMoonRain size={24} />,
  rain: <IoRainy size={24} />,
};

const CustomizedDot = (props) => {
  const { cx, cy, payload } = props;
  console.warn(payload);
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
    <>
      <foreignObject x={cx - 20} y={cy + 20} width="100" height="100">
        <div className="w-fit">
          <div className="flex justify-center items-center w-[60px]">
            {icons[payload.state]}
          </div>
          <p className="text-xs text-center">{payload.wind}</p>
          <p className="text-xs text-center">{payload.time}</p>
        </div>
      </foreignObject>
      <foreignObject x={cx - 9} y={cy - 35} width="30" height="30">
        <div className="w-fit">
          <p className="font-bold text-center ">{payload.degree}</p>
        </div>
      </foreignObject>
    </>
  );
};

const getIntroOfPage = (state,t) => {
    console.log(state)
    if (state === "night-cloudy") {
      return t("It's night and the weather is cloudy !");
  }  
  if (state === "night-rain") {
    return t("It's night and the weather is rainy ! Take an umbrella with you");
  }
  if (state === "rain") {
    return t("It's raining outside !");
  }
  if (state === "night") {
    return t("It's night ! Take a good sleep");
  }
  return "gfdfd";
};

const CustomTooltip = ({ active, payload, label }) => {
  const { t, i18n } = useTranslation();

  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 w-32 p-3 space-y-2 ">
        <p className="intro text-xs text-[#000]">{payload[0].payload.time}</p>
        <p className="intro text-xs text-[#000]">{getIntroOfPage(payload[0].payload.state,t)}</p>
        <p className="intro text-xs text-[#000]">{payload[0].payload.wind}</p>
      </div>
    );
  }

  return null;
};

const ChartWeather = () => {

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
    <div className="w-full mb-[10px]  h-[270px] bg-[#FFFFFF66] border border-1 border-[#fff] rounded-[20px]  max-lg:h-[300px] ">
      <ResponsiveContainer width="100%" height="100%" className="p-7">
      <h2 className="text-[24px] text-[#000] flex flex-row-reverse gap-2 justify-end">
      <span> {t("4-hour forecast")}</span>
      <img src={ClockIcon} width={"32px"} alt="ClockIcon"/>
      </h2>
        <LineChart
        className="text-[#000] text-[20px]"
          width={500}
          height={300}
          data={data}
          margin={{
            top: 50,
            right: 35,
            left: 35,
            bottom: 5,
          }}
        >
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#0FB3BB"
            dot={<CustomizedDot />}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartWeather;