import React from 'react';
import './slider.css'
import { Slide } from 'react-slideshow-image';
import slid1 from '../../images/slider/slid_1.jpg';
import slid2 from '../../images/slider/slid_2.jpg';
import slid3 from '../../images/slider/slid_3.jpg';
import slid4 from '../../images/slider/slide_4.jpg';
import slid5 from '../../images/slider/slide_5.jpg';


const slideImages = [
  slid1,
  slid2,
  slid3,
  slid4,
  slid5
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>  
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            <span>Slide 4</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
            <span>Slide 5</span>
          </div>
        </div>
      </Slide>
    )
}

export default Slideshow;