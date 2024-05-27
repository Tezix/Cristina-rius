import React from 'react';
import ServicesHero from '../../../components/ServiceHeroSection/ServicesHeroItem';
import servicesData from '../../ServicesData/ServicesData.json';
import './CoupleRelationshipsHero.css'
import { useLanguage } from './../../LanguageContext/LanguageContext';

const CoupleRelationshipsHero = () => {
    const servicioCoupleRelationships = servicesData['relaciones-de-pareja'];
    const { language } = useLanguage()

    return (
        <div>
            <ServicesHero service={servicioCoupleRelationships} />
            <div className="service-links">
                <a href="#">Problemas por ruptura</a>
            </div>
        </div>
    );
};

export default CoupleRelationshipsHero;
