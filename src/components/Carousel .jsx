import React from 'react';
import Slider from 'react-slick';
import { FaSun, FaWind, FaCloudRain, FaCloud, FaChevronRight, FaChevronLeft } from 'react-icons/fa'; // Import weather icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  // Dummy weather data for each day of the week
  const weatherData = [
    { day: 'Mon', type: 'sunny' },
    { day: 'Tue', type: 'windy' },
    { day: 'Wed', type: 'rainy' },
    { day: 'Thur', type: 'cloudy' },
    { day: 'Fri', type: 'sunny' },
    { day: 'Sat', type: 'rainy' },
    { day: 'Sun', type: 'cloudy' }
  ];

  const WeatherIcon = ({ type }) => {
    switch (type) {
      case 'sunny':
        return <FaSun />;
      case 'windy':
        return <FaWind />;
      case 'rainy':
        return <FaCloudRain />;
      case 'cloudy':
        return <FaCloud />;
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
    slidesToShow: 2,
    dots: false, // Remove dots
    centerMode: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <div className="wrapper relative w-full p-2">
      <Slider {...settings}>
        {weatherData.map((day, index) => (
          <div key={index} className="slideWeather flex flex-col-reverse items-center justify-center text-[#000] text-[22px]">
            <WeatherIcon type={day.type} />
            <p className="text-[#000] text-center">{day.day}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;