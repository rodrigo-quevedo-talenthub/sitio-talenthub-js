import ResultadoCard from "./ResultadoCard";








export default function ResultadosSection(){


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
                    text-5xl
                    font-bold
                    mb-10
                ">
                    Resultados que Transforman
                </h2>

                <p className="
                    text-lg
                    mb-3.5
                ">
                    En TalentHub, nuestro éxito se mide por el impacto real y medible en el crecimiento de nuestros clientes.
                </p>

                
                <div className="
                    flex flex-col items-stretch
                    md:grid md:grid-cols-2 md:p-0 
                    lg:grid lg:grid-cols-4 lg:p-0 
                    gap-x-4 gap-y-10
                ">
                   <ResultadoCard 
                        porcentaje={50}
                        descripcion={"Ahorro en costos de adquisición de talento, optimizando el tiempo de selección."}
                   />
                   <ResultadoCard 
                        porcentaje={30}
                        descripcion={"Incremento en la productividad de equipos clave, optimizando el flujo de trabajo."}
                   />
                   <ResultadoCard 
                        porcentaje={50}
                        descripcion={"Reducción en el tiempo promedio de contratación, cubriendo puestos críticos con agilidad."}
                   />
                   <ResultadoCard 
                        porcentaje={40}
                        descripcion={"Mejora en la tasa de retención de nuevos empleados, facilitando su integración."}
                   />
                </div>


            
            
            </div>
        </section>
    )
}