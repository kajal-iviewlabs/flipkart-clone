import "./ImageSlider.css";

const ImageSlider = () => {
  return (
    <div className="imageSliderContainer">
      <div className="imageSliderList">
        <button>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <div className="imageSliderList">
        <div className="imageSliderItem">
          {/* <img src="https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/aa1b2bdcf519b468.jpg?q=20" /> */}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
