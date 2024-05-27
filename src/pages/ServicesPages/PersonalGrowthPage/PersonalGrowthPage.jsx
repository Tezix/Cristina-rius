import React from 'react';
import PersonalGrowthHero from '../../../components/PersonalGrowth/PersonalGrowthHero/PersonalGrowthHero';
import PersonalGrowthSymptoms from '../../../components/PersonalGrowth/PersonalGrowthSymptoms/PersonalGrowthSymptoms';
import PersonalGrowthTypes from '../../../components/PersonalGrowth/PersonalGrowthTypes/PersonalGrowthTypes';
import ModalitiesSection from '../../../components/ModalitiesCard/ModalitiesSection';
import PersonalGrowthFaq from '../../../components/PersonalGrowth/PersonalGrowthFaq/PersonalGrowthFaq';
import ContactCard from '../../../components/ContactCard/ContactCard';
import Footer from '../../../components/Footer/Footer';

const PersonalGrowthPage = () => {
    return (
        <>
            <PersonalGrowthHero />
            <PersonalGrowthSymptoms />
            <PersonalGrowthTypes />
            <ModalitiesSection />
            <PersonalGrowthFaq />
            <ContactCard />
            <Footer />

        </>
    );
}

export default PersonalGrowthPage; 
