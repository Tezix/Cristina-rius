import { useLanguage } from "./../../LanguageContext/LanguageContext";
import "./LanguageButton.css";

const LanguageButton = () => {
  const { language, changeLanguage } = useLanguage("esp");

  return (
    <div className="switch-container">
      <div
        className={`switch-slider ${
          language === "esp" ? "switch-slider-left" : "switch-slider-right"
        }`}
      ></div>
      <div
        className={`switch-button ${language === "esp" ? "selected" : ""}`}
        onClick={() => changeLanguage("esp")}
      >
        ESP
      </div>
      <div
        className={`switch-button ${language === "val" ? "selected" : ""}`}
        onClick={() => changeLanguage("val")}
      >
        VAL
      </div>
    </div>
  );
};

export default LanguageButton;
