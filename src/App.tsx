import { Routes, Route } from "react-router-dom";
import FloatingBackToTop from "@/components/FloatingBackToTop";
import Home from "@/pages/Home";
import Region from "@/pages/Region";
import PropertyType from "@/pages/PropertyType";
import Guide from "@/pages/Guide";
import Tools from "@/pages/Tools";
import CityDetail from "@/pages/CityDetail";
import HousingStyleDetail from "@/pages/HousingStyleDetail";
import { createContext, useState } from "react";
import Company from "@/pages/Company";
import JapanExperience from "@/pages/JapanExperience";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {},
  logout: () => {},
});

export const LanguageContext = createContext({
  language: 'zh-TW',
  setLanguage: (lang: string) => {},
});

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [language, setLanguage] = useState('zh-TW');

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/region" element={<Region />} />
          <Route path="/property-type" element={<PropertyType />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/city/:cityName" element={<CityDetail />} />
          <Route path="/housing-style/:styleName" element={<HousingStyleDetail />} />
          <Route path="/company" element={<Company />} />
          <Route path="/japan-experience" element={<JapanExperience />} />
        </Routes>
        <FloatingBackToTop />
      </LanguageContext.Provider>
    </AuthContext.Provider>
  );
}