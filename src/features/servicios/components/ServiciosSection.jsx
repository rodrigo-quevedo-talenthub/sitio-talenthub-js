import CardImgCenter from "../../../components/CardImgCenter/CardImgCenter";


import desarrollo from "../../../assets/icons/servicios/desarrollo-org.svg"
import capacitacion from "../../../assets/icons/servicios/capacitacion.svg"
import reclutamiento from "../../../assets/icons/servicios/reclutamiento.svg"
import cambio from "../../../assets/icons/servicios/cambio.svg"
import digital from "../../../assets/icons/servicios/digital.svg"
import procesos from "../../../assets/icons/servicios/procesos.svg"
import ContenidoCard from "./ContenidoCard";




export default function ServiciosSection(){

    return (
        <section className="
            text-white
            flex justify-center items-center
            w-[100%]
            min-h-[80vh] md:min-h-[70vh]
            py-20
            bg-[#0d0a2cbf] backdrop-blur-[20px] backdrop-saturate-[170%]
        ">
            <div className="
                text-center lg:text-left
                w-[75%] lg:w-[80%]  
            ">

                <h2 className="
                    text-4xl lg:text-5xl 
                    font-normal
                    mb-5
                ">
                    Nuestros Servicios
                </h2>

                <h3 className="
                    text-4xl 
                    font-bold
                    mb-10 md:mb-20
                ">
                    Servicios de Consultoría Estratégica
                </h3>

                
                <div className="
                    flex flex-col items-stretch
                    md:grid md:grid-cols-2 md:p-0 
                    lg:grid lg:grid-cols-3 lg:p-0 
                    gap-x-4 gap-y-10
                ">
                    <CardImgCenter svgIcono={desarrollo} titulo={"Desarrollo Organizacional"}>
                        <ContenidoCard titulo={"Desarrollo Organizacional"} descripcion={"Diseñamos estrategias para fortalecer la estructura de tu empresa y potenciar tu equipo."} />                      
                    </CardImgCenter>

                    <CardImgCenter svgIcono={capacitacion} titulo={"Capacitación y Talento"}>
                        <ContenidoCard titulo={"Capacitación y Talento"} descripcion={"Creamos programas de crecimiento personalizados para nutrir el capital humano y desarrollar tu equipo."} />                      
                    </CardImgCenter>

                    <CardImgCenter svgIcono={reclutamiento} titulo={"Reclutamiento y Selección"}>
                        <ContenidoCard titulo={"Reclutamiento y Selección"} descripcion={"Encontramos el talento adecuado y desarrollamos bancos de talentos para tus necesidades."} />                      
                    </CardImgCenter>

                    <CardImgCenter svgIcono={cambio} titulo={"Gestión del Cambio"}>
                        <ContenidoCard titulo={"Gestión del Cambio"} descripcion={"Acompañamos la transformación organizacional, asegurando una transición fluida a nuevas metodologías y tecnologías."} />                      
                    </CardImgCenter>

                    <CardImgCenter svgIcono={digital} titulo={"Estrategia Digital"}>
                        <ContenidoCard titulo={"Estrategia Digital"} descripcion={"Definimos e implementamos tu estrategia digital, optimizando tu presencia y operaciones online."} />                      
                    </CardImgCenter>

                    <CardImgCenter svgIcono={procesos} titulo={"Optimización de Procesos"}>
                        <ContenidoCard titulo={"Optimización de Procesos"} descripcion={"Analizamos y rediseñamos procesos para incrementar eficiencia, reducir costos y mejorar la calidad."} />                      
                    </CardImgCenter>
                </div>

            </div>



        </section>
    )
}