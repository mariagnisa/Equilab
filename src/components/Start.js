import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import EventListener, {withOptions} from 'react-event-listener';
import BodyClassName from 'react-body-classname';
import ScrollToTopOnMount from './Scroll_to_top_on_mount';

import Slogan from './Slogan';
import About from './About';
import Slider from './Slider';
import backgroundHomeImage from '../assets/img/background_mobile_home.png';
import backgroundAboutImage from '../assets/img/background_mobile_information.png';

import '../style/Start.css';


class Start extends Component {
  handleScroll = () => {
    console.log(this.context.router.history.location.pathname);
    this.context.router.history.push('/about');
    // <Redirect to="/about" />
  };

  componentDidMount() {
    document.body.style.background = 'url(' + backgroundHomeImage + ')';
  }

  componentWillUnmount() {
    document.body.style.background = 'url(' + backgroundAboutImage + ')';
  }

  render() {
    return (
      <div>
        <ScrollToTopOnMount />
        <EventListener
          target="window"
          onResize={this.handleResize}
          onScroll={withOptions(this.handleScroll, {passive: true, capture: false})}
        />
        <BodyClassName className="start-background">
          <div className="start-container">
            <div className="start">
              <Slogan />
            </div>
          </div>
        </BodyClassName>
        <EventListener target={document}
          onMouseMoveCapture={this.handleMouseMove} />
      </div>
    );
  }
}

Start.contextTypes = {
  router: PropTypes.object
}

export default Start;
