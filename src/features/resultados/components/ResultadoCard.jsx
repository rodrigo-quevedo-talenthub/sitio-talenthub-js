

import CirculoSVG from "./CirculoSVG"


export default function ResultadoCard({porcentaje, descripcion}){

    return (
        <div className="
            max-w-95
            mx-auto
        ">

            <div className="relative">
                <CirculoSVG fill={"currentColor"} porcentaje={porcentaje} className="
                    w-full min-w-full h-full min-h-full
                    text-[#4F1C9F]
                    
                "/>
                    <span className="
                        absolute inset-0 
                        flex items-center justify-center
                        font-[Montserrat,sans-serif]
                        font-light
                        text-5xl pl-1 md:text-5xl xl:text-5xl lg:text-[3vw]
                    ">
                        {`${porcentaje}%`}
                    </span>
                
            </div>


            <p className="
                text-center
                text-lg
                px-5
            ">
                {descripcion}
            </p>
        </div>
    )
}