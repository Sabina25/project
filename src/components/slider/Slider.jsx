import React from 'react';
import { Slide } from 'react-slideshow-image';
import slid1 from '../../image/slider/slide_1.jpg';
import slid2 from '../../image/slider/slide_2.jpg';
import slid3 from '../../image/slider/slide_3.jpg';
import slid4 from '../../image/slider/slide_4.jpg';
import slid5 from '../../image/slider/slide_5.jpg';
import './Slider.css';

const slideImages = [slid1, slid2, slid3, slid4, slid5];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

const Slider = () => {
  return (
    <Slide {...properties}>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
          <div>ДОБРО ПОЖАЛОВАТЬ В НАШ РЕСТОРАН!</div>
          
          <span>
            Забронировать столик 
          </span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
      </div>
    </Slide>
  );
};

export default Slider;
