import icFile from "../../../assets/icons/software/ic_file.svg"

import Solucion from "./Solucion";
import StickNote from "../../../components/StickNote/StickNote";

import desarrollo from "../../../assets/icons/soluciones/desarrollo.svg"
import agentes from "../../../assets/icons/soluciones/agentes.svg"
import implementacion from "../../../assets/icons/soluciones/implementacion.svg"

export default function SoftwareYAppsSection() {

    return (
        <section className="bg-[#481c9ebf] backdrop-blur-[20px] backdrop-saturate-[170%]
        py-20 px-5">

            <div className="w-[90%] lg:w-[80%] mx-auto text-[#F3F1F2] leading-relaxed">
                
                <h2 className="
                    text-4xl font-bold
                    mb-10
                ">
                    Software & Apps: Soluciones a Medida
                </h2>

                <div className="mb-5">

                    <Solucion 
                        iconoSVG={desarrollo}
                        titulo={"Desarrollo a Medida"}
                        textoElement={
                            <p>
                                Diseñamos apps y software para automatizar tus procesos, reduciendo costos y optimizando la productividad. Nuestro modelo de negocio nos permite ofrecerte soluciones a costos más accesibles y con una aplicación casi instantánea.
                            </p>
                        }
                        />

                    <Solucion 
                        iconoSVG={agentes}
                        titulo={"Agentes de IA"}
                        textoElement={
                            <p>
                                Creamos "empleados virtuales" que se integran a tus sistemas para llevar a cabo tareas repetitivas y liberar a tu equipo humano, permitiéndoles enfocarse en las tareas de mayor valor. Contamos con nuestros propios agentes y también los desarrollamos 100% a la medida de tu negocio.
                            </p>
                        }   
                    />

                    <Solucion
                        iconoSVG={implementacion}
                        titulo={"Implementación Acompañada"}
                        textoElement={
                            <p>
                                No te dejamos solo. Acompañamos todo el proceso de adopción con capacitación y soporte
                                continuo.
                            </p>
                        }
                    />

                </div>

                <StickNote>
                    <p>
                        <span className="font-bold">90% de nuestros clientes</span> reportan recuperación de la inversión en menos de <span className="font-bold">2 meses</span> tras implementar nuestras soluciones de software.
                    </p>
                </StickNote>

            </div>


        </section>
    );

}