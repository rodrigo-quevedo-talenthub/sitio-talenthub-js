import React from 'react';
import NuestraHistoriaBG from '../../assets/background/bg-nuestrahistoria-section.png';

export default function NuestraHistoriaSection() {
    return (

        <section
            className="relative bg-cover bg-center bg-no-repeat px-4 py-32"
            style={{backgroundImage: `url(${NuestraHistoriaBG}`}}
        >
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative max-w-5xl mx-auto space-y-6 text-white">
                <h2 className="text-4xl font-bold">
                    Nuestra Historia
                </h2>
                <p className="text-lg leading-relaxed">
                    TalentHub nació de una idea y de una gran pasión. Con solo un 10% de capital y un 90% de convicción,
                    nos pusimos un desafío: democratizar la tecnología para las empresas, sin importar su tamaño o su
                    ubicación.
                </p>
                <p>
                    Nuestra misión siempre ha sido clara: ser el puente entre el talento y el desarrollo a través de la
                    tecnología.
                </p>

            </div>

        </section>

    );
}