import React, { Component } from 'react';

//import components
import PhoneAnimation from '../assets/img/3.gif';
import SliderData from '../data/slider.json';
import SliderList from './Slider_list';
import SliderDots from './Slider_dots';

//import stylesheet
import '../style/Slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);

    const data = SliderData.map((slides) => {
      return slides;
    });
    //Set state to json data
    this.state = { slides: data, index: 0 };
    // console.log(this.state);
  }

  handleChangeIndex (index, fromIndex) {
    this.setState({
      index: index
    });
  }

  render() {
    // console.log(this.state);
    return (
        <div className="slider container d-flex flex-column">
          <img className="phoneAnimation ml-auto mr-auto" src={PhoneAnimation} alt=""/>
          <div className="slider-texts">
            <SliderList slides={this.state.slides}
              index={this.state.index}
              onChangeIndex={(index) => this.handleChangeIndex(index)} />
          </div>
          <SliderDots index={this.state.index} />
        </div>
    );
  }
}

export default Slider;
