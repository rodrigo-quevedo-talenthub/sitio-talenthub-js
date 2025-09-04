






export default function IconoCirculo({svgIcono, titulo, type}) {

    let bg_default = "linear-gradient(121deg,#581CA0_10%,#371C9C_90%)";
    let bg_simple = "#481c9e";

    console.log("type:", type)

    return (
        <div className={`
            inline-block
            rounded-full
            bg-[${type === "simple"? bg_simple: bg_default}]
            p-3.5
        `}>
            <img src={svgIcono} alt={titulo} className="w-6 h-6 brightness-0 invert" />
        </div>
    )
}