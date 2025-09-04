import React from 'react';
import ComoEmpezamosBG from '../../assets/background/bg-comoempezamos-section.png';
import icInfo from '../../assets/icons/ic_info_circle.svg';

export default function ComoEmpezamosSection() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat px-4 py-30"
            style={{backgroundImage: `url(${ComoEmpezamosBG}`}}
        >
            <div className="absolute inset-0"></div>

            <div className="bg-[#14042E]/75 backdrop-blur-lg rounded-lg max-w-6xl mx-auto py-6">

                <div className="relative max-w-5xl mx-auto space-y-6 py-12 text-white">

                    <h2 className="text-4xl font-bold ">¿Cómo empezamos?</h2>

                    <div className="bg-[#031D47] bg-opacity-90 rounded-lg px-4 py-6 flex items-start gap-3">

                        <div className="px-1">
                            <img src={icInfo} alt={icInfo} className="w-8 h-8 brightness-0 invert"/>
                        </div>

                        <p className="text-lg leading-relaxed">
                            Dar el primer paso puede ser un desafío. Por eso, te ofrecemos un <strong
                            className="text-[#981EE2]">diagnóstico gratuito </strong>
                            para entender tus necesidades, analizar tus procesos y guiarte en el camino hacia la
                            profesionalización y la innovación.
                        </p>

                    </div>

                    {/* CAMBIAR NUMERO Y TEXTO PARA EL MENSAJE */}
                    <a
                        href="https://wa.me/111111111111?text=Hola!%20Quisiera%20solicitar%20un%20diagn%C3%B3stico%20gratuito"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#981EE2] text-white px-6 py-3 rounded-md font-semibold
                        hover:bg-[#7F1CC4] transition-colors duration-200"
                    >
                        Solicitar diagnóstico gratuito
                    </a>

                </div>

            </div>

        </section>
    )
}