import IconoCirculo from "../IconoCirculo/IconoCirculo";




{/* <div className="
    relative
    border-l-2 border-r-2 border-b-2 border-solid border-[#4a2c85ff]
    border-t-[7px] border-t-transparent
    [border-image:linear-gradient(121deg,#581CA0_10%,#371C9C_90%)_1]     
    px-5 py-6
"> */}


export default function CardImgCenter({svgIcono, titulo, children}) {
    
    
    return (
        <div className="relative max-w-[50vw] h-full"> 
            {/* Border top */}
            <div class="
                absolute -top-1 left-0 z-10
                w-full
                rounded-t-lg bg-[linear-gradient(121deg,#581CA0_10%,#371C9C_90%)] p-[3.5px]
            ">
            </div>

            {/* Card */}
            <div className="
                relative
                bg-[#0d0a2cbf]
                border-2 border-solid border-[#4a2c85ff]
                rounded-t-sm rounded-b-[6.3px]
                px-5 py-6
                h-full
            ">
                <div className="
                    absolute z-11
                    -top-8 left-1/2 -translate-x-1/2
                ">
                    <IconoCirculo svgIcono={svgIcono} titulo={titulo}/>
                </div>

                {/* Contenido */}
                <div className="
                    flex flex-col gap-2
                    text-white 
                
                ">
                    {children}
                </div>
            </div>
        </div>
    )

}