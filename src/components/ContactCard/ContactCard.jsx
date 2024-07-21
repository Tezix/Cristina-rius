import "./ContactCard.css";
import ContactButton from "../../components/Elements/ContactButton/ContactButton";
import contactCardData from "../../languages/Common/contactCard.json";
import { useLanguage } from "../LanguageContext/LanguageContext";
import buttonsText from "../../languages/Common/buttons.json";

const ContactCard = () => {
  const { language } = useLanguage();

  return (
    <>
      <div className="contact-card">
        <div className="contact-card-text">
          <p>{contactCardData.contactCard.p[language]}</p>
          <h1>{contactCardData.contactCard.h1[language]}</h1>
          <ContactButton text={buttonsText.contact[language]} type={"dark"} />
        </div>
        <div className="contact-card-image">
          <img src="/images/ContactImg.webp" alt="contact-card-image" />
        </div>
      </div>
    </>
  );
};
export default ContactCard;
