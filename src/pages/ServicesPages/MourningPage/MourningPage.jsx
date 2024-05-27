import React from 'react';
import MourningHero from '../../../components/Mourning/MourningHero/MourningHero';
import MourningSymptons from '../../../components/Mourning/MourningSymtoms/MourningSymtoms';
import MourningTypes from '../../../components/Mourning/MourningTypes/MourningTypes';
import ContactCard from '../../../components/ContactCard/ContactCard';
import ModalitiesSection from '../../../components/ModalitiesCard/ModalitiesSection';
import MourningFaq from '../../../components/Mourning/MourningFaq/MourningFaq';
import Footer from '../../../components/Footer/Footer';

const MourningPage = () => {
    return (
        <>
            <MourningHero />
            <MourningSymptons />
            <MourningTypes />
            <ModalitiesSection />
            <MourningFaq />
            <ContactCard />
            <Footer />
        </>
    );
}

export default MourningPage; 
