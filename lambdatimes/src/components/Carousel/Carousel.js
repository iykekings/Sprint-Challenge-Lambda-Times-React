import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: [],
      selected: 0
    };
  }
  componentDidMount() {
    this.setState({ carousel: carouselData });
  }

  leftClick = () => {
    const csLen = this.state.carousel.length - 1;
    const current = this.state.selected === 0 ? csLen : this.state.selected - 1;
    this.setState({ selected: current });
  };

  rightClick = () => {
    const csLen = this.state.carousel.length - 1;
    const current = this.state.selected === csLen ? 0 : this.state.selected + 1;
    this.setState({ selected: current });
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.carousel[this.state.selected]}
        style={{ display: 'block' }}
        alt="Carousel"
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {'<'}
        </div>
        <div className="right-button" onClick={this.rightClick}>
          {'>'}
        </div>
        <this.selectedImage />
      </div>
    );
  }
}
