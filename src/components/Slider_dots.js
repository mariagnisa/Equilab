import React, { Component } from 'react';

class SliderDots extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const i = this.props.index;
    return (
      <div className="dots d-flex">
        <div className={"dot" + (i === 0 ? 'small' : '')}></div>
        <div className={"dot" + (i === 1 ? 'small' : '')}></div>
        <div className={"dot" + (i === 2 ? 'small' : '')}></div>
        <div className={"dot" + (i === 3 ? 'small' : '')}></div>
      </div>
    );
  }
}

export default SliderDots;
