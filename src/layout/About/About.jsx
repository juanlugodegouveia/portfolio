import React from "react";
import "../../sass/main.scss";

const About = () => (

    <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                About Me
            </h2>
        </div>

        <div className="row">
            <div className="col-1-of-2">
                <p className="paragraph">
                    {/* I am Juan Carlos Lugo, a web developer  focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers. I enjoy creating beautifully designed, intuitive and functional websites.  */}
                    I’m Juan Carlos Lugo, a hard working and dedicated professional Front-End Developer with a keen eye for detail, and a determination to deliver the very highest quality, focused on crafting great web experiences. 
                    <br/><br/>
                    Designing and Coding have been my passion since the days I started working with computers. I enjoy creating beautifully designed, intuitive and functional websites.
                </p>

                <a href="#" className="btn-text">Download Resume &rarr;</a>
            </div>

            <div className="col-1-of-2">
                <div className="about__icon">
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-css3"></i>
                    <i className="fab fa-sass"></i>
                    <i className="fab fa-gulp"></i>
                    <i className="fab fa-bootstrap"></i>
                    <i className="fab fa-js-square"></i>
                    <i className="fab fa-react"></i>
                    <i className="fab fa-wordpress-simple"></i>
                </div>
            </div>

            {/* <div className="col-1-of-4">
                <div className="about__icon">
                    <i class="fab fa-bootstrap"></i>
                    <i class="fab fa-js-square"></i>
                    <i class="fab fa-react"></i>
                    <i class="fab fa-wordpress-simple"></i>
                </div>
            </div> */}
        </div>
    </section>
);

export default About;
