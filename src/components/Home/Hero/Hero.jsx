import "./Hero.css";
import ContactButton from "../../ContactButton/ContactButton";
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="text-column">
                    <h1 className="hero-title">Cristina Ríus<span>Psicóloga</span></h1>
                    <p className="hero-intro">Me alegro de que hayas llegado hasta aquí, significa que ya has hecho lo más difícil. Ahora dame la oportunidad de ayudarte. Y, sobre todo, date la oportunidad a ti mismo de recuperar la calidad de vida que mereces.</p>
                    <h2 className="hero-question">¿Empezamos a trabajar?</h2>
                    <div className="hero-buttons">
                        <ContactButton />
                        <a href="Servicios" className="services-button">Servicios</a>
                    </div>
                </div>
                <div className="image-column">
                    <img src="/images/fotoAbout.JPG" alt="photo-hero" className="hero-photo" />
                </div>
            </div>
        </>
    )
}
export default Hero