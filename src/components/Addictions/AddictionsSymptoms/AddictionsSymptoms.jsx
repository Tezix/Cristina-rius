import React from 'react';
import ServicesSymptoms from '../../ServiceSymptomsSection/ServiceSymptomsItem';
import servicesData from '../../ServicesData/ServicesData.json';
import './AddictionsSymptoms.css'

const AddictionsSymptoms = () => {
    const CoupleRelationshipsService = servicesData['adicciones'];

    return (
        <div>
            <ServicesSymptoms service={CoupleRelationshipsService} />
        </div>
    );
};

export default AddictionsSymptoms;