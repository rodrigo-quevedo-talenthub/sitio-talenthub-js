import CardImgCenter from "./components/CardImgCenter/CardImgCenter"
import CardImgLeft from "./components/CardImgLeft/CardImgLeft"

import InicioSection from "./features/inicio/InicioSection"
import MainLayout from "./layouts/MainLayout"


// import historiaBG from "./assets/background/bg-nuestrahistoria-section.png"
import mision from "./assets/icons/filosofia/mision.svg"
import vision from "./assets/icons/filosofia/vision.svg"

import desarrollo_org from "./assets/icons/servicios/desarrollo-org.svg"
import capacitacion from "./assets/icons/servicios/capacitacion.svg"
import reclutamiento from "./assets/icons/servicios/reclutamiento.svg"


function App() {


  return (
    <MainLayout>

        <InicioSection />
        {/* <InicioSection /> */}
        {/* <div 
            style={{ backgroundImage: `url(${historiaBG})`}}
            className="
                h-[90vh] 
                bg-cover bg-no-repeat bg-center
        ">

        </div> */}
        

        <div className="grid grid-cols-2 p-20 gap-10">
            <CardImgLeft 
                svgIcono={mision}
                titulo={"Misión"}
                type={"simple"}
            >
                <p>Impulsar el crecimiento de las organizaciones a través de la sinergia entre el talento humano y la tecnología, llevando soluciones innovadoras y accesibles a cada empresa.</p>
            </CardImgLeft>

            <CardImgLeft 
                svgIcono={vision}
                titulo={"Visión"}
                type={"simple"}
            >
                <p>Ser el puente que conecta el talento con el desarrollo tecnológico, posicionándonos como líderes en el mercado por nuestra capacidad de integrar lo mejor de ambos mundos.</p>
            </CardImgLeft>

        </div>




        <div className="grid grid-cols-3 p-20 px-100 gap-10">
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
        </div>



    </MainLayout>
  )
}

export default App
