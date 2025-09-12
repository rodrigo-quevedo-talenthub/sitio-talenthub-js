






export default function IconoCirculo({svgIcono, titulo, type}) {

    // console.log("type:", type)

    return (
        <div className={`
            inline-block
            rounded-full
            ${type=== "simple"? "bg-[#481C9E]": "bg-[linear-gradient(121deg,#581CA0_10%,#371C9C_90%)]"}
            p-3.5
        `}>
            <img src={svgIcono} alt={titulo} className="w-6 h-6 brightness-0 invert" />
        </div>
    )
}