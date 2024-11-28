import React from "react";
import Slider from "react-slick";
import './SimpleSlider.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../../img/slide1-home.jpg';
import slide2 from '../../img/slide2-home.jpg';


const SimpleSlider = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500
      };

    const slides = [slide1, slide2]; // Datos dinámicos para las diapositivas

    return (
        <Slider className="image__container" {...settings}>
            {slides.map((slide, index) => (
                <div className="image__container"  key={index}>
                    <img className="gallery__img" src={slide} alt="" />
                </div>
            ))}
        </Slider>
    );
};

export default SimpleSlider;