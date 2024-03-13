import React from 'react';
import './HomeAboutMe.css';

const HomeAboutMe = () => {
    return (
        <div className='home-about-section'>
            <div className='white-container'>
                <div className='about-text-column'>
                    <h1>¡Hola! Soy Cristina Rius</h1>
                    <h2>Psicóloga Sanitaria</h2>
                    <p>Estoy aquí para ayudarte a sentirte mejor contigo mismo.</p>
                    <p>Mi <span>enfoque terapéutico</span> integra la terapia sistémica, terapias contextuales y la base cognitivo-conductual. Esta combinación me proporciona herramientas para adaptarme a cada persona.</p>
                    <p>Entiendo la singularidad de cada individuo y sus circunstancias, lo que me permite ofrecer una amplia gama de técnicas, seleccionando las más adecuadas.</p>
                    <p>Mi <span>enfoque centrado en las emociones</span> es valorado por quienes acuden a mi consulta y por quienes me conocen fuera de ella. <span>Comprender y identificar las emociones</span> es fundamental para mí, pues solo así podemos escucharlas y actuar en consecuencia.</p>
                </div>
                <div className='about-image-column'>
                    <img src="/images/fotoAbout.JPG" alt="photo-home-about-section" className='photo-home-about' />
                </div>
            </div>
        </div>


    );
};

export default HomeAboutMe;
