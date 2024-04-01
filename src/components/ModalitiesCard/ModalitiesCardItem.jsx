import React from 'react';
import './ModalitiesCardItem.css';

const ModalitiesCardItem = ({ title, description, image, price }) => {
    return (
        <div className='modalities-card'>
            <div className='card-image'>
                <img src={image} alt="photo-modalities" />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h2>{title}</h2>
                </div>
                <div className='card-description'>
                    <p>{description}</p>
                </div>
                <div className='card-price'>
                    <p>{price}</p>
                </div>
                <div className='card-contact'>
                    <a href="#">Contactar</a>
                </div>
            </div>
        </div>
    );
};

export default ModalitiesCardItem;
