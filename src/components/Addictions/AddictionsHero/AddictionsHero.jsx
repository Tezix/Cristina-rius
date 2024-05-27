import React from 'react';
import ServicesHero from '../../../components/ServiceHeroSection/ServicesHeroItem';
import servicesData from '../../ServicesData/ServicesData.json';
import './AddictionsHero.css'
import { useLanguage } from './../../LanguageContext/LanguageContext';

const AddictionsHero = () => {
    const servicioAddictions = servicesData['adicciones'];
    const { language } = useLanguage()

    return (
        <div>
            <ServicesHero service={servicioAddictions} />
            <div className="service-links">
                <a href="#">Adicción a sustancias</a>
                <a href="#">Adicción al juego</a>
                <a href="#">Adicción al móvil</a>
                <a href="#">Otras adicciones</a>



            </div>
        </div>
    );
};

export default AddictionsHero;
