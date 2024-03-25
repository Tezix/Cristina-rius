import React from 'react';

const EmotionalIssuesPage = ({ services }) => {
    const emotionalIssuesService = services.find(service => service.title === "Problemas emocionales");

    return (
        <div className='emotional-issues-hero'>
            <h2>servicios</h2>
            <h1>{emotionalIssuesService.title}</h1>
            <img src={emotionalIssuesService.image} alt={emotionalIssuesService.title} />
            <p>{emotionalIssuesService.definition}</p>
        </div>
    );
}

export default EmotionalIssuesPage;
