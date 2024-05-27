import React from 'react';
import ServicesHero from '../../../components/ServiceHeroSection/ServicesHeroItem';
import servicesData from '../../ServicesData/ServicesData.json';
import './EatingDisordersHero.css'
import { useLanguage } from './../../LanguageContext/LanguageContext';

const EatingDisordersHero = () => {
    const servicioEatingDisorders = servicesData['trastornos-de-conducta-alimentaria'];
    const { language } = useLanguage()

    return (
        <div>
            <ServicesHero service={servicioEatingDisorders} />
            <div className="service-links">
                <a href="#">Anorexia</a>
                <a href="#">Bulimia</a>
                <a href="#">Trastorno por atracón</a>
                <a href="#">Otros Trastornos de la Conducta Alimetaria (TCA)</a>
            </div>
        </div>
    );
};

export default EatingDisordersHero;

