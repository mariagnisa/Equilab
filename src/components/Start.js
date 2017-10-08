import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import EventListener, {withOptions} from 'react-event-listener';
import BodyClassName from 'react-body-classname';

import Slogan from './Slogan';
// import About from './About';
// import Slider from './Slider';

import '../style/Start.css';

class Start extends Component {

  handleScroll = () => {
    this.context.router.history.push('/about');
  };


  render() {
    return (
      <div>
        <EventListener
          target="window"
          onResize={this.handleResize}
          onScroll={withOptions(this.handleScroll, {passive: true, capture: false})}
        />
        <BodyClassName className="start-background">
          <div className="start">
            <Slogan />
          </div>
        </BodyClassName>
        <EventListener target={document} onMouseMoveCapture={this.handleMouseMove} />
      </div>
    );
  }
}

Start.contextTypes = {
  router: PropTypes.object
}

export default Start;
