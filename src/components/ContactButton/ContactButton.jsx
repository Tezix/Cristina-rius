import React from 'react';
import { Link } from 'react-router-dom';
import './ContactButton.css';

const ContactButton = () => {
    return (
        <div className="get-in-touch-button">
            <Link to="#">Contacto</Link>
        </div>
    );
}

export default ContactButton;