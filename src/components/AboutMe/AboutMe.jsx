import "./AboutMe.css";
import languagesData from "../../languages/AboutMe/aboutMe.json";
import { useLanguage } from "../LanguageContext/LanguageContext";

const AboutMe = () => {
  const { language } = useLanguage();

  return (
    <>
      <div className="about-me">
        <div className="about-me-hero">
          <div className="about-me-text-column">
            <h3>{languagesData.aboutMeHero.h3[language]}</h3>
            <h1>
              {languagesData.aboutMeHero.h1[language]}
              <span>Cristina Rius</span>
            </h1>
            <p>{languagesData.aboutMeHero.p[language]}</p>
          </div>
          <div className="about-me-image-column">
            <img
              src="/images/aboutMePhoto.webp"
              alt="photo-hero"
              className="about-me-hero-photo"
            />
          </div>
        </div>
        <div className="my-history">
          <h2>{languagesData.MyHistory.title[language]}</h2>
          <p>{languagesData.MyHistory.p1[language]}</p>
          <p>{languagesData.MyHistory.p2[language]}</p>
          <p>{languagesData.MyHistory.p3[language]}</p>
          <p>{languagesData.MyHistory.p4[language]}</p>
        </div>
        <div className="my-background">
          <h2>{languagesData.MyBackground.title[language]}</h2>

          <div className="my-background-section">
            <div className="my-background-img-column">
              <img
                src="/images/backgroundPhoto.webp"
                alt="photo-background"
                className="photo-background-section"
              />
            </div>

            <div className="my-background-text-column">
              {languagesData.MyBackground.firstListBold[language].map((element, idx) => (
                <div key={idx} className="first-list-item">
                  <p className="first-list-bold">
                    <strong>{element}</strong>
                  </p>
                  <p className="first-list-info">
                    {languagesData.MyBackground.firstListInfo[language][idx]}
                  </p>
                </div>
              ))}
              <h3 className="second-title">
                {languagesData.MyBackground.secondTitle[language]}
              </h3>
              {languagesData.MyBackground.secondListBold[language].map((element, idx) => (
                <div key={idx} className="second-list-item">
                  <p className="second-list-bold">
                    <strong>{element}</strong>
                  </p>
                  <p className="second-list-info">
                    {languagesData.MyBackground.secondListInfo[language][idx]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
