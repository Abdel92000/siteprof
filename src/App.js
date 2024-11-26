import Navbar from "./components/Navbar.jsx";

import Accueil from "./page/Accueil.jsx";
import Contact from "./page/Contact.jsx";
import { useState } from "react";
import Connexion from "./page/Connexion.jsx";
import Apropos from "./page/Apropos.jsx";
import Planning from "./page/Planning.jsx";
import Footer from "./components/Footer.jsx";
import TarifParticulier from "./page/TarifParticulier.jsx";
import Inscription from "./page/Inscription.jsx";
import { Routes, Route } from "react-router-dom";
import StagePréRentrée from "./page/StagePréRentrée.jsx"











function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Connexion" element={<Connexion />} />
        <Route path="Apropos" element={<Apropos />} />
        <Route path="Planning" element={<Planning />} />
        <Route path="TarifParticulier" element={<TarifParticulier />} />
        <Route path="A" element={<Planning />} />
        <Route path="Inscription" element={<Inscription />} />
        <Route path="Stage" element={<StagePréRentrée />} />









      </Routes>
      <Footer />
    </>
  )
}



export default App;
