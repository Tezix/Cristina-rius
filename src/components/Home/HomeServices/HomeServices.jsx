import React from 'react';
import ServiceCard from '../../ServiceCard/ServiceCard';
import './HomeServices.css';


const Services = () => {
    const services = [
        {
            title: "Problemas emocionales",
            image: "/images/blog1.jpg"
        },
        {
            title: "Trastornos de la Conducta Alimentaria (TCA)",
            image: "/images/blog2.jpg"
        },
        {
            title: "Duelo",
            image: "/images/blog3.jpg"
        },
        {
            title: "Crecimiento Personal",
            image: "/images/blog4.jpg"
        },
        {
            title: "Relaciones de Pareja",
            image: "/images/blog5.jpg"
        },
        {
            title: "Adicciones",
            image: "/images/blog6.jpg"
        },
    ];

    const halfLength = Math.ceil(services.length / 2);
    const leftColumn = services.slice(0, halfLength);
    const rightColumn = services.slice(halfLength, services.length);

    return (
        <>
            <div className='services'>
                <div className='services-info'>
                    <h2 className='services-title'>Servicios</h2>
                    <p>En mi consulta psicológica, <span>te ofrezco apoyo y orientación personalizados</span> para explorar preocupaciones, identificar patrones de pensamiento y desarrollar estrategias para el cambio positivo. Además de la terapia individual, proporciono<span>asesoramiento breve para situaciones específicas.</span></p>
                    <br />
                    <p>Mi objetivo es ayudarte a superar desafíos y vivir una vida más plena.</p>
                    <h3 className='some-services'>Algunos de los servicios con los que trabajo:</h3>
                </div>
                <div className='services-cards'>
                    <div className="service-column">
                        {leftColumn.map((service, index) => (
                            <ServiceCard key={index} title={service.title} backgroundImage={service.image} />
                        ))}
                    </div>
                    <div className="service-column">
                        {rightColumn.map((service, index) => (
                            <ServiceCard key={index + halfLength} title={service.title} backgroundImage={service.image} />
                        ))}
                    </div>
                </div>
            </div>


        </>
    );
};

export default Services;
