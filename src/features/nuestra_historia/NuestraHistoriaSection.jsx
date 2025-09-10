import React from 'react';
import NuestraHistoriaBG from '../../assets/background/bg-nuestrahistoria-section.png';

export default function NuestraHistoriaSection() {
    return (

        <section
            className="relative bg-cover bg-center bg-no-repeat py-24 "
            style={{backgroundImage: `url(${NuestraHistoriaBG}`}}
        >
            <div className="absolute inset-0 bg-[#0d0a2ccc]"></div> 

            <div className="relative w-[80%] lg:w-[80%] max-w-5xl mx-auto space-y-6 text-[#F3F1F2]">
                
                <h2 className="text-4xl font-bold">
                    Nuestra Historia
                </h2>

                <p className="text-lg leading-relaxed">
                    TalentHub nació de una idea y de una gran pasión. <span className="font-semibold">Con solo un 10% de capital y un 90% de convicción, nos pusimos un desafío:</span>
                    democratizar la tecnología para las empresas, sin importar su tamaño o su ubicación.
                </p>

                <p className="text-lg leading-relaxed">
                    Nuestra misión siempre ha sido clara: ser el puente entre el talento y el desarrollo a través de la tecnología.
                </p>

            </div>

        </section>

    );
}