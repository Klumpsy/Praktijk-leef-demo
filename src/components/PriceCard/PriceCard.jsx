import React from 'react';
import "./priceCard.css";

const PriceCard = ({ price, title, information, icon, link, linkText, link2, link2Text }) => {
    return (
        <div className="priceCard">
            <h3>{title}</h3>
            <p>
                {information}
            </p>
            <a href={link} target="_blank">{linkText}</a>
            <a href={`tel:+31${link2}`}>{link2Text}</a>
            <span>{price}</span>
            <div className="icon">
                {icon}
            </div>
        </div >
    )
}

export default PriceCard