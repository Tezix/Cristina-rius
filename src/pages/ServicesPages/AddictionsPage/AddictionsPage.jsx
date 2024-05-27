import React from 'react';
import AddictionsHero from '../../../components/Addictions/AddictionsHero/AddictionsHero';
import AddictionsSymptoms from '../../../components/Addictions/AddictionsSymptoms/AddictionsSymptoms';
import AddictionsTypes from '../../../components/Addictions/AddictionsTypes/AddictionsTypes';
import ModalitiesSection from '../../../components/ModalitiesCard/ModalitiesSection';
import AddictionsFaq from '../../../components/Addictions/AddictionsFaq/AddictionsFaq';
import ContactCard from '../../../components/ContactCard/ContactCard';
import Footer from '../../../components/Footer/Footer';


const AddictionsPage = () => {
    return (
        <>
            <AddictionsHero />
            <AddictionsSymptoms />
            <AddictionsTypes />
            <ModalitiesSection />
            <AddictionsFaq />
            <ContactCard />
            <Footer />

        </>
    );
}

export default AddictionsPage; 
