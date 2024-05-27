import React from 'react';
import ServicesHero from '../../../components/ServiceHeroSection/ServicesHeroItem';
import servicesData from '../../ServicesData/ServicesData.json';
import './PersonalGrowthHero.css'
import { useLanguage } from './../../LanguageContext/LanguageContext';

const PersonalGrowthHero = () => {
    const servicioPersonalGrowth = servicesData['crecimiento-personal'];
    const { language } = useLanguage()

    return (
        <div>
            <ServicesHero service={servicioPersonalGrowth} />
            <div className="service-links">
                <a href="#">Atoestima</a>
                <a href="#">Cambios vitales</a>

            </div>
        </div>
    );
};

export default PersonalGrowthHero;
