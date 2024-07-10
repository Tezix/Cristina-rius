import "./ModalitiesSection.css";

import ModalitiesCardItem from "../ModalitiesCard/ModalitiesCardItem";
import { modalitiesData } from "../ServicesData/ModalitiesData";

const ModalitiesSection = () => {
  return (
    <div className="modalities">
      <h1 className="modalities-title">Modalidades y precio</h1>
      <div className="modalities-cards">
        {modalitiesData.map(({ title, description, image, price }, index) => (
          <ModalitiesCardItem
            key={index}
            title={title}
            description={description}
            image={image}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};

export default ModalitiesSection;
