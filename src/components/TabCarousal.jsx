import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaSun, FaWind, FaCloudRain, FaCloud, FaChevronRight, FaChevronLeft } from 'react-icons/fa'; // Import weather icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sunny from "../assets/01_sunny_color.png"
import cloudy from "../assets/04_sun_cloudy_color.png"
import lighting from "../assets/07_lightning_color.png"
import rain from "../assets/11_heavy_rain_color.png"
import { useTranslation } from 'react-i18next';

const CityCarousel = ({ city, weatherData }) => {
  const WeatherIcon = ({ type }) => {
    switch (type) {
      case ('sunny' || "مشمس"):
        return <img src={sunny} alt="sunny"/>;
      case 'lighting':
        return <img src={lighting} alt="lighting"/>;;
      case 'rainy':
        return <img src={rain} alt="rain"/>;
      case 'cloudy':
        return <img src={cloudy} alt="cloudy"/>;;
      default:
        return null;
    }
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
        <FaChevronLeft className="text-[#0FB3BB] text-[24px] sm:text-[18px]" /> {/* Use left arrow icon */}
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow custom-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
        <FaChevronRight className="text-[#0FB3BB] text-[24px] sm:text-[18px]" /> {/* Use right arrow icon */}
      </div>
    );
  };

  const settings = {
    slidesToShow: 3,
    dots: false, // Remove dots
    centerMode: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <div className="wrapper relative w-full p-2">
      <h2 className="text-xl font-bold mb-4">{city}</h2>
      <Slider {...settings}>
        {weatherData.map((day, index) => (
          <div key={index} className="slideWeather flex flex-col-reverse items-center justify-center text-[#000] gap-2">
            <p className="text-[#000] text-center">{day.c}</p>
            <p className="text-[#000] text-center font-bold">{day.condtion}</p>
            <WeatherIcon type={day.type} />
            <p className="text-gray-500 text-center">{day.month}</p>
            <p className="text-[#000] font-bold text-center">{day.day}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const TabCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { t, i18n } = useTranslation();
  const [lang, setlang] = useState(localStorage.getItem("lang") || "en");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }, [lang]);

  // Dummy weather data for each city
  const citiesData = [
    {
      city: "New York",
      weatherData: [
        { day: t('Mon'), month:t("MAr6"),type: 'sunny' ,c:"17-30℃",condtion:t('sunny') },
        { day: t('Tue'),month:t("MAr7"), type: 'lighting' ,c:"13-18℃",condtion:t('lighting')},
        { day: t('Wed'), month:t("MAr8"),type: 'rainy' ,c:"10-15℃",condtion:t('rainy')},
        { day: t('Thur'),month:t("MAr9"), type: 'cloudy',c:"16-21℃",condtion:t('cloudy') },
        { day: t('Fri'),month:t("MAr10"), type: 'sunny',c:"16-25℃",condtion:t('sunny') },
        { day: t('Sat'),month:t("MAr11"), type: 'rainy',c:"12-20℃" ,condtion:t('rainy')},
        { day: t('Sun'),month:t("MAr12"), type: 'cloudy' ,c:"16-21℃",condtion:t('cloudy')}
      ]
    },
     {
      city: "Hongkong",
      weatherData: [
        { day: t('Mon'), month:t("MAr6"),type: 'sunny' ,c:"17-30℃",condtion:t('sunny') },
        { day: t('Tue'),month:t("MAr7"), type: 'lighting' ,c:"13-18℃",condtion:t('lighting')},
        { day: t('Wed'), month:t("MAr8"),type: 'rainy' ,c:"10-15℃",condtion:t('rainy')},
        { day: t('Thur'),month:t("MAr9"), type: 'cloudy',c:"16-21℃",condtion:t('cloudy') },
        { day: t('Fri'),month:t("MAr10"), type: 'sunny',c:"16-25℃",condtion:t('sunny') },
        { day: t('Sat'),month:t("MAr11"), type: 'rainy',c:"12-20℃" ,condtion:t('rainy')},
        { day: t('Sun'),month:t("MAr12"), type: 'cloudy' ,c:"16-21℃",condtion:t('cloudy')}
      ]
    },{
        city: "Tokyo",
        weatherData: [
          { day: t('Mon'), month:t("MAr6"),type: 'sunny' ,c:"17-30℃",condtion:t('sunny') },
          { day: t('Tue'),month:t("MAr7"), type: 'lighting' ,c:"13-18℃",condtion:t('lighting')},
          { day: t('Wed'), month:t("MAr8"),type: 'rainy' ,c:"10-15℃",condtion:t('rainy')},
          { day: t('Thur'),month:t("MAr9"), type: 'cloudy',c:"16-21℃",condtion:t('cloudy') },
          { day: t('Fri'),month:t("MAr10"), type: 'sunny',c:"16-25℃",condtion:t('sunny') },
          { day: t('Sat'),month:t("MAr11"), type: 'rainy',c:"12-20℃" ,condtion:t('rainy')},
          { day: t('Sun'),month:t("MAr12"), type: 'cloudy' ,c:"16-21℃",condtion:t('cloudy')}
        ]
      },

  ];

  return (
    <div>
      <div className="tabs flex justify-start mt-4 border-b border-gray-300 pb-3 ">
        {citiesData.map((city, index) => (
          <div
            key={index}
            className={`border text-[16px] tab ${currentIndex === index ? 'active text-[#000] font-bold' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            {city.city}
          </div>
        ))}
      </div>
      {citiesData.map((city, index) => (
        index === currentIndex && (
          <CityCarousel
            key={index}
            weatherData={city.weatherData}
          />
        )
      ))}
    </div>
  );
};

export default TabCarousal;
