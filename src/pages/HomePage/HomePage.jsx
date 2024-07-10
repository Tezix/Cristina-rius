import Hero from "../../components/Home/Hero/Hero";
import HomeAboutMe from "../../components/Home/HomeAboutMe/HomeAboutMe";
import ModalitiesSection from "../../components/ModalitiesCard/ModalitiesSection";
import Services from "../../components/Home/HomeServices/HomeServices";
import HomeFaq from "../../components/Home/HomeFaq/HomeFaq";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <HomeAboutMe />
      <ModalitiesSection />
      <HomeFaq />
      <Footer />
    </>
  );
};
export default HomePage;
