import React from "react";
import "../../sass/main.scss";

const Featurebox = ({title, description,icon}) => (
            <div className="feature-box">
                <i className={icon}></i>
                <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
                <p className="feature-box__text">
                    {description}
                </p>
            </div>
);

export default Featurebox;
