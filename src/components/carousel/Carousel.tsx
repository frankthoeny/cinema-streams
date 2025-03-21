import './Carousel.scss';

import React, { FC, useCallback, useEffect, useState } from 'react';

import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';

interface CarouselProps {
  children: React.ReactNode;
  slideWidth?: number;
}

const Carousel: FC<CarouselProps> = ({ children, slideWidth = 230 }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const numSlides = React.Children.count(children);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const container = document.querySelector(
        ".carousel-container"
      ) as HTMLElement | null;
      if (container) {
        setContainerWidth(container.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (containerWidth > 0) {
      setSlidesToShow(Math.floor(containerWidth / slideWidth));
    }
  }, [containerWidth, slideWidth]);

  const nextSlide = useCallback(() => {
    const maxPosition = (numSlides - slidesToShow) * slideWidth;
    setCurrentPosition((prevPosition) =>
      Math.min(prevPosition + slideWidth, maxPosition)
    );
  }, [slideWidth, numSlides, slidesToShow]);

  const prevSlide = useCallback(() => {
    setCurrentPosition((prevPosition) =>
      Math.max(prevPosition - slideWidth, 0)
    );
  }, [slideWidth]);

  const carouselStyle = {
    transform: `translateX(-${currentPosition}px)`,
    transition: "transform 0.5s ease-in-out",
    width: `${numSlides * slideWidth}px`,
  };

  return (
    <div className="carousel-container">
      <ArrowBackIosOutlined
        className="sliderArrow left"
        onClick={prevSlide}
        style={{ display: currentPosition !== 0 ? "block" : "none" }}
      />
      <div className="carousel" style={carouselStyle}>
        {children}
      </div>
      <ArrowForwardIosOutlined
        className="sliderArrow right"
        onClick={nextSlide}
        style={{
          display:
            currentPosition >= (numSlides - slidesToShow) * slideWidth
              ? "none"
              : "block",
        }}
      />
      <div className="slide-count">
        {Math.floor(currentPosition / slideWidth) + 1} / {numSlides}
      </div>
    </div>
  );
};

export default Carousel;
