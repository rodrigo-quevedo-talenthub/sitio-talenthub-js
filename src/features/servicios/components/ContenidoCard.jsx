




export default function ContenidoCard({titulo, descripcion}){

    return (
    <>
        <h4 className="
           text-2xl
           my-2
        ">
            {titulo}
        </h4>

        <p className="
            text-lg
        ">
            {descripcion}
        </p>
    </>
    )
}