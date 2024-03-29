import React from 'react';
import './ServicesHeroItem.css';

const ServicesHero = ({ service }) => {
    const { title, image, definition } = service;


    return (
        <div className="service-hero">
            <div className="service-info">
                <h3>servicios</h3>
                <h1>{title}</h1>
                <p className='definition'>{definition}</p>
            </div>
            <div className="service-image">
                <img src={image} alt={title} />
            </div>
        </div>
    );
};
export default ServicesHero;




