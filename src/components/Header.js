import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import logo from '../assets/img/logo.png';

class Header extends Component {
  render() {
    return (
      <div>
        <div className=" d-flex justify-content-start">
          <Link to={`/`}>
            <img className="header-logo" src={logo} alt="Equilab"/>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
