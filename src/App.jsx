import CardImgCenter from "./components/CardImgCenter/CardImgCenter"
import CardImgLeft from "./components/CardImgLeft/CardImgLeft"

import InicioSection from "./features/inicio/InicioSection"
import MainLayout from "./layouts/MainLayout"

import mision from "./assets/icons/filosofia/mision.svg"
import vision from "./assets/icons/filosofia/vision.svg"


import desarrollo_org from "./assets/icons/servicios/desarrollo-org.svg"
import capacitacion from "./assets/icons/servicios/capacitacion.svg"
import reclutamiento from "./assets/icons/servicios/reclutamiento.svg"

import NuestraHistoriaSection from "./features/nuestra_historia/NuestraHistoriaSection.jsx";

import FilosofiaSection from "./features/FilosofiaSection/FilosofiaSection"
import ValoresSection from "./features/ValoresSection/ValoresSection"

import NuestraDiferencialSection from "./features/nuestroDiferencial/NuestroDiferencialSection.jsx";
import ServiciosSection from "./features/servicios/components/ServiciosSection"
import AgentesSection from "./features/agentes/components/AgentesSection"
import ContactoSection from "./features/contacto/components/ContactoSection"
import ResultadosSection from "./features/resultados/components/ResultadosSection"




function App() {


  return (
    <MainLayout>

        <InicioSection />

        <FilosofiaSection />

        <ValoresSection />
    
        <NuestraHistoriaSection/>

        <ServiciosSection />
    
        //<SoftwareYAppsSection/>

        <AgentesSection />

        <NuestraDiferencialSection/>
    
        //<ComoEmpezamosSection/>
    
        <ResultadosSection />

        <ContactoSection />

    </MainLayout>
  )
}

export default App
