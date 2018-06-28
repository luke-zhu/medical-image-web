import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//ReactDOM.render(
  //<Carousel />,
  //document.getElementById('container')
//);

const imgUrls = [
	require('./images/cincinnati_prehospital_stroke.jpg'), 
	require('./images/occluded_middle_cerebral_artery.jpg'), 
	require('./images/regional_leptomeningeal.jpg')
	];

const ImageSlide = ({ url }) => {
  return (
    //<div className="image-slide" style={styles}></div>
    <img src={url} alt='Examples of ELVO CT scans' height='300' width='500'/>
  );
}

const Arrow = ({ direction, clickFunction, glyph }) => (
  <span
    className={ `slide-arrow ${direction}` }
    onClick={ clickFunction }>
    { glyph }
  </span>
);

class Carousel extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render () {
    return (
      <div className="carousel">

      	<Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;" />

      	<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />

      	<Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;" />

      </div>
    );
  }
}

export default Carousel;