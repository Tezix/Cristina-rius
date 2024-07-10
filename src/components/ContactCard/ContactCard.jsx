import "./ContactCard.css";
import ContactButton from "../../components/Elements/ContactButton/ContactButton";
const ContactCard = () => {
  return (
    <>
      <div className="contact-card">
        <div className="contact-card-text">
          <p>contacta para más información</p>
          <h1>Estaré encantada de ayudarte en tu proceso</h1>
          <ContactButton text={"Contacto"} type={"dark"} />
        </div>
        <div className="contact-card-image">
          <img src="/images/ContactImg.webp" alt="contact-card-image" />
        </div>
      </div>
    </>
  );
};
export default ContactCard;
