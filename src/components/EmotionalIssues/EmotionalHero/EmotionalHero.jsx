import React from 'react';
import ServicesHero from '../../../components/ServiceHeroSection/ServicesHeroItem';
import servicesData from '../../ServicesData/ServicesData.json';
import './EmotionalHero.css'
import { useLanguage } from './../../LanguageContext/LanguageContext';

const EmotionalHero = () => {
    const servicioProblemasEmocionales = servicesData['problemas-emocionales'];
    const { language } = useLanguage()

    return (
        <div>
            <ServicesHero service={servicioProblemasEmocionales} />
            <div className="service-links">
                <a href="#">Ansiedad</a>
                <a href="#">Depresión</a>
                <a href="#">Apatía</a>

            </div>
        </div>
    );
};

export default EmotionalHero;

// const EmotionalHero = () => {
//     const { title, image, definition } = servicesData['problemas-emocionales'];

//     return (
//         <div>
//             <ServicesHero title={title} image={image} definition={definition} />
//             <div className="service-links">
//                 <a href="#">Ansiedad</a>
//                 <a href="#">Depresión</a>
//                 <a href="#">Apatía</a>

//             </div>
//         </div>
//     );
// };