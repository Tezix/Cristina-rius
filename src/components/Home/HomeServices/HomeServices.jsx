import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import ServiceCard from '../../ServiceCard/ServiceCard';
import './HomeServices.css';

import services from '../../ServicesData';

const HomeServices = () => {
    const halfLength = Math.ceil(services.length / 2);
    const leftColumn = services.slice(0, halfLength);
    const rightColumn = services.slice(halfLength, services.length);

    return (
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
                        <Link to={`/${service.title.toLowerCase().replace(/ /g, '-')}`} key={index}>
                            <ServiceCard title={service.title} backgroundImage={service.image} />
                        </Link>
                    ))}
                </div>
                <div className="service-column">
                    {rightColumn.map((service, index) => (
                        <Link to={`/${service.title.toLowerCase().replace(/ /g, '-')}`} key={index + halfLength}>
                            <ServiceCard title={service.title} backgroundImage={service.image} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeServices;
