import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/App.css';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to={`/`}>
          <img className="header-logo" src="../assets/img/logo.png" alt="Equilab"/>
        </Link>
      </div>
    );
  }
}

export default Header;
