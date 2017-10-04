import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GooglePlay from '../assets/img/google-play-badge.png';
import '../style/Footer.css';

class Footer extends Component {
  render() {
    //todo use redux or change routes structure
    function footerLinks() {
      if (window.location.href === 'http://localhost:3000/hiring') {
        return <div>
          <Link to={`/`}>
            <img className="app-logo" src={GooglePlay} alt="Appstore"/>
          </Link>
          <Link to={`/`}>
            <img className="app-logo" src={GooglePlay} alt="Google play"/>
          </Link>
          <Link to={`/faq`}>
            FAQ
          </Link>
        </div>
      } else if (window.location.href === 'http://localhost:3000/faq') {
        return <div>
          <Link to={`/`}>
            <img className="app-logo" src={GooglePlay} alt="Appstore"/>
          </Link>
          <Link to={`/`}>
            <img className="app-logo" src={GooglePlay} alt="Google play"/>
          </Link>
          <Link to={`/hiring`}>
            HIRING
          </Link>
        </div>
      } 
        return <div>
          <Link to={`/`}>
            <img className="app-logo" src={GooglePlay} alt="Appstore"/>
          </Link>
          <Link to={`/`}>
            <img className="app-logo" src={GooglePlay} alt="Google play"/>
          </Link>
          <Link to={`/faq`}>
            FAQ
          </Link>
          <Link to={`/hiring`}>
            HIRING
          </Link>
        </div>

    }

    return (
      <div className="footer">
          {footerLinks()}
      </div>
    );
  }
}

export default Footer;
