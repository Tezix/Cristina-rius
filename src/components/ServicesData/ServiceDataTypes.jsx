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
                description: 'Los trastornos de la conducta alimentaria son condiciones de salud mental que afectan la relación de una persona con la comida y la percepción de su imagen corporal. Algunos de los trastornos más comunes incluyen la anorexia nerviosa, la bulimia nerviosa y el trastorno por atracón.',

            },
            {
                type: 'Bulimia',
                description: 'La bulimia nerviosa implica episodios recurrentes de ingesta excesiva de alimentos seguida de comportamientos compensatorios para evitar el aumento de peso, como el vómito autoinducido o el uso excesivo de laxantes. Los síntomas incluyen episodios de atracones, preocupación excesiva por el peso y la forma corporal, y cambios físicos como problemas dentales o gastrointestinales.',

            },
            {
                type: 'Trastorno por atracón',
                description: 'El tratorno por atracón implica episodios recurrentes de ingesta excesiva de alimentos sin los comportamientos compensatorios observador en la bulimia. Los síntomas incluyen incapacidad para detenerse durante el atracón, sentimientos de culpa o disgusto depsués del atracón y preocupacióm constante por el peso y la forma corporal.',

            },
            {
                type: 'Otros Tratornos de la Conducta Alimentaria (TCA)',
                description: 'El trastorno por atracón implica episodios recurrentes de ingesta excesiva de alimentos sin los comportamientos compensatorios observados en la bulimia. Los síntomas incluyen incapacidad para detenerse durante el atracón, sentimientos de culpa o disgusto después del atracón y preocupación constante por el peso y la forma corporal.',
                subgroups: [
                    {
                        name: 'Vigorexia',
                        description: 'Obsesión por desarrollar músculos y distorsión de la imagen corporal, con dedicación excesiva al ejercicio y la dieta.',
                    },
                    {
                        name: 'Ortorexia',
                        description: 'Obsesión por consumir alimentos saludables, evitando grupos específicos y experimentando angustia si no pueden mantener una dieta "limpia".',
                    },
                    {
                        name: 'Dismorfia corporal',
                        description: 'Preocupación obsesiva por defectos percibidos en la apariencia física, que puede llevar a comportamientos compulsivos como el examen repetido en el espejo.',
                    },
                    {
                        name: 'Trastornos de ansiedad social',
                        description: 'Miedo al juicio de los demás sobre la apariencia física, lo que contribuye a la ansiedad social y afecta a la percepción de la imagen corporal.',
                    },
                ],

            },

        ],
        'duelo': [
            {
                type: 'Duelo por fallecimiento',
                description: 'El duelo por fallecimiento es un proceso personal que involucra tristeza, negación, irritabilidad, entre otros síntomas anteriormente comentados. Es crucial identificar estos sentimientos y buscar apoyo para afrontar esta experiencia emocionalmente desafiante. Cada individuo lo experimenta de manera única. El apoyo de amigos, familiares y, a veces, de profesionales puede ser fundamental para aceptar la pérdida.',

            },
        ],
        'crecimiento-personal': [
            {
                type: 'Autoestima',
                description: 'Mejorar la autoestima es un proceso continuo que implica trabajar en la percepción y valoración positiva de uno mismo. Es un constructo complejo que requiere abordar diversas áreas.Entre las vías para su mejora se encuentran el autoconocimiento, la aceptación personal y el establecimiento de límites. Además, el manejo constructivo de críticas, la celebración de logros y el cuidado personal son esenciales.Transformar la autocrítica en autocuidado y fomentar relaciones saludables también son aspectos cruciales. Este proceso es gradual y personal, demandando esfuerzos conscientes y consistentes.Buscar apoyo profesional puede ser valioso en este viaje de autodescubrimiento y crecimiento.',

            },
            {
                type: 'Cambios vitales',
                description: 'Experimentar cambios vitales puede tener un impacto significativo en la salud mental. Durante estos períodos, es común sentir ansiedad y estrés debido a la incertidumbre sobre el futuro. La adaptación emocional y la reflexión sobre la vida son características clave durante las transiciones.La flexibilidad cognitiva, el apoyo social y la resiliencia son esenciales para enfrentar los desafíos.Además, tomar decisiones informadas, creer en uno mismo y mantener la conciencia del bienestar mental son importantes para adaptarse positivamente a las nuevas circunstancias.',

            },

        ],
        'relaciones-de-pareja': [
            {
                type: 'Problemas por ruptura',
                description: 'Una ruptura también incluye un proceso de duelo que desencadena síntomas emocionales y físicos únicos. Incluyen tristeza profunda, negación inicial e irritabilidad persistente, entre otros, así como la posible revisión de recuerdos constantes. El apoyo emocional puede ser fundamental para aceptar gradualmente la nueva situación, así como realizar un análisis de la relación, aprender cara el futuro y avanzar hacia la recuperación emocional.',

            },


        ],
        'adicciones': [
            {
                type: 'Adicción a sustancias',
                description: 'La adicción a sustancias se manifiesta a través de síntomas físicos, emocionales y comportamentales. Aparte de los síntomas generales como el deseo incontrolable y la pérdida de control, hay indicadores específicos como dedicar gran parte del día a la sustancia, rituales relacionados con su consumo, cambios físicos y dependencia física. Estos signos señalan la presencia de una adicción y la necesidad de buscar ayuda profesional.',

            },
            {
                type: 'Adicción al juego',
                description: 'La adicción al juego, o ludopatía, implica la participación persistente en actividades de juego a pesar de las consecuencias negativas. Los síntomas incluyen la incapacidad para dejar de jugar, pensamientos obsesivos sobre el juego, aumento de la frecuencia de juego y pérdida de control financiero. Estos signos indican la presencia de la adicción y la necesidad de buscar ayuda profesional.',

            },
            {
                type: 'Adicción al móvil',
                description: 'La nomofobia, o adicción al móvil, es una dependencia excesiva del teléfono móvil. Los síntomas incluyen uso excesivo, dificultad para desconectarse, preocupación constante y negligencia de responsabilidades. Pueden aparecer problemas físicos como dolor en el cuello o la espalda.Además, se experimentan cambios en el estado de ánimo, aislamiento social y evasión de problemas. Establecer límites y buscar apoyo profesional son acciones recomendadas para abordar esta adicción. Es importante reconocer que el uso excesivo del teléfono puede indicar un problema subyacente y cada caso debe evaluarse individualmente.',

            },
            {
                type: 'Otras adicciones',
                description: 'Además de las adicciones mencionadas, existen otras variedades, algunas conocidas son al trabajo, a las compras, al sexo… Lo importante es reconocer los síntomas de una adicción, como pueden ser la compulsión, negligencia de responsabilidades y aislamiento social. Así como darse cuenta de que están afectando a nuestra salud mental y vida diaria.',
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