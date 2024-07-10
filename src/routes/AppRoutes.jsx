import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutMePage from "../pages/AboutMePage/AboutMePage";
import ServicePage from "../pages/ServicesPages/ServicePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/about"} element={<AboutMePage />} />
      <Route path={"/:serviceType"} element={<ServicePage />} />
    </Routes>
  );
};

export default AppRoutes;
