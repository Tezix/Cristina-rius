import React from "react";
import TypesSection from "../../ServicesData/ServiceDataTypes";
import './EmotionalTypes.css';

const EmotionalTypes = () => {
    const typeName = 'problemas-emocionales';
    return (
        <div className="emotional-symptom-types">
            <TypesSection typeName={typeName} />
        </div>
    )
}
export default EmotionalTypes;









