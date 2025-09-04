import CardImgLeft from "../../components/CardImgLeft/CardImgLeft"

import mision from "../../assets/icons/filosofia/mision.svg"
import vision from "../../assets/icons/filosofia/vision.svg"


export default function FilosofiaSection(){

    return (
        <section className="
            text-white
            flex justify-center items-center
            w-[100%]
            min-h-[80vh] md:min-h-[70vh]
            py-20
            bg-[#0d0a2cbf] backdrop-blur-[20px] backdrop-saturate-[170%]
        ">
            <div className="
                text-center lg:text-left
                w-[75%] lg:w-[65%]  
            ">
           
                <h2 className="
                    text-4xl 
                    font-bold
                    mb-10 md:mb-20
                ">
                    Nuestra Filosofía
                </h2>

                <div className="
                    flex flex-col items-stretch
                    lg:grid lg:grid-cols-2 lg:p-0 
                    gap-10
                ">
                    <CardImgLeft 
                        svgIcono={mision}
                        titulo={"Misión"}
                        type={"simple"}
                    >
                        <p>Impulsar el crecimiento de las organizaciones a través de la sinergia entre el talento humano y la tecnología, llevando soluciones innovadoras y accesibles a cada empresa.</p>
                    </CardImgLeft>
        
                    <CardImgLeft 
                        svgIcono={vision}
                        titulo={"Visión"}
                        type={"simple"}
                    >
                        <p>Ser el puente que conecta el talento con el desarrollo tecnológico, posicionándonos como líderes en el mercado por nuestra capacidad de integrar lo mejor de ambos mundos.</p>
                    </CardImgLeft>
        
                </div>

            </div>
        </section>
    )
}