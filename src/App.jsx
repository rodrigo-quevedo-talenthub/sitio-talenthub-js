import CardImgCenter from "./components/CardImgCenter/CardImgCenter"
import CardImgLeft from "./components/CardImgLeft/CardImgLeft"

import InicioSection from "./features/inicio/InicioSection"
import MainLayout from "./layouts/MainLayout"


// import historiaBG from "./assets/background/bg-nuestrahistoria-section.png"
import mision from "./assets/icons/mision.svg"
import vision from "./assets/icons/vision.svg"


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
        {/* <InicioSection />
        <InicioSection /> */}
        <CardImgLeft 
            svgIcono={mision}
            titulo={"Misión"}
        >
            <p>Impulsar el crecimiento de las organizaciones a través de la sinergia entre el talento humano y la tecnología, llevando soluciones innovadoras y accesibles a cada empresa.</p>
        </CardImgLeft>

        <CardImgLeft 
            svgIcono={vision}
            titulo={"Visión"}
        >
            <p>Ser el puente que conecta el talento con el desarrollo tecnológico, posicionándonos como líderes en el mercado por nuestra capacidad de integrar lo mejor de ambos mundos.</p>
        </CardImgLeft>



    </MainLayout>
  )
}

export default App
