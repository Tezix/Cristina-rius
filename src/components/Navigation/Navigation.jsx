import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navigation.css";
import { useLanguage } from "./../LanguageContext/LanguageContext";
import ContactButton from "../ContactButton/ContactButton";
import languagesData from "../../languages/languagesNavigation.json";

function Navigation() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrolling, setScrolling] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === "esp" ? "val" : "esp";
    changeLanguage(newLanguage);
  };
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className={`top-nav ${scrolling ? "scroll-down" : ""}`}>
        <div className="left-nav">
          <div className="logo-mini">
            <Link to="/">
              <img src="/images/logoCristina.png" alt="logo" />
            </Link>
          </div>
          <div className="language-switch" onClick={toggleLanguage}>
            <div
              className={`language-option ${
                language === "esp" ? "active" : ""
              }`}
            >
              ESP
            </div>
            <div
              className={`language-option ${
                language === "val" ? "active" : ""
              }`}
            >
              VAL
            </div>
          </div>
        </div>
        {windowWidth >= 450 && (
          <div className="right-nav">
            <div className="right-nav-items">
              <div className="nav-item">
                <NavLink to="/about">{languagesData.aboutMe[language]}</NavLink>
              </div>
              <div className="nav-item">
                <div
                  className="dropdown"
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}
                >
                  <Link to="#" onClick={(e) => e.preventDefault()}>
                    {languagesData.services[language]}
                  </Link>
                  {showDropdown && (
                    <div className="dropdown-content">
                      <NavLink to="/problemas-emocionales">
                        {
                          languagesData.services.dropdown.problemasEmocionales[
                            language
                          ]
                        }
                      </NavLink>
                      <NavLink to="/trastornos-conducta-alimentaria">
                        {
                          languagesData.services.dropdown
                            .trastornosDeConductaAlimentaria[language]
                        }
                      </NavLink>
                      <NavLink to="/duelo">
                        {languagesData.services.dropdown.duelo[language]}
                      </NavLink>
                      <NavLink to="/crecimiento-personal">
                        {
                          languagesData.services.dropdown.crecimientoPersonal[
                            language
                          ]
                        }
                      </NavLink>
                      <NavLink to="/relaciones-de-pareja">
                        {
                          languagesData.services.dropdown.relacionesDepareja[
                            language
                          ]
                        }
                      </NavLink>
                      <NavLink to="/adicciones">
                        {languagesData.services.dropdown.adicciones[language]}
                      </NavLink>
                    </div>
                  )}
                </div>
              </div>
              <div className="nav-item">
                <NavLink to="/blog">Blog</NavLink>
              </div>
            </div>
            <div className="nav-contact-button">
              <ContactButton />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navigation;
