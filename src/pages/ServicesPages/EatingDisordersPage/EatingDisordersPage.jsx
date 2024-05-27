
import React from 'react';
import EatingDisordersHero from '../../../components/EatingDisorders/EatingDisordersHero/EatingDisordersHero';
import EatingDisordersSymptons from '../../../components/EatingDisorders/EatingDisordersSymtoms/EatingDisordersSymtoms';
import EatingDisordersTypes from '../../../components/EatingDisorders/EatingDisordersTypes/EatingDisordersTypes';
import ModalitiesSection from '../../../components/ModalitiesCard/ModalitiesSection';
import EatingDisordersFaq from '../../../components/EatingDisorders/EatingDisordersFaq/EatingDisordersFaq';
import ContactCard from '../../../components/ContactCard/ContactCard';
import Footer from '../../../components/Footer/Footer';

const EatingDisordersPage = () => {
    return (
        <>
            <EatingDisordersHero />
            <EatingDisordersSymptons />
            <EatingDisordersTypes />
            <ModalitiesSection />
            <EatingDisordersFaq />
            <ContactCard />
            <Footer />
        </>
    );
}

export default EatingDisordersPage; 
