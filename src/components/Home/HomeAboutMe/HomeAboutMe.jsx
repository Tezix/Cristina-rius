import "./HomeAboutMe.css";
import languagesData from "../../../languages/languagesHomePage.json";
import { useLanguage } from "../../LanguageContext/LanguageContext";

const HomeAboutMe = () => {
  const { language } = useLanguage();

  return (
    <div className="home-about-section">
      <div className="white-container">
        <div className="about-text-column">
          <h1>{languagesData.homeAboutMe.h1[language]}</h1>
          <h2>{languagesData.homeAboutMe.h2[language]}</h2>
          <p>{languagesData.homeAboutMe.p1[language]}</p>
          <p>
            {languagesData.homeAboutMe.p2[language]}
            <span>{languagesData.homeAboutMe.span1[language]}</span>
            {languagesData.homeAboutMe.p3[language]}
          </p>
          <p>{languagesData.homeAboutMe.p4[language]}</p>
          <p>
            {languagesData.homeAboutMe.p5[language]}
            <span>{languagesData.homeAboutMe.span2[language]}</span>
            {languagesData.homeAboutMe.p6[language]}
            <span>{languagesData.homeAboutMe.span3[language]}</span>
            {languagesData.homeAboutMe.p7[language]}
          </p>
        </div>
        <div className="about-image-column">
          <img
            src="/images/fotoAbout.webp"
            alt="photo-home-about-section"
            className="photo-home-about"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAboutMe;
