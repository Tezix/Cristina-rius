import React from 'react';
import './ModalitiesCard.css';

const modalidadesImagenes = {
    presencial: '/images/photo-presential.JPG',
    online: '/images/photo-online.jpg',
};

const ModalitiesCard = ({ modalidad, title, description }) => {
    const imageSrc = modalidadesImagenes[modalidad];

    return (
        <div className="card">
            <div className="card-image">
                <img src={imageSrc} alt={modalidad} />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">55€ la sesión de una hora</p>
                <a href="/contacto">Contactar</a>
            </div>
        </div>
    );
};

export default ModalitiesCard;
