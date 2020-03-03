import React from "react";
import "../../sass/main.scss";

const Features = () => (
    <section className="section-features">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                Services
        </h2>
        </div>
        <div className="row">      
            {/* CARD 1 */}
            <div className="col-1-of-3">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture--1">
                            &nbsp;
                    </div>

                        <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--1">Web Design</span>
                        </h4>

                        <div className="card__details">
                            <ul>
                                <li>3 day</li>
                                <li>Up to 30 people</li>
                                <li>2 tour guides</li>
                                <li>Sleep in cozy hotels</li>
                                <li>Difficulty: Easy</li>
                            </ul>
                        </div>

                    </div>

                    <div className="card__side card__side--back card__side--back-1">
                        <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">Only</p>
                                <p className="card__price-value">$297</p>
                            </div>
                            <a href="#popup" className="btn btn--white">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD 2 */}
            <div className="col-1-of-3">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture--2">
                            &nbsp;
                    </div>

                        <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--1">Web Development</span>
                        </h4>

                        <div className="card__details">
                            <ul>
                                <li>3 day</li>
                                <li>Up to 30 people</li>
                                <li>2 tour guides</li>
                                <li>Sleep in cozy hotels</li>
                                <li>Difficulty: Easy</li>
                            </ul>
                        </div>

                    </div>

                    <div className="card__side card__side--back card__side--back-1">
                        <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">Only</p>
                                <p className="card__price-value">$297</p>
                            </div>
                            <a href="#popup" className="btn btn--white">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* CARD 3 */}
            <div className="col-1-of-3">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture--3">
                            &nbsp;
                    </div>

                        <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--1">Digital Marketing</span>
                        </h4>

                        <div className="card__details">
                            <ul>
                                <li>3 day</li>
                                <li>Up to 30 people</li>
                                <li>2 tour guides</li>
                                <li>Sleep in cozy hotels</li>
                                <li>Difficulty: Easy</li>
                            </ul>
                        </div>

                    </div>

                    <div className="card__side card__side--back card__side--back-1">
                        <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">Only</p>
                                <p className="card__price-value">$297</p>
                            </div>
                            <a href="#popup" className="btn btn--white">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Features;
