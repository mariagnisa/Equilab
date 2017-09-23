import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GooglePlay from '../assets/img/google-play-badge.png';
import '../style/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="">
          <Link to={`/`}>
            <img className="app-logo" src={GooglePlay} alt="Appstore"/>
          </Link>
          <Link to={`/`}>
            <img className="app-logo" src={GooglePlay} alt="Google play"/>
          </Link>
          <Link to={`/hiring`}>
            HIRING
          </Link>
          <Link to={`/faq`}>
            FAQ
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
