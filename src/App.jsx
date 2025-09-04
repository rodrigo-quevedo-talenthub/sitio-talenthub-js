import CardServicio from "./components/CardServicio/CardServicio"
import InicioSection from "./features/inicio/InicioSection"
import MainLayout from "./layouts/MainLayout"
import NuestraHistoriaSection from "./features/nuestra_historia/NuestraHistoriaSection.jsx";
import ComoEmpezamosSection from "./features/como_empezamos/ComoEmpezamosSection.jsx";


function App() {


    return (
        <MainLayout>

            <InicioSection/>
                {/* <InicioSection/>
                <InicioSection/> */}


            <NuestraHistoriaSection>
                {/* <NuestraHistoriaSection/>
                <NuestraHistoriaSection/> */}
            </NuestraHistoriaSection>


            <ComoEmpezamosSection>
                {/* <ComoEmpezamosSection/>
                <ComoEmpezamosSection/> */}
            </ComoEmpezamosSection>

        </MainLayout>
    )
}

export default App
