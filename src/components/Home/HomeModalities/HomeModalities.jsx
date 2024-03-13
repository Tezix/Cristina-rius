import React from 'react';
import './HomeModalities.css';
import ModalitiesCard from '../../ModalitiesCard/ModalitiesCard';

const HomeModalities = () => {
    return (
        <div className='modalities'>
            <h1 className='modalities-title'>Modalidades y precio</h1>
            <div className='modalities-cards'>
                <ModalitiesCard
                    modalidad="presencial"
                    title="Presencial"
                    description="Te ofreceré un entorno cómodo y confidencial donde te brindaré apoyo personalizado para superar desafíos y  metas emocionales en el gabinete de Valencia."
                />
                <ModalitiesCard
                    modalidad="online"
                    title="Online"
                    description="Te brindaré apoyo terapéutico desde la comodidad de tu hogar o cualquier lugar con conexión a internet. Te guía de manera personalizada hacia tus metas."
                />
            </div>
        </div>
    );
};

export default HomeModalities;
