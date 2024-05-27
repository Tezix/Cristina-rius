import React from 'react';
import ServicesHero from '../../../components/ServiceHeroSection/ServicesHeroItem';
import servicesData from '../../ServicesData/ServicesData.json';
import './MourningHero.css'
import { useLanguage } from './../../LanguageContext/LanguageContext';

const MourningHero = () => {
    const servicioMourning = servicesData['duelo'];
    const { language } = useLanguage()

    return (
        <div>
            <ServicesHero service={servicioMourning} />
            <div className="service-links">
                <a href="#">Duelo por fallecimiento</a>
            </div>
        </div>
    );
};

export default MourningHero;
