import React from 'react';
import ComoEmpezamosBG from '../../assets/background/bg-comoempezamos-section.png';
import icInfo from '../../assets/icons/ic_info_circle.svg';

export default function ComoEmpezamosSection() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat px-8 md:px-4 py-30"
            style={{backgroundImage: `url(${ComoEmpezamosBG}`}}
        >

            <div className="bg-[#14042E]/75 backdrop-blur-xs rounded-lg max-w-6xl mx-auto py-6">

                <div className="
                    flex flex-col items-center md:block
                    relative max-w-5xl mx-auto py-12 px-8 text-white">

                    <h2 className="text-3xl md:text-4xl font-bold pb-8">¿Cómo empezamos?</h2>

                    <div className="bg-[#031D47] bg-opacity-90 rounded-lg px-4 py-6 flex items-start gap-3">

                        <img src={icInfo} alt={icInfo} className="w-6 h-6 brightness-0 invert" style={{filter: "invert(79%) sepia(8%) saturate(4715%) hue-rotate(175deg) brightness(101%) contrast(95%)"}}/>

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
                         style={{
                            animation: `
                                pulseGlow 2.5s infinite ease-in,
                                bounce-slight 9.5s infinite
                            `
                            
                        }}
                        className="
                            block
                            w-full text-center md:w-fit md:text-left 
                            text-xl

                            bg-[#981EE2] text-white px-6 py-5 mt-6 rounded-md font-semibold
                            animate-[pulseGlow]
                            hover:bg-[#fff] hover:text-[#981EE2] hover:scale-105 transition-all duration-200"
                    >
                        Solicitar diagnóstico gratuito
                    </a>

                </div>

            </div>

        </section>
    )
}