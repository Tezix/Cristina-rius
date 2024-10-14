import "./ModalitiesSection.css";
import modalitiesData from "../../languages/Common/modalitiesCard.json";
import { useLanguage } from "../LanguageContext/LanguageContext";
import { Link } from "react-router-dom";

const ModalitiesSection = () => {
  const { language } = useLanguage();
  return (
    <div className="modalities">
      <h1 className="modalities-title">{modalitiesData.title[language]}</h1>
      <div className="modalities-cards">
        <div className="modalities-card">
          <div className="card-image">
            <img
              src={modalitiesData.presentialModalitiesCard.img}
              alt="photo-modalities"
            />
          </div>
          <div className="card-content">
            <div className="card-title">
              <h2>{modalitiesData.presentialModalitiesCard.h2[language]}</h2>
            </div>
            <div className="card-description">
              <p>{modalitiesData.presentialModalitiesCard.p1[language]}</p>
            </div>
            <div className="card-price">
              <p>{modalitiesData.presentialModalitiesCard.p2[language]}</p>
            </div>
            <div className="card-contact">
              <Link to="/contact">
                {modalitiesData.presentialModalitiesCard.a[language]}
              </Link>
            </div>
          </div>
        </div>
        <div className="modalities-card">
          <div className="card-image">
            <img
              src={modalitiesData.onlineModalitiesCard.img}
              alt="photo-modalities"
            />
          </div>
          <div className="card-content">
            <div className="card-title">
              <h2>{modalitiesData.onlineModalitiesCard.h2[language]}</h2>
            </div>
            <div className="card-description">
              <p>{modalitiesData.onlineModalitiesCard.p1[language]}</p>
            </div>
            <div className="card-price">
              <p>{modalitiesData.onlineModalitiesCard.p2[language]}</p>
            </div>
            <div className="card-contact">
              <Link to="/contact">
                {modalitiesData.onlineModalitiesCard.a[language]}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalitiesSection;
