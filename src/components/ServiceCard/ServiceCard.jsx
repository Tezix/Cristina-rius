import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, backgroundImage }) => {
    const cardStyle = {
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none'
    };

    return (
        <div className="service-card" style={cardStyle}>
            <h3 className='service-card-content'>{title}</h3>
        </div>
    );
}

export default ServiceCard;
