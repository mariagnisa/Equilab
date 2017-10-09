import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GooglePlay from '../assets/img/google-play-badge.png';
import '../style/Footer.css';

class Footer extends Component {
  render() {
    //todo use redux or change routes structure
    function footerLinks() {
      if (window.location.href === 'http://localhost:3000/hiring') {
        return <div className="footer">
          <div className="links">
            <img className="app-logo link" src={GooglePlay} alt="Appstore"/>
            <img className="app-logo link" src={GooglePlay} alt="Google play"/>
            <Link className="link_grow" to={`/faq`}>
              FAQ
            </Link>
          </div>
        </div>
      } else if (window.location.href === 'http://localhost:3000/faq') {
        return <div className="footer">
          <div className="links">
            <img className="app-logo link" src={GooglePlay} alt="Appstore"/>
            <img className="app-logo link" src={GooglePlay} alt="Google play"/>
            <Link className="link_grow" to={`/hiring`}>
              HIRING
            </Link>
          </div>
        </div>
      } else if (window.location.href === 'http://localhost:3000/') {
        return <div className="footer_home">
          <div className="home_links">
            <img className="app-logo" src={GooglePlay} alt="Appstore"/>

            <img className="app-logo" src={GooglePlay} alt="Google play"/>
            <Link to={`/faq`}>
              FAQ
            </Link>
          </div>
        </div>
      }
      return <div className="footer">
        <div className="links">
          <img className="app-logo" src={GooglePlay} alt="Appstore"/>
          <img className="app-logo" src={GooglePlay} alt="Google play"/>
          <Link to={`/hiring`}>
            HIRING
          </Link>
          <Link to={`/faq`}>
            FAQ
          </Link>
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
