import "./Contact.css";
import languagesData from "../../languages/Contact/contact.json";
import { useLanguage } from "../LanguageContext/LanguageContext";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

const Contact = () => {
  const { language } = useLanguage();
  const [state, handleSubmit] = useForm("xnqkryva");
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
                    placeholder="Nombre"
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
                    placeholder="Tu email"
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
                    style={{ overflow: "hidden", paddingBottom: "170px" }}
                    className="form-style mt-3"
                    placeholder="¿En qué te puedo ayudar?"
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
                    aria-label="Enviar"
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
            <div className="footer-direction">
              <p>Dirección</p>
              <p>Calle San Vicente Mártir 84, 2ºAB</p>
              <p>46002 Valencia</p>
            </div>
            {/* <div className="footer-social">
                            <img src="/images/logo-linkedin.png" alt="logo-linkedin" />
                            <img src="/images/logo-instagram.png" alt="logo-instagram" />
                            <p className="footer-social-mail">
                                cristinariusverduguez@gmail.com
                            </p>
                            <p className="footer-social-phone">611 851 822</p>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
