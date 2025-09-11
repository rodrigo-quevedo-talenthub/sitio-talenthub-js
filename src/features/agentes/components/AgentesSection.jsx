import CardImgCenter from "../../../components/CardImgCenter/CardImgCenter";
import ContenidoCardAgente from "./ContenidoCardAgente";
import StickNote from "../../../components/StickNote/StickNote";

import nexa from "../../../assets/icons/agentes/nexa.svg"
import talentina from "../../../assets/icons/agentes/talentina.svg"
import xloopi from "../../../assets/icons/agentes/xloopi.svg"
import orby from "../../../assets/icons/agentes/orby.svg"
import berto from "../../../assets/icons/agentes/berto.svg"
import quanto from "../../../assets/icons/agentes/quanto.svg"






export default function AgentesSection(){

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
                    text-4xl
                    font-bold
                    mb-20
                ">
                    Algunos de Nuestros Agentes IA
                </h2>

                
                <div className="
                    flex flex-col items-stretch
                    md:grid md:grid-cols-2 md:p-0 
                    lg:grid lg:grid-cols-3 lg:p-0 
                    gap-x-4 gap-y-10
                ">
                    <CardImgCenter svgIcono={nexa} titulo={"Nexa"}>
                        <ContenidoCardAgente titulo={"Nexa"} subtitulo={"La Vidente de Datos"} descripcion={"Predice y analiza estratégicamente. Detecta patrones, anticipa oportunidades, y predice fugas o picos de demanda."}  />                      
                    </CardImgCenter>

                    <CardImgCenter svgIcono={talentina} titulo={"Talentina"}>
                        <ContenidoCardAgente titulo={"Talentina"} subtitulo={"La Reclutadora Incansable"} descripcion={"Selecciona y gestiona talento. Filtra currículums, entrevista sin sesgos y detecta potencial rápidamente."} />                      
                    </CardImgCenter>

                    <CardImgCenter svgIcono={xloopi} titulo={"XLoopi"}>
                        <ContenidoCardAgente titulo={"XLoopi"} subtitulo={"El Rey de la Productividad"} descripcion={"Automatiza tareas. Carga datos, crea flujos automáticos y realiza tareas repetitivas con precisión."} />                      
                    </CardImgCenter>

                    <CardImgCenter svgIcono={orby} titulo={"Orby"}>
                        <ContenidoCardAgente titulo={"Orby"} subtitulo={"La Generadora de Ideas"} descripcion={"Genera creatividad y contenido. Redacta textos, propone campañas y crea imágenes."} />                      
                    </CardImgCenter>

                    <CardImgCenter svgIcono={berto} titulo={"Berto"}>
                        <ContenidoCardAgente titulo={"Berto"} subtitulo={"El Organizador"} descripcion={"Gestiona mails, reuniones y caos digital. Prioriza bandeja de entrada y resume documentos extensos."} />                      
                    </CardImgCenter>

                    <CardImgCenter svgIcono={quanto} titulo={"Quanto"}>
                        <ContenidoCardAgente titulo={"Quanto"} subtitulo={"El Guardián de los Números"} descripcion={"Controla finanzas y proyecciones. Revisa balances, genera reportes financieros y detecta inconsistencias."} />                      
                    </CardImgCenter>
                </div>

                <div className="mt-4.5">
                    <StickNote>
                        <p>
                            <span className="font-bold">¿Sabías que</span> estos agentes IA pueden automatizar hasta el <span className="font-bold">70% de tus tareas diarias</span>, liberando tiempo para actividades estratégicas?
                        </p>
                    </StickNote>
                </div>
            
            
            </div>


        </section>
    )
}