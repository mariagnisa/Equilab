import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GooglePlay from '../assets/img/google-play-badge.png';
import Applestore from '../assets/img/apple_download.png';
import Gif from '../assets/img/swipe_animation.gif';
import '../style/Footer.css';

class Footer extends Component {
  render() {
    //todo use redux or change routes structure
    function footerLinks() {
      if (window.location.href === 'http://localhost:3000/') {
        return <div className="footer-home">
          <div className="home-links">
            <div className="swipe-gif">
            <img src={Gif} alt="swipe gif"/>
            </div>
            <Link to={`/`}>
              <img className="app-logo" src={Applestore} alt="Appstore"/>
            </Link>
            <Link to={`/`}>
              <img className="app-logo" src={GooglePlay} alt="Googlestore"/>
            </Link>
            <Link to={`/faq`}>
              FAQ
            </Link>
          </div>
        </div>
      }
      return <div className="footer">
        <div className="links">
          <div>
            <Link to={`/`}>
              <img className="app-logo" src={Applestore} alt="Appstore"/>
            </Link>
            <Link to={`/`}>
              <img className="app-logo" src={GooglePlay} alt="Googlestore"/>
            </Link>
          </div>
          <div className="footer-link">
            <Link to={`/hiring`}>
              HIRING
            </Link>
            <Link to={`/faq`}>
              FAQ
            </Link>
          </div>
        </div>
      </div>

    }

    return (
      <div>
        {footerLinks()}
      </div>
    );
  }
}

export default Footer;
