import React from "react";
import icFlecha from "../../assets/icons/software/ic_banner_arrow.svg";
import icFile from "../../assets/icons/software/ic_file.svg"

export default function SoftwareYAppsSection() {

    return (
        <section className="bg-[#481c9ebf] backdrop-blur-[20px] backdrop-saturate-[170%]
        py-20 px-5">

            <div className="relative max-w-5xl mx-auto space-y-6 py-12 text-[#F3F1F2] leading-relaxed">
                <h2 className="text-4xl font-bold">Software & Apps: Soluciones a Medida</h2>

                {/* DESARROLLO A MEDIDA*/}
                <div>
                    {/*ICONO*/}


                    <div className="px-6 mb-8">

                        <div>
                            <h3 className="text-xl font-bold mb-3">Desarrollo a medida</h3>

                            <p>
                                Diseñamos apps y software para automatizar tur procesos, reduciendo costros y
                                optimizando la
                                productvidad. Nuestro modelo de negocio nos permite ofrecerte soluciones a costos más
                                accesibles
                                y con una aplicación casi instantánea.
                            </p>


                        </div>
                    </div>
                </div>

                    {/* AGENTES DE IA */}
                    <div className="px-6 py-6 mb-8">

                        {/* ICONO */}

                        <div>
                            <h3 className="text-xl font-bold mb-3">Agentes de IA</h3>
                            <p>
                                Creamos "empleados virtuales" que se integran a tus sitemas para llevar a cabo tareas
                                repetitivas
                                y liberar a tu equipo humano, permitiéndoles enfocarse en las tareas de mayor valor.
                                Contamos con
                                nuestros propios agentes y también los desarrollamos 100% a la medida de tu negocio.
                            </p>
                        </div>

                    </div>

                    <div className="px-6 py-6 mb-8">

                        {/* ICONO */}

                        <div>
                            <h3 className="text-xl font-bold mb-3">Implementación Acompañada</h3>
                            <p>
                                No te dejamos solo. Acompañamos todo el proceso de adopción con capacitación y soporte
                                continuo.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#BC6EED] rounded-lg p-6 max-w-5xl mx-auto mt-6">
                        <div className="flex items-start gap-4">
                            <div>
                            <img src={icFile} alt={""} className="w-8 h-8 mt-1"/>
                            </div>
                            <p className="text-black text-lg leading-relaxed">
                                <strong>90% de nuestros clientes</strong> reportan recuperación de la inversión en menos
                                de <strong>
                                2 meses</strong> tras implementar nuestras soluciones de software.
                            </p>
                        </div>

                    </div>


            </div>


        </section>
    );

}