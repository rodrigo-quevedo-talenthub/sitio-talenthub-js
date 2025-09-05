





export default function ContenidoCardContacto({titulo, hrefContacto, textoContacto}){

    return (
    <>
        <h3 className="
            text-center md:text-left
            text-2xl
            font-normal
            my-1
        ">
            {titulo}
        </h3>

        <a href={hrefContacto} className="
            text-[#8252e0ff]
            text-center md:text-left
            cursor-pointer
            text-lg
            font-bold
            underline
        ">
            {textoContacto}
        </a>

    </>
    )
}