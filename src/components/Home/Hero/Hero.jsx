import "./Hero.css";
import ContactButton from "../../Elements/ContactButton/ContactButton";
import languagesData from "../../../languages/Home/home.json";
import { useLanguage } from "../../LanguageContext/LanguageContext";
import buttonsText from "../../../languages/Common/buttons.json";

const Hero = () => {
  const { language } = useLanguage();

  return (
    <>
      <div className="hero">
        <div className="text-column">
          <h1 className="hero-title">
            Cristina Rius<span>{languagesData.homeHero.spanh1[language]}</span>
          </h1>
          <p className="hero-intro">{languagesData.homeHero.p[language]}</p>
          <h2 className="hero-question">
            {languagesData.homeHero.h2[language]}
          </h2>
          <div className="hero-buttons">
            <ContactButton
              text={buttonsText.contact[language]}
              type={"dark"}
              link={"/contact"}
            />
            <ContactButton
              text={buttonsText.services[language]}
              type={"light"}
              link={"#services"}
              linkScrolls
            />
          </div>
        </div>
        <div className="image-column">
          <img
            src="/images/fotoAbout.webp"
            alt="photo-hero"
            className="hero-photo"
          />
        </div>
      </div>
    </>
  );
};
export default Hero;
