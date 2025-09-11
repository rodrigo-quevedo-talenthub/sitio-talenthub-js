
import InicioSection from "./features/inicio/InicioSection"
import MainLayout from "./layouts/MainLayout"

import NuestraHistoriaSection from "./features/nuestra_historia/NuestraHistoriaSection.jsx";

import FilosofiaSection from "./features/FilosofiaSection/FilosofiaSection"
import ValoresSection from "./features/ValoresSection/ValoresSection"
import ComoEmpezamosSection from "./features/como_empezamos/ComoEmpezamosSection.jsx";

import NuestroDiferencialSection from "./features/nuestroDiferencial/NuestroDiferencialSection.jsx";
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

        <SoftwareYAppsSection/>

        <AgentesSection />

        <NuestroDiferencialSection/>

        <ComoEmpezamosSection/>

        <ResultadosSection />

        <ContactoSection />

    </MainLayout>
  )
}

export default App
