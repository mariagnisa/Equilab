import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import stylesheet and image
import '../style/Header.css';
import logo from '../assets/img/logo.png';

class Header extends Component {
  render() {

    function headerLinks() {
      // if (window.location.href === 'http://localhost:3000/') {
      if (window.location.href === 'https://wu16.nu/') {
        return <div className="home-header">
          <Link to={`/`}>
            <img className="home-logo" src={logo} alt="Equilab"/>
          </Link>
        </div>
      }
      return <div className="d-flex justify-content-end justify-content-sm-start">
        <Link to={`/`}>
          <img className="header-logo" src={logo} alt="Equilab"/>
        </Link>
      </div>
    }
    return (
      <div>
        {headerLinks()}
      </div>
    );
  }
}

export default Header;
