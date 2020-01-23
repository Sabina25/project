import React from 'react';
import './slider.css';
import slid1 from '../../images/slider/slid_1.jpg';
import slid2 from '../../images/slider/slid_2.jpg';
import slid3 from '../../images/slider/slid_3.jpg';
import slid4 from '../../images/slider/slide_4.jpg';
import slid5 from '../../images/slider/slide_5.jpg';


class Slider extends React.Component {

  constructor () {
    super ();

    this.state = {
      images: [slid1, slid2, slid3, slid4, slid5],
      currentImageIndex: 0,
      isCycleMode: false,
      
    };

    this.nextSlidHandler = this.nextSlidHandler.bind(this);
    this.showSlider = this.showSlider.bind(this);
  };




  nextSlidHandler (e) {
    let newIndex = this.state.currentImageIndex;

    if (e.currentTarget.dataset.directione === 'next') {
      
      if(newIndex < this.state.images.length-1) {
        newIndex = this.state.currentImageIndex + 1;
      }
      
    } else {
      if (newIndex > 0) {
        newIndex = this.state.currentImageIndex - 1;
      }
    }

    this.setState({currentImageIndex: newIndex})
  }  

  render() {
    return (
      <div className="slideshow-container">
        <div className="prev" data-directione="prev" onClick={this.nextSlidHandler.bind(this)}>
          &#10094;
        </div>
        
        <div className="next" data-directione="next" onClick={this.nextSlidHandler.bind(this)}>
          &#10095;
        </div>


        <div className="mySlider">
          <img src={this.state.images[this.state.currentImageIndex]} alt="slid"/> 
          {this.state.currentImageIndex}
        </div>

        <div style={{ textAlign: 'center' }}>
          <span className="dot" onClick="currentSlide(1)"></span>
          <span className="dot" onclick="currentSlide(2)"></span>
          <span className="dot" onclick="currentSlide(3)"></span>
        </div>
      </div>
    );
  }
}

export default Slider;