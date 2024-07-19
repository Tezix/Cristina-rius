import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutMePage from "../pages/AboutMePage/AboutMePage";
import ServicePage from "../pages/ServicesPages/ServicePage";
import ContactPage from "../pages/ContactPage/ContactPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/about"} element={<AboutMePage />} />
      <Route path={"/:serviceType"} element={<ServicePage />} />
      <Route path={"/contact"} element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
