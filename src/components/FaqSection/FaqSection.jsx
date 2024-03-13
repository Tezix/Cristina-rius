import React from 'react';
import FAQItem from '../FaqSection/FAQItem';

const FaqSection = ({ serviceName }) => {
    const serviceFAQs = {

        'Faq-home': [
            {
                question: '¿Cómo sé si necesito terapia?',
                answer: 'En ocasiones, nos encontramos en momentos delicados donde dudamos si sería beneficioso acudir a un profesional de la salud mental. Mi enfoque es invitar a reflexionar desde otra perspectiva: ¿si surge la duda de si ir al psicólogo o no, no podría ser un indicador para explorar? Recuerda que la duración de la terapia se adapta a cada caso y, en algunas ocasiones, puede ser una consulta psicológica puntual.',
            },
            {
                question: '¿Qué puedo esperar en mi primera sesión con un psicólogo?',
                answer: 'En tu primera sesión, nos enfocaremos en hablar de aquello que te preocupa.Para mí es crucial que te sientas cómodo, así que los ritmos los marcarás tú.A partir de esta sesión inicial, estableceremos los ritmos de trabajo, considerando mi criterio profesional junto con tus opiniones y posibilidades.',
            },
            {
                question: '¿Es normal sentirse nervioso o avergonzado al hablar con un psicólogo?',
                answer: 'Sentir nerviosismo o vergüenza la primera vez que vienes es normal, ya que no me conoces y vas a hablar de temas que te preocupan.Por eso, siempre busco que mi consulta sea un espacio seguro, libre de juicios, donde te sientas cómodo y aceptado.',
            },
            {
                question: '¿Cuánto tiempo dura la terapia?',
                answer: 'La duración de la terapia varía según cada caso particular.Sin embargo, es importante no imponer plazos fijos.Establecer límites temporales podría generar presión adicional para sentirse bien, lo cual es contraproducente para tu bienestar.',
            },
            {
                question: '¿La terapia es confidencial?',
                answer: 'El código deontológico de los psicólogos garantiza la confidencialidad total.Todo lo que se habla en sesión queda entre tú y yo, a menos que existan circunstancias específicas, como una orden judicial o situaciones vitales extremas.En cualquier caso, siempre se te informará previamente.',
            },
            {
                question: '¿Cuánto cuesta la sesión?',
                answer: 'La sesión de terapia individual tiene un costo de 55 euros y tiene una duración de una hora.',
            },
        ],

        'Faq-problemas-emocionales': [
            {
                question: 'Pregunta 1 para Servicio 2',
                answer: 'Respuesta 1 para Servicio 2',
            },
            {
                question: 'Pregunta 2 para Servicio 2',
                answer: 'Respuesta 2 para Servicio 2',
            },
        ],

        'Faq-trastornos-de-conducta-alimentaria': [
            {
                question: 'Pregunta 1 para Servicio 2',
                answer: 'Respuesta 1 para Servicio 2',
            },
            {
                question: 'Pregunta 2 para Servicio 2',
                answer: 'Respuesta 2 para Servicio 2',
            },
        ],

        'Faq-duelo': [
            {
                question: 'Pregunta 1 para Servicio 2',
                answer: 'Respuesta 1 para Servicio 2',
            },
            {
                question: 'Pregunta 2 para Servicio 2',
                answer: 'Respuesta 2 para Servicio 2',
            },
        ],

        'Faq-crecimiento-personal': [
            {
                question: 'Pregunta 1 para Servicio 2',
                answer: 'Respuesta 1 para Servicio 2',
            },
            {
                question: 'Pregunta 2 para Servicio 2',
                answer: 'Respuesta 2 para Servicio 2',
            },
        ],

        'Faq-relaciones-de-pareja': [
            {
                question: 'Pregunta 1 para Servicio 2',
                answer: 'Respuesta 1 para Servicio 2',
            },
            {
                question: 'Pregunta 2 para Servicio 2',
                answer: 'Respuesta 2 para Servicio 2',
            },
        ],

        'Faq-adicciones': [
            {
                question: 'Pregunta 1 para Servicio 2',
                answer: 'Respuesta 1 para Servicio 2',
            },
            {
                question: 'Pregunta 2 para Servicio 2',
                answer: 'Respuesta 2 para Servicio 2',
            },
        ],
    };

    const faqs = serviceFAQs[serviceName] || [];

    return (
        <div className="faq-section">
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

export default FaqSection;
