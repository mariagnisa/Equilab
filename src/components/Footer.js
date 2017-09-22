import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-link">
          <Link to={`/faq`}>
            FAQ
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
