import { useEffect } from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import ContactCard from "../../components/ContactCard/ContactCard";
import Footer from "../../components/Footer/Footer";

const AboutMePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutMe />
      <ContactCard />
      <Footer />
    </>
  );
};
export default AboutMePage;
