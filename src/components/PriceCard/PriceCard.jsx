import React from 'react';
import "./priceCard.css";

const PriceCard = ({ price, title, information, icon }) => {
    return (
        <div className="priceCard">
            <h3>{title}</h3>
            <p>
                {information}
            </p>
            <span>{price}</span>
            <div className="icon">
                {icon}
            </div>
        </div>
    )
}

export default PriceCard