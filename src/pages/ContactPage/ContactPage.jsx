import { useEffect } from "react";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Contact />
      <Footer />
    </>
  );
};
export default ContactPage;
