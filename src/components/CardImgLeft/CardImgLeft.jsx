






// Simplemente hay que usar grid en un container y las cards se adaptan al tamaño establecido en ese grid.

import IconoCirculo from "../IconoCirculo/IconoCirculo";

export default function CardImgLeft({svgIcono, titulo, type, children}) {
    
    return (
        <div className="
            flex flex-col gap-4 items-start
            border-[0.0625em] border-[#481C9E] rounded-lg
            bg-[linear-gradient(121deg,#3c136dff_10%,#26136cff_90%)]
            text-white
            max-w-[50vw]
            p-5
        ">
            <IconoCirculo svgIcono={svgIcono} titulo={titulo} type={type}/>


            <h3 className="
                font-[Montserrat]
                font-semibold
                text-2xl
            ">
                {titulo}
            </h3>

            <div className="text-[18px]">
                {children}
            </div>

        </div>
    )

}