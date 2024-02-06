import React, { useEffect, useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";
import "./Products.css";

const ProductCard = () => {
  const slides = [
    {
      url: "https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/00c54453726b0ea8.jpg?q=20",
    },
    {
      url: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3fdd64e1495a855a.jpeg?q=20",
    },
    {
      url: "https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/8b5c77363b7eee29.jpg?q=20",
    },
    {
      url: "https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/3959ad9f670aeeeb.jpg?q=20",
    },
    {
      url: "https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/ed12b7707a04473c.jpg?q=20",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change 3000 to set the interval time in milliseconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
// h-23rem
  return (
    <div className="max-w-[96.7%] h-[10rem] md:max-w-[97.3%] md:h-[13rem] lg:h-[23rem] lg:max-w-[142rem] w-full relative item ">
      {/* images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${slide.url})` }}
          className={`w-full h-full bg-center bg-cover duration-500 images ${
            index === currentIndex ? "" : "hidden"
          }`}
        ></div>
      ))}
      {/* leftArrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <GoArrowLeft onClick={prevSlide} size={30} />
      </div>
      {/* rightArrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <GoArrowRight onClick={nextSlide} size={30} />
      </div>
      {/* indicator */}
      <div className="flex top-4 justify-center indicator">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => {
              goToSlide(slideIndex);
            }}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? "active" : ""
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
