import React from "react";
import ServicesTypeItem from "../ServicesTypesSection/ServicesTypesItem";

const TypesSection = ({ typeName }) => {
    const ServiceDataTypes = {
        'problemas-emocionales': [
            {
                type: 'Ansiedad',
                description: 'La ansiedad es uno de los trastornos emocionales más prevalentes. Se caracteriza por una respuesta excesiva o desproporcionada a situaciones de estrés o peligro, que puede interferir significativamente con la vida diaria. Algunos de los tipos de ansiedad más comunes incluyen:',
                subgroups: [
                    {
                        name: 'Ansiedad generalizada',
                        description: 'Caracterizada por una preocupación excesiva y persistente sobre una amplia variedad de situaciones y eventos, incluso cuando no hay una razón clara para estar ansioso. Los síntomas incluyen preocupación constante por el futuro, fatiga, irritabilidad y tensión muscular.',
                    },
                    {
                        name: 'Fobias',
                        description: 'Se caracterizan por un miedo intenso y persistente hacia objetos, situaciones, animales o actividades específicas. Los síntomas pueden incluir un miedo irracional, evitación de la fobia desencadenante, y una respuesta física intensa frente a la fobia.',
                    },
                    {
                        name: 'Estrés',
                        description: 'Es una respuesta natural del cuerpo a situaciones desafiantes o amenazantes. Puede volverse crónico y abrumador, teniendo un impacto significativo en la salud física y mental. Los síntomas incluyen cambios en el estado de ánimo, problemas de sueño, cambios en el apetito y síntomas físicos como dolores de cabeza y problemas gastrointestinales.',
                    },
                ],
            },
            {
                type: 'Depresión',
                description: 'La depresión es un trastorno del estado de ánimo que afecta significativamente la vida diaria de quienes la padecen. Algunos de los síntomas más comunes incluyen sentimientos persistentes de tristeza, pérdida de interés en actividades placenteras, cambios en el apetito y el sueño, sentimientos de inutilidad y dificultades en la concentración y la toma de decisiones. En casos graves, pueden surgir pensamientos recurrentes sobre autolesionarse o la muerte.Hay que tener en cuenta que pueden existir pensamientos de este tipo sin necesidad de que ello implique tener depresión.',
            },
            {
                type: 'Apatía/Desgana',
                description: 'La apatía y la desgana son estados emocionales caracterizados por la falta de interés, motivación y entusiasmo hacia actividades que normalmente se considerarían importantes o placenteras. Pueden manifestarse con sensación de vacío, dificultades para concentrarse y cambios en el sueño y el apetito. El aislamiento social y la falta de interés en actividades previamente disfrutadas también son comunes.',
            },
        ],
        'trastornos-de-conducta-alimentaria': [
            {
                type: 'Anorexia',
                description: 'La anorexia nerviosa es un trastorno alimentario caracterizado por la restricción extrema de la ingesta de alimentos, el miedo intenso a aumentar de peso y una imagen distorsionada del cuerpo.',
                subgroups: [
                    {
                        name: 'Restrictiva',
                        description: 'La anorexia restrictiva implica la reducción extrema de la ingesta de alimentos y una obsesión por mantener un peso corporal bajo.',
                    },
                    {
                        name: 'Purgativa',
                        description: 'La anorexia purgativa implica comportamientos como el vómito autoinducido o el uso excesivo de laxantes para eliminar el alimento consumido.',
                    },
                    {
                        name: 'No especificada',
                        description: 'La anorexia no especificada se refiere a patrones de alimentación que no cumplen completamente con los criterios de la anorexia nerviosa, pero aún así implican preocupaciones significativas por el peso y la comida.',
                    },
                ],
            },
            {
                type: 'Bulimia',
                description: 'La bulimia nerviosa es un trastorno alimentario caracterizado por episodios de ingesta excesiva de alimentos seguidos de comportamientos compensatorios, como el vómito o el uso de laxantes.',
                subgroups: [
                    {
                        name: 'Episódica',
                        description: 'La bulimia episódica implica episodios recurrentes de atracones de comida seguidos de sentimientos de culpa y vergüenza.',
                    },
                    {
                        name: 'Purgativa',
                        description: 'La bulimia purgativa implica comportamientos como el vómito autoinducido o el uso excesivo de laxantes después de los atracones de comida.',
                    },
                    {
                        name: 'No purgativa',
                        description: 'La bulimia no purgativa implica comportamientos compensatorios como el ejercicio excesivo o el ayuno después de los atracones de comida.',
                    },
                ],
            },
        ],
    };

    const symptomTypes = ServiceDataTypes[typeName] || [];

    return (
        <div className="service-symptoms-section">
            {symptomTypes.map((symptom, index) => (
                <ServicesTypeItem
                    key={index}
                    type={symptom.type}
                    description={symptom.description}
                    subgroups={symptom.subgroups}
                />
            ))}
        </div>
    );
}
export default TypesSection;