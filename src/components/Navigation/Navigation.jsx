import React from "react";
import "../../sass/main.scss";

const Navigation = () => {

return (
    <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
        <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link">Home</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">About Me</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Portfolio</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Contact Me</a></li>
                </ul>
        </nav>

        <div className="navigation__social navigation__social--animated">
            <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/?hl=es" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="https://es.linkedin.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i></a>
        </div>
    </div>
)};

export default Navigation;
