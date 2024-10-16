import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "./../LanguageContext/LanguageContext";
import "./Navigation.css";
import ContactButton from "../Elements/ContactButton/ContactButton";
import languagesData from "../../languages/Navigation/navigation.json";
import LanguageButton from "../Elements/LanguageButton/LanguageButton";
import buttonsText from "../../languages/Common/buttons.json";

function Navigation() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrolling, setScrolling] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { language } = useLanguage("esp");
  const location = useLocation();

  useEffect(() => {
    setShowMobileMenu(false);
    setShowDropdown(false);
  }, [location]);

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

  const toggleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <div
        className={`
          top-nav 
          ${scrolling ? "scroll-down" : ""} 
          ${showMobileMenu ? "open-mobile" : ""}
          ${showDropdown ? "open-dropdown-mobile" : ""}`}
      >
        <div className="visible-menu">
          <div className="left-nav">
            <div className="logo-mini">
              <Link to="/" onClick={() => setShowMobileMenu(false)}>
                <img src="/images/logoCristina.png" alt="logo" />
              </Link>
            </div>
            <LanguageButton />
          </div>
          {windowWidth <= 450 && (
            <div className="hamburger-container">
              <div
                className={`
                  hamburger-icon 
                  ${showMobileMenu ? "open-mobile" : ""}
                  `}
                onClick={toggleShowMobileMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          {windowWidth > 450 && (
            <div className="right-nav">
              <div className="right-nav-items">
                <div className="nav-item">
                  <NavLink to="/about">
                    {languagesData.aboutMe[language]}
                  </NavLink>
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

                    <div
                      className={`dropdown-content ${
                        showDropdown ? "show-drop-down" : ""
                      }`}
                    >
                      <NavLink to="/problemas-emocionales">
                        {
                          languagesData.services.dropdown.problemasEmocionales[
                            language
                          ]
                        }
                      </NavLink>
                      <NavLink to="/crecimiento-personal">
                        {
                          languagesData.services.dropdown.crecimientoPersonal[
                            language
                          ]
                        }
                      </NavLink>
                      <NavLink to="/trastornos-de-la-conducta-alimentaria">
                        {
                          languagesData.services.dropdown
                            .trastornosDeConductaAlimentaria[language]
                        }
                      </NavLink>
                      <NavLink to="/relaciones-de-pareja">
                        {
                          languagesData.services.dropdown.relacionesDepareja[
                            language
                          ]
                        }
                      </NavLink>
                      <NavLink to="/duelo">
                        {languagesData.services.dropdown.duelo[language]}
                      </NavLink>
                      <NavLink to="/adicciones">
                        {languagesData.services.dropdown.adicciones[language]}
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="nav-contact-button">
                  <ContactButton
                    text={buttonsText.contact[language]}
                    type={"dark"}
                    link={"/contact"}
                  />
                </div>
                {/* <div className="nav-item">
                <NavLink to="/blog">Blog</NavLink>
              </div> */}
              </div>
            </div>
          )}
        </div>
        {windowWidth <= 450 && (
          <div
            className={`
          mobile-menu 
          ${showMobileMenu ? "open-mobile" : ""}`}
          >
            <NavLink to="/about" onClick={toggleShowMobileMenu}>
              {languagesData.aboutMe[language]}
            </NavLink>

            <div className="dropdown" onClick={toggleDropdown}>
              <Link to="#" onClick={(e) => e.preventDefault()}>
                {languagesData.services[language]}
              </Link>

              <div
                className={`
                  dropdown-content 
                  ${showDropdown ? "show-drop-down" : ""}`}
              >
                <NavLink
                  to="/problemas-emocionales"
                  onClick={toggleShowMobileMenu}
                >
                  {
                    languagesData.services.dropdown.problemasEmocionales[
                      language
                    ]
                  }
                </NavLink>
                <NavLink
                  to="/crecimiento-personal"
                  onClick={toggleShowMobileMenu}
                >
                  {
                    languagesData.services.dropdown.crecimientoPersonal[
                      language
                    ]
                  }
                </NavLink>
                <NavLink
                  to="/trastornos-de-la-conducta-alimentaria"
                  onClick={toggleShowMobileMenu}
                >
                  {
                    languagesData.services.dropdown
                      .trastornosDeConductaAlimentaria[language]
                  }
                </NavLink>
                <NavLink
                  to="/relaciones-de-pareja"
                  onClick={toggleShowMobileMenu}
                >
                  {languagesData.services.dropdown.relacionesDepareja[language]}
                </NavLink>
                <NavLink to="/duelo" onClick={toggleShowMobileMenu}>
                  {languagesData.services.dropdown.duelo[language]}
                </NavLink>
                <NavLink to="/adicciones" onClick={toggleShowMobileMenu}>
                  {languagesData.services.dropdown.adicciones[language]}
                </NavLink>
              </div>
            </div>

            <div className="nav-contact-button">
              <ContactButton
                onClick={() => setShowMobileMenu(false)}
                text={buttonsText.contact[language]}
                type={"dark"}
                link={"/contact"}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navigation;
