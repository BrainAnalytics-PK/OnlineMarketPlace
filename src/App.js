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
import {Switch} from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" exact element={<LandingPage />} />
          <Route  path="AboutUs" exact element={<AboutUs />} />
          <Route  path="ContactPage" exact element={<ContactPage />} />
          <Route  path="Careers" exact element={<Careers />} />
          <Route  path="PrivacyPolicy" exact element={<PrivacyPolicy />} />
          <Route  path="TermsOfSale" exact element={<TermsOfSale />} />
          <Route  path="TermsOfUse" exact element={<TermsOfUse />} />
          <Route  path="WarrantyPolicy" exact element={<WarrantyPolicy />} />
          <Route  path="Baby" exact element={<Baby />} />
          <Route  path="Beauty" exact element={<Beauty />} />
          <Route  path="Decor" exact element={<Decor />} />
          <Route  path="Electronics" exact element={<Electronics />} />
          <Route  path="Fashion" exact element={<Fashion />} />
          <Route  path="Grocery" exact element={<Grocery />} />
          <Route  path="Health" exact element={<Health />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
