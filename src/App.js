import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Careers from "./Pages/Careers/Careers";
import PrivacyPolicy from "./Pages/OurPolicies/PrivacyPolicy/PrivacyPolicy";
import TermsOfSale from "./Pages/OurPolicies/TermsOfSale/TermsOfSale";
import TermsOfUse from "./Pages/OurPolicies/TermsOfUse/TermsOfUse";
import WarrantyPolicy from "./Pages/OurPolicies/WarrantyPolicy/WarrantyPolicy";
import ConsumerPolicies from "./Pages/OurPolicies/ConsumerPolicies/ConsumerPolicies";
import Baby from "./Pages/Categories/Baby/Baby";
import Beauty from "./Pages/Categories/Beauty/Beauty";
import Decor from "./Pages/Categories/Decor/Decor";
import Electronics from "./Pages/Categories/Electronics/Electronics";
import Fashion from "./Pages/Categories/Fashion/Fashion";
import Grocery from "./Pages/Categories/Grocery/Grocery";
import Health from "./Pages/Categories/Health/Health";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsOfSale" element={<TermsOfSale />} />
          <Route path="/TermsOfUse" element={<TermsOfUse />} />
          <Route path="/WarrantyPolicy" element={<WarrantyPolicy />} />
          <Route path="/Baby" element={<Baby />} />
          <Route path="/Beauty" element={<Beauty />} />
          <Route path="/Decor" element={<Decor />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Grocery" element={<Grocery />} />
          <Route path="/Health" element={<Health />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
