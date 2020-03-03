import React from 'react';
import '../../sass/main.scss';

import Logo from "../../img/JL_LOGO_WHITE.png";

const Header = () => (
  <header className="header">

    <div className="header__logo-box">
      <img src={Logo} alt="Logo" className="header__logo header__logo--animated" />
    </div>
    
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">Front-End <br/> Web Developer</span>
        <span className="heading-primary--sub">making things that make a difference</span>
      </h1>
    </div>

      <a href="#section-tours" className="btn btn--white btn--animated">
        Quote Request
      </a>

      
  </header>
);

export default Header;

