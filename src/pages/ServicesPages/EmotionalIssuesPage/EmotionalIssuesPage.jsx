import React from 'react';

const EmotionalIssuesPage = ({ title, image }) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt={title} />
        </div>
    );
};

export default EmotionalIssuesPage;

