import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink to={`https://itunes.apple.com/se/app/equilab-h%C3%A4sttr%C3%A4ning/id1133163586?mt=8`}>
              <img className="app-logo" src={Applestore} alt="Appstore"/>
            </NavLink>
            <NavLink to={`https://play.google.com/store/apps/details?id=horse.schvung.equilab`}>
              <img className="app-logo" src={GooglePlay} alt="Googlestore"/>
            </NavLink>
            <NavLink to={`/faq`} activeClassName="active">
              FAQ
            </NavLink>
          </div>
        </div>
      }
      return <div className="footer">
        <div className="links">
          <div>
            <NavLink to={`https://itunes.apple.com/se/app/equilab-h%C3%A4sttr%C3%A4ning/id1133163586?mt=8`}>
              <img className="app-logo" src={Applestore} alt="Appstore"/>
            </NavLink>
            <NavLink to={`https://play.google.com/store/apps/details?id=horse.schvung.equilab`}>
              <img className="app-logo" src={GooglePlay} alt="Googlestore"/>
            </NavLink>
          </div>
          <div className="footer-link">
            <NavLink to={`/hiring`} activeClassName="active">
              HIRING
            </NavLink>
            <NavLink to={`/faq`} activeClassName="active">
              FAQ
            </NavLink>
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
