import "./AboutMe.css";
import languagesData from "../../languages/languagesAboutMePage.json";
import { useLanguage } from "../LanguageContext/LanguageContext";

const AboutMe = () => {
  const { language } = useLanguage();
  const parsedBackgroundFirstListBold = JSON.parse(
    languagesData.MyBackground.firstListBold[language].replace(/'/g, '"')
  );
  console.log(parsedBackgroundFirstListBold);
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
              src="/images/fotoAbout.webp"
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
          {parsedBackgroundFirstListBold.map((element, idx) => {
            return <p key={idx}>{element}</p>;
          })}
        </div>
      </div>
    </>
  );
};
export default AboutMe;
