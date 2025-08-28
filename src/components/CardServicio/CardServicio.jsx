

// El width se debe setear en el elemento que contenga a este (ej. un grid o un Carousel que contenga todas las CardServicio)

// Solamente se pone un max width para que el elemento tenga forma de card en todos los escenarios.

export default function CardServicio({imgUrl, nombre, descripcion}){

    return (
        <div className="flex flex-col items-center max-w-[400px] text-center bg-[#f8f8f9] p-[20px]">
            <img src={imgUrl} alt={nombre} className="w-[75px] h-[75px] mb-[15px]"/>

            <h5 className="uppercase font-bold">{nombre}</h5>

            <p className="text-[1rem]">{descripcion}</p>
        </div>
    )
}