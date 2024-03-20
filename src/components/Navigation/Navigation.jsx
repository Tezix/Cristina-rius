import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navigation.css';
import ContactButton from '../ContactButton/ContactButton';

function Navigation() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [scrolling, setScrolling] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [language, setLanguage] = useState('es'); // Estado para el idioma, inicialmente español

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLanguageChange = (selectedLanguage) => {
        // Cambia el estado del idioma al seleccionado
        setLanguage(selectedLanguage);
    };

    return (
        <>
            <div className={`top-nav ${scrolling ? 'scroll-down' : ''}`}>
                <div className="left-nav">
                    <div className='logo-mini'>
                        <img src="/images/logoCristina.png" alt="logo" />
                    </div>
                    <div className="language-switch">
                        <div
                            className={`language-option ${language === 'es' ? 'active' : ''}`}
                            onClick={() => handleLanguageChange('es')}
                        >
                            ESP
                        </div>
                        <div
                            className={`language-option ${language === 'val' ? 'active' : ''}`}
                            onClick={() => handleLanguageChange('val')}
                        >
                            VAL
                        </div>
                    </div>
                </div>
                {windowWidth >= 450 && (
                    <div className='right-nav'>
                        <div className='right-nav-items'>
                            <div className='nav-item'>
                                <Link to="/about">Sobre mí</Link>
                            </div>
                            <div className='nav-item'>
                                <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                                    <Link to="#" onClick={(e) => e.preventDefault()}>Servicios</Link>
                                    {showDropdown && (
                                        <div className="dropdown-content">
                                            <Link to="/problemas-emocionales">Problemas emocionales</Link>
                                            <Link to="/trastornos-conducta-alimentaria">Trastornos de conducta alimentaria</Link>
                                            <Link to="/duelo">Duelo</Link>
                                            <Link to="/crecimiento-personal">Crecimiento personal</Link>
                                            <Link to="/relaciones-de-pareja">Relaciones de pareja</Link>
                                            <Link to="/adicciones">Adicciones</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='nav-item'>
                                <Link to="#">Blog</Link>
                            </div>
                        </div>
                        <div className='nav-contact-button'>
                            <ContactButton />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navigation;
