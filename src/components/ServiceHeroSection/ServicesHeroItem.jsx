import React from 'react';
import './ServicesHeroItem.css';

const ServicesHero = ({ service }) => {
    const { title, image, definition, symptoms } = service;


    return (
        <div className="service-hero">
            <div className="service-info">
                <h3>servicios</h3>
                <h1>{title}</h1>
                <p className='definition'>{definition}</p>
                <div className="service-links">
                    <a href="#">Ansiedad</a>
                    <a href="#">Depresión</a>
                </div>
                {/* <h4>Síntomas:</h4>
                <p>{symptoms}</p>  */}
            </div>
            <div className="service-image">
                <img src={image} alt={title} />
            </div>
        </div>
    );
};

export default ServicesHero;

