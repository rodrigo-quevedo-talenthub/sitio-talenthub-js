import BannerConIcono from "./BannerConIcono"



export default function Solucion ({iconoSVG, titulo, textoElement}){

    return (
        <div className="mb-8">

            <BannerConIcono iconoSVG={iconoSVG}/>

            <div className="px-5">

                <h3 className="
                    text-2xl font-semibold
                    my-3
                    text-center md:text-left
                ">
                    {titulo}
                </h3>

                <div className="
                    text-lg
                    text-center md:text-left
                ">
                    {textoElement}
                </div>

            </div>
           
        </div>
    )
}