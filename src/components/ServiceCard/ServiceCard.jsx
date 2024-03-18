import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, backgroundImage }) => {
    const cardStyle = {
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none'
    };

    return (
        <div className='service-card-container'>
            <div className="service-card" style={cardStyle}>
            </div>
            <div className='service-card-content'>
                <h3>{title}</h3>
            </div>
        </div>

    );
}

export default ServiceCard;
