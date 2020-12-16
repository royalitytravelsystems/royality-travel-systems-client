import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Slide1 from './../../../assets/images/Slide1.jpg';
import Slide2 from './../../../assets/images/Slide2.jpg';
import Slide3 from './../../../assets/images/Slide3.jpg';
import TEXT from '../message.json';

const CarousalComponent = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={props.className} interval={50000}>
      <Carousel.Item>
        <img
            className="d-block w-100"
            src={Slide1}
            alt="Second slide"
          />
        <Carousel.Caption>
          <div className="banner-text">
            <h3>{TEXT.CAROUSAL.SLIDE_1.TEXT}</h3>
            <p>{TEXT.CAROUSAL.SLIDE_1.DESC}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide2}
          alt="Second slide"
        />
        <div className="photo-copyright">
            Photo by
              <a href={TEXT.CAROUSAL.SLIDE_2.PHOTO_CREDIT}>{TEXT.CAROUSAL.SLIDE_2.PHOTO_AUTHOR}</a>
              on <a href={TEXT.CAROUSAL.SLIDE_2.PHOTO_SOURCE}>{TEXT.CAROUSAL.SLIDE_2.PHOTO_SOURCE_NAME}</a>
          </div>
        <Carousel.Caption>
          <div className="banner-text">
            <h3>{TEXT.CAROUSAL.SLIDE_2.TEXT}</h3>
            <p>{TEXT.CAROUSAL.SLIDE_2.DESC}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide3}
          alt="Third slide"
        />
      <div className="photo-copyright">
            Photo by
              <a href={TEXT.CAROUSAL.SLIDE_3.PHOTO_CREDIT}>{TEXT.CAROUSAL.SLIDE_3.PHOTO_AUTHOR}</a>
              on <a href={TEXT.CAROUSAL.SLIDE_3.PHOTO_SOURCE}>{TEXT.CAROUSAL.SLIDE_3.PHOTO_SOURCE_NAME}</a>
          </div>
        <Carousel.Caption>
          <div className="banner-text">
            <h3>{TEXT.CAROUSAL.SLIDE_3.TEXT}</h3>
            <p>{TEXT.CAROUSAL.SLIDE_3.DESC}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

CarousalComponent.propTypes = {
  className: PropTypes.string,
};
export default CarousalComponent;
