import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './ParallaxView.css';


const ParallaxView = () => {
  return (
    <div style={{ margin: '1em' }}>
      <div>



        {/* -----custom background element-----*/}
        <Parallax strength={300}>
          <div style={{ height: '25em' }}>
            <h1 style={{ fontSize: '10em' }}>Think Different</h1>
          </div>
          <Background className="custom-bg">
            <img
              src="https://cdn.vox-cdn.com/thumbor/WqMY2QINJvS9H0tqdrFBXsg2ghk=/0x86:706x557/1200x800/filters:focal(0x86:706x557)/cdn.vox-cdn.com/imported_assets/847184/stevejobs.png"
              alt="fill murray"
            />
          </Background>
        </Parallax>



        {/* -----dynamic blur-----*/}
        <Parallax
          blur={{ min: -20, max: 40 }}
          bgImage={require('../../images/slider/slid_1.jpg')}
          bgImageAlt="2"
          strength={-200}
          className="img-block"
        >
          <div style={{ color: 'white' }}>
            {/* <h1>Blur transition from min to max</h1>{' '} */}
          </div>
          <div style={{ height: '700px' }} />
        </Parallax>


        <Parallax strength={300}>
          <div style={{ height: '25em' }}>
            <h1 style={{ fontSize: '10em' }}>Think Different</h1>
          </div>
          <Background className="custom-bg">
            <img
              src="https://cdn.vox-cdn.com/thumbor/WqMY2QINJvS9H0tqdrFBXsg2ghk=/0x86:706x557/1200x800/filters:focal(0x86:706x557)/cdn.vox-cdn.com/imported_assets/847184/stevejobs.png"
              alt="fill murray"
            />
          </Background>
        </Parallax>


        {/* -----renderProp: "renderLayer"-----*/}
        <Parallax
          blur={{ min: -15, max: 40 }}
          bgImage={require('../../images/slider/slid_1.jpg')}
          strength={400}
          renderLayer={() => (
            <div style={{ height: '700px' }} />
          )}
        ></Parallax>
      </div>
    </div>
  );
};

export default ParallaxView;