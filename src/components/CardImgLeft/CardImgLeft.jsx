






export default function CardImgLeft({svgIcono, titulo, children}) {
    
    return (
        <div className="
            flex flex-col gap-4 items-start
            border-[0.0625em] border-[#481C9E] rounded-lg
            bg-[linear-gradient(121deg,#3c136dff_10%,#26136cff_90%)]
            text-white
            max-w-[50vw]
            p-5
        ">
            
            <div className="
                inline-block
                rounded-full
                bg-[#481c9e]
                p-3
            ">
                <img src={svgIcono} alt={titulo} className="w-7 h-7 brightness-0 invert" />
            </div>

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