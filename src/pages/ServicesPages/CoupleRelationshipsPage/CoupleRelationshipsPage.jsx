import React from 'react';
import CoupleRelationshipsHero from '../../../components/CoupleRelationships/CoupleRelationshipsHero/CoupleRelationshipsHero';
import CoupleRelationshipsSymptons from '../../../components/CoupleRelationships/CoupleRelationshipsSymptoms/CoupleRelationshipsSymptoms';
import CoupleRelationshipsTypes from '../../../components/CoupleRelationships/CoupleRelationshipsTypes/CoupleRelationshipsTypes';
import ModalitiesSection from '../../../components/ModalitiesCard/ModalitiesSection';
import CoupleRelationshipsFaq from '../../../components/CoupleRelationships/CoupleRelationshipsFaq/CoupleRelationshipsFaq';
import ContactCard from '../../../components/ContactCard/ContactCard';
import Footer from '../../../components/Footer/Footer';

const CoupleRelationshipsPage = () => {
    return (
        <>
            <CoupleRelationshipsHero />
            <CoupleRelationshipsSymptons />
            <CoupleRelationshipsTypes />
            <ModalitiesSection />
            <CoupleRelationshipsFaq />
            <ContactCard />
            <Footer />
        </>
    );
}

export default CoupleRelationshipsPage; 
