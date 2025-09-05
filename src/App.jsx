import CardImgCenter from "./components/CardImgCenter/CardImgCenter"
import CardImgLeft from "./components/CardImgLeft/CardImgLeft"

import InicioSection from "./features/inicio/InicioSection"
import MainLayout from "./layouts/MainLayout"



import desarrollo_org from "./assets/icons/servicios/desarrollo-org.svg"
import capacitacion from "./assets/icons/servicios/capacitacion.svg"
import reclutamiento from "./assets/icons/servicios/reclutamiento.svg"
import FilosofiaSection from "./features/FilosofiaSection/FilosofiaSection"
import ValoresSection from "./features/ValoresSection/ValoresSection"
import ServiciosSection from "./features/servicios/components/ServiciosSection"
import AgentesSection from "./features/agentes/components/AgentesSection"
import ContactoSection from "./features/contacto/components/ContactoSection"


function App() {


  return (
    <MainLayout>

        <InicioSection />

        <FilosofiaSection />

        <ValoresSection />

        <ServiciosSection />

        {/* <div className="grid grid-cols-3 p-20 px-100 gap-10">
            <CardImgCenter svgIcono={desarrollo_org} titulo={"Desarrollo Organizacional"}>
                <h3 className="
                    font-[Montserrat]
                    text-2xl
                ">
                    Desarrollo Organizacional
                </h3>
                <p>Diseñamos estrategias para fortalecer la estructura de tu empresa y potenciar tu equipo.</p>
            </CardImgCenter>

            <CardImgCenter svgIcono={capacitacion} titulo={"Capacitación y Talento"}>
                <h3 className="
                    font-[Montserrat]
                    text-2xl
                ">
                    Capacitación y Talento
                </h3>
                <p>Creamos programas de crecimiento personalizados para nutrir el capital humano y desarrollar tu equipo.</p>
            </CardImgCenter>

            <CardImgCenter svgIcono={reclutamiento} titulo={"Reclutamiento y Selección"}>
                <h3 className="
                    font-[Montserrat]
                    text-2xl
                ">
                    Reclutamiento y Selección
                </h3>
                <p>Encontramos el talento adecuado y desarrollamos bancos de talentos para tus necesidades.</p>
            </CardImgCenter>
            <CardImgCenter svgIcono={desarrollo_org} titulo={"Desarrollo Organizacional"}>
                <h3 className="
                    font-[Montserrat]
                    text-2xl
                ">
                    Desarrollo Organizacional
                </h3>
                <p>Diseñamos estrategias para fortalecer la estructura de tu empresa y potenciar tu equipo.</p>
            </CardImgCenter>

            <CardImgCenter svgIcono={capacitacion} titulo={"Capacitación y Talento"}>
                <h3 className="
                    font-[Montserrat]
                    text-2xl
                ">
                    Capacitación y Talento
                </h3>
                <p>Creamos programas de crecimiento personalizados para nutrir el capital humano y desarrollar tu equipo.</p>
            </CardImgCenter>

            <CardImgCenter svgIcono={reclutamiento} titulo={"Reclutamiento y Selección"}>
                <h3 className="
                    font-[Montserrat]
                    text-2xl
                ">
                    Reclutamiento y Selección
                </h3>
                <p>Encontramos el talento adecuado y desarrollamos bancos de talentos para tus necesidades.</p>
            </CardImgCenter>
        </div> */}


        <AgentesSection />

        <ContactoSection />

    </MainLayout>
  )
}

export default App
