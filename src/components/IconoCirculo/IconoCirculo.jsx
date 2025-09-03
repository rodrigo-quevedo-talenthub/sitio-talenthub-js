






export default function IconoCirculo({svgIcono, titulo, type}) {

    let bg = "linear-gradient(121deg,#581CA0_10%,#371C9C_90%)";//default
    
    if (type === "simple") bg = "#481c9e";

    return (
        <div className={`
            inline-block
            rounded-full
            bg-[${bg}]
            p-3.5
        `}>
            <img src={svgIcono} alt={titulo} className="w-6 h-6 brightness-0 invert" />
        </div>
    )
}