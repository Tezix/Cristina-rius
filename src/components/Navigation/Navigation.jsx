import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navigation.css';
import ContactButton from '../ContactButton/ContactButton';

function Navigation() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [scrolling, setScrolling] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

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

    return (
        <>
            <div className={`top-nav ${scrolling ? 'scroll-down' : ''}`}>
                <div className='logo-mini'>
                    <img src="/images/logoCristina.png" alt="logo" />
                </div>
                {windowWidth >= 450 && (
                    <div className='menu-desktop outfit-thin'>
                        <Link to="#">Sobre mí</Link>
                        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <Link to="#" onClick={(e) => e.preventDefault()}>Servicios</Link>
                            {showDropdown && (
                                <div className="dropdown-content">
                                    <Link to="#">Problemas emocionales</Link>
                                    <Link to="#">Trastornos de conducta alimentaria</Link>
                                    <Link to="#">Duelo</Link>
                                    <Link to="#">Crecimiento personal</Link>
                                    <Link to="#">Relaciones de pareja</Link>
                                    <Link to="#">Adicciones</Link>
                                </div>
                            )}
                        </div>
                        <Link to="#">Blog</Link>
                    </div>
                )}
                <ContactButton />
            </div>

        </>
    );
}

export default Navigation;