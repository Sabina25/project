import React from 'react';
import { Parallax } from 'react-parallax';
import './ParallaxView.css';

const ParallaxView = () => {
  return (
    <div style={{ margin: '1em' }}>
      <div>
        {/* -----custom background element-----*/}
        <Parallax strength={300}>
          <div style={{ height: '10em' }}></div>
        </Parallax>

        {/* -----dynamic blur-----*/}
        <Parallax
          blur={{ min: -20, max: 40 }}
          bgImage={require('../../image/slider/slide_1.jpg')}
          bgImageAlt="2"
          strength={-200}
          className="img-block"
        >
          <div style={{ color: 'white' }}></div>
          <div style={{ height: '700px' }} />
        </Parallax>

        <Parallax strength={300}>
          <div style={{ height: '10em' }}></div>
        </Parallax>

        {/* -----renderProp: "renderLayer"-----*/}
        <Parallax
          blur={{ min: -15, max: 40 }}
          bgImage={require('../../image/slider/slide_3.jpg')}
          strength={400}
          renderLayer={() => <div style={{ height: '700px' }} />}
        ></Parallax>
      </div>
    </div>
  );
};

export default ParallaxView;
