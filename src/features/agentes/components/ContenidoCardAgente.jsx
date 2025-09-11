





export default function ContenidoCardAgente({titulo, subtitulo, descripcion}){

    return (
    <>
        <h3 className="
            text-center
            text-2xl
            font-bold
            my-2
        ">
            {titulo}
        </h3>

        <h4 className="
            text-lg
            mb-2
        ">
            {subtitulo}
        </h4>

        <p className="
            text-lg
        ">
            <span className="font-bold">Especialidad: </span>{descripcion}
        </p>
    </>
    )
}