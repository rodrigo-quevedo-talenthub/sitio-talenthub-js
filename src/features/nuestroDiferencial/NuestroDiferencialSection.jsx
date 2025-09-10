import React from 'react';

export default function NuestraDiferencialSection() {
    return (

        <section
            className="relative bg-cover bg-center bg-no-repeat py-24 "
        >
            <div className="absolute inset-0 bg-[#481c9ebf] backdrop-blur-[20px] backdrop-saturate-[170%]"></div>

            <div className="relative w-[80%] lg:w-[80%] max-w-5xl mx-auto space-y-6 text-[#F3F1F2]">

                <h2 className="text-4xl font-bold leading-12">
                    Nuestro Diferencial: <br/> Un Proceso Humano y Accesible
                </h2>

                <p className="text-lg leading-relaxed">
                    Sabemos que la tecnología puede parecer compleja. Por eso, nuestro mayor valor es <span className="font-semibold">trabajar y diseñar juntos cada proceso. </span>
                    Te acompañamos en cada etapa para que entiendas cómo aplicar la tecnología y cómo puede convertirse en tu mejor aliado.
                </p>

                <p className="text-lg leading-relaxed">
                    Contamos con un equipo de soporte y capacitación dedicado a asegurar que la implementación sea sencilla y
                    que nadie se quede atrás. Además, nuestras soluciones están pensadas para que no necesites grandes inversiones para aplicarlas.
                </p>

            </div>

        </section>

    );
}