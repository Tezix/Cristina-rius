import "./Contact.css";
import languagesData from "../../languages/Contact/contact.json";
import { useLanguage } from "../LanguageContext/LanguageContext";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

const Contact = () => {
  const { language } = useLanguage();
  const [state, handleSubmit] = useForm("mjvnypgy");
  const [hasContacted, setHasContacted] = useState(undefined);
  if (!hasContacted && state.succeeded) {
    setHasContacted(
      "Se ha enviado tu mensaje. Te contactaré con la mayor brevedad posible. Gracias."
    );
  }

  return (
    <>
      <div className="contact-section">
        <div className="contact-hero">
          <div className="contact-text-column">
            <h3>{languagesData.contactHero.h3[language]}</h3>
            <h1>{languagesData.contactHero.h1[language]}</h1>
            <p>{languagesData.contactHero.p[language]}</p>
          </div>
          <div className="contact-form-column">
            <section id="contact-form" aria-label="Contact Form">
              {!state.succeeded ? (
                <form onSubmit={handleSubmit} className="form-group">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-style mt-3"
                    placeholder={languagesData.contactForm.name[language]}
                    aria-label="Nombre"
                  />
                  <ValidationError
                    prefix="Nombre"
                    field="name"
                    errors={state.errors}
                  />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-style"
                    placeholder={languagesData.contactForm.email[language]}
                    aria-label="Tu email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />

                  <textarea
                    id="message"
                    name="message"
                    style={{
                      overflow: "hidden",
                      paddingBottom: "170px",
                      resize: "none",
                    }}
                    className="form-style mt-3"
                    placeholder={languagesData.contactForm.helpText[language]}
                    aria-label="Mensaje"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="btn mt-4 mb-2"
                    placeholder={
                      languagesData.contactForm.contactButton[language]
                    }
                  >
                    Enviar
                  </button>
                </form>
              ) : (
                <div
                  className="form-style pt-3 pb-3"
                  style={{ height: "100%" }}
                  aria-label="Mensaje enviado"
                >
                  {hasContacted}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
      <div className="map-section">
        <div className="map-hero-section">
          <div className="map-img-column">
            <img src="/images/photoMap.webp" alt="" />
          </div>
          <div className="map-text-column">
            <div className="contact-direction-title">
              <p>{languagesData.contactDetails.directionTitle[language]}</p>
            </div>
            <div className="contact-direction-info">
              <p>{languagesData.contactDetails.directionInfo[language]}</p>
            </div>
            <div className="contact-email">
              <a
                className="footer-social-mail"
                href="mailto:cristinariusverduguez@gmail.com"
              >
                cristinariusverduguez@gmail.com
              </a>
            </div>
            <div className="contact-number">
              <a className="footer-social-phone" href="tel:611851822">
                611 851 822
              </a>
            </div>
            <div className="contact-schedule-title">
              <p>{languagesData.contactDetails.scheduleTitle[language]}</p>
            </div>
            <div className="contact-schedule-info">
              <p>{languagesData.contactDetails.scheduleDetails[language]}</p>
            </div>
            <div className="contact-social">
              <div className="social-icons-contact">
                <a
                  href="https://www.linkedin.com/in/cristina-rius-verd%C3%BAguez"
                  target="_blank"
                  rel="noopener"
                  tabIndex="0"
                  style={{
                    backgroundColor: "rgb(134, 50, 229)",
                    width: "3vw",
                    height: "3vw",
                    borderRadius: "2.3vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="/images/instagram.svg" alt="logo-instagram" />
                </a>

                <a
                  href="#"
                  style={{
                    backgroundColor: "rgb(134, 50, 229)",
                    width: "3vw",
                    height: "3vw",
                    borderRadius: "2.3vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="/images/linkedin.svg" alt="logo-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
