import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutMePage from "../pages/AboutMePage/AboutMePage";
import EmotionalIssuesPage from "../pages/ServicesPages/EmotionalIssuesPage/EmotionalIssuesPage";
import EatingDisordersPage from "../pages/ServicesPages/EatingDisordersPage/EatingDisordersPage";
import MourningPage from "../pages/ServicesPages/MourningPage/MourningPage";
import PersonalGrowthPage from "../pages/ServicesPages/PersonalGrowthPage/PersonalGrowthPage";
import CoupleRelationshipsPage from "../pages/ServicesPages/CoupleRelationshipsPage/CoupleRelationshipsPage";
import AddictionsPage from "../pages/ServicesPages/AddictionsPage/AddictionsPage";
import services from '../components/ServicesData';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/about'} element={<AboutMePage />} />
            <Route path={'/problemas-emocionales'} element={<EmotionalIssuesPage services={services} />} />
            <Route path={'/trastornos-conducta-alimentaria'} element={<EatingDisordersPage services={services} />} />
            <Route path={'/duelo'} element={<MourningPage services={services} />} />
            <Route path={'/crecimiento-personal'} element={<PersonalGrowthPage services={services} />} />
            <Route path={'/relaciones-de-pareja'} element={<CoupleRelationshipsPage services={services} />} />
            <Route path={'/adicciones'} element={<AddictionsPage services={services} />} />
        </Routes>
    );
}

export default AppRoutes;
