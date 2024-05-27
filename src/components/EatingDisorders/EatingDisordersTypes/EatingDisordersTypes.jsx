import React from "react";
import TypesSection from "../../ServicesData/ServiceDataTypes";
import './EatingDisordersTypes.css';

const EatingDisordersTypes = () => {
    const typeName = 'trastornos-de-conducta-alimentaria';
    return (
        <div className="eating-disorders-types">
            <TypesSection typeName={typeName} />
            <p>Estos son solo algunos ejemplos de trastornos relacionados con la alimentación y la imagen corporal, cada uno con sus propias características y necesidades de tratamiento específicas.</p>
        </div>
    )
}
export default EatingDisordersTypes;









