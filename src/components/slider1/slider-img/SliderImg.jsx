import React from 'react';

class SliderImg extends React.Component {

  render() {
    return (
        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src={this.props.#} style={{ width: 100 }} />
            <div className="text">Caption Text</div>
          </div>
        </div>
    );
  }
}

export default SliderImg;