import { useState } from "react";
import "./Electronics.css";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const Electronics = () => {
  const slidesPerPage = 5.5;
  const [currentPage, setCurrentPage] = useState(0);

  const totalSlides = Math.ceil(slides.length / slidesPerPage);

  const nextSlide = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalSlides) % totalSlides);
  };

  const renderBoxes = () => {
    const start = currentPage * slidesPerPage;
    const end = start + slidesPerPage;
    return slides.slice(start, end).map((slide, index) => (
      <div className={index < 5 ? "box" : "half-box"} key={index}>
        <img className="imgSize" src={slide.image} alt={slide.alt} />
          <p className="title-0">{slide.title}</p>
            <h3 className="title-1">{slide.price}</h3>
      </div>
    ));
  };

  return (
    <div className="electronics_container">
      <div className="left-part">
        <div className="inside_contain">
          <div className="head">
            <h2>Best of Electronics</h2>
            <a
              href="https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DDT-OMU-1%3ADealcard~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#1c41d6"
                className="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
            </a>
          </div>
          <div className="_8BoxesContainer">{renderBoxes()}</div>
          {/* leftArrow */}
          <div className="absolute top-[97%] -translate-x-0 translate-y-[-10%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <GoArrowLeft onClick={prevSlide} size={30} />
          </div>
          {/* rightArrow */}
          <div className="absolute top-[97%] right-[24%] translate-y-[-10%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <GoArrowRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </div>
      <div className="right-part">
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/fc822dc700322fcd.jpg?q=20"
          alt="Description of your image"
        />
      </div>
    </div>
  );
};

const slides = [
  {
    image:
      "https://rukminim2.flixcart.com/image/170/170/ktn9pjk0/mini-ups/d/i/f/qhm-660-quantum-original-imag6y54rshnu6ag.jpeg?q=80",
    alt: "thisimage1",
    title: "UPS & Router UPS",
    price: "From ₹999",
  },
  {
    image:
      "https://rukminim2.flixcart.com/image/170/170/xif0q/dslr-camera/i/d/6/eos-r5-24-105-45-r5-canon-original-imagkk365tvry2gz.jpeg?q=80",
    alt: "thisimage2",
    title: "Cameras",
    price: "Shop Now",
  },
  {
    image:
      "https://rukminim2.flixcart.com/image/170/170/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=80",
    alt: "thisimage3",
    title: "Best of Shavers",
    price: "From ₹1,649",
  },
  {
    image:
      "https://rukminim2.flixcart.com/image/170/170/xif0q/projector/k/f/0/zeb-pixaplay-22-green-16-zeb-pixaplay-22-green-led-zebronics-original-imagpqgasyrg2gzv.jpeg?q=80",
    alt: "thisimage4",
    title: "Projectors",
    price: "From ₹9999",
  },
  {
    image:
      "https://rukminim2.flixcart.com/image/170/170/xif0q/keyboard/gaming-keyboard/b/s/q/f2023-aula-original-imagnhc44uakb4zb.jpeg?q=80",
    alt: "thisimage5",
    title: "Dell Keyboard",
    price: "From ₹229",
  },
  {
    image:
      "https://rukminim2.flixcart.com/image/170/170/kp4difk0/hair-straightener/w/u/r/bhs397-40-philips-original-imag3ffu6tzr5j39.jpeg?q=80",
    alt: "thisimage6",
    title: "Straighteners",
    price: "From ₹279",
  },
  {
    image:
      "https://rukminim2.flixcart.com/image/170/170/kmp7ngw0/monitor/p/b/s/s2421hn-24-kvmtc-dell-original-imagfjphb5ytsfkj.jpeg?q=80",
    alt: "thisimage7",
    title: "Monitors",
    price: "From ₹9999",
  },
  {
    image:
      "https://rukminim2.flixcart.com/image/170/170/xif0q/projector/r/a/o/-original-imagtr8npfrsbx6s.jpeg?q=80",
    alt: "thisimage8",
    title: "Projectors",
    price: "From ₹6990",
  },
  {
    image:
      "https://rukminim2.flixcart.com/image/170/170/kmax8y80/monitor/9/6/f/va2256h-vs17294-viewsonic-original-imagf8egfprghb4d.jpeg?q=80",
    alt: "thisimage9",
    title: "Monitors",
    price: "From ₹7929",
  },
  {
    image:
      "https://rukminim2.flixcart.com/image/170/170/xif0q/projector/k/f/0/zeb-pixaplay-22-green-16-zeb-pixaplay-22-green-led-zebronics-original-imagpqgasyrg2gzv.jpeg?q=80",
    alt: "thisimage4",
    title: "Projectors",
    price: "From ₹9999",
  },
];

export default Electronics;
