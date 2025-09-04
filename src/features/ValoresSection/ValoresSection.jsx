import CardImgLeft from "../../components/CardImgLeft/CardImgLeft"

import excelencia from "../../assets/icons/valores/excelencia-humana.svg"
import innovacion from "../../assets/icons/valores/innovacion.svg"
import integridad from "../../assets/icons/valores/integridad.svg"



export default function ValoresSection(){

    return (
        <section className="
            text-white
            flex justify-center items-center
            w-[100%]
            min-h-[100vh] md:min-h-[80vh] 
            py-20
            bg-[#481c9ebf] backdrop-blur-[20px] backdrop-saturate-[170%]
        ">
            <div className="
                text-center lg:text-left
                w-[75%] lg:w-[80%]  
            ">

         
                <h2 className="
                    text-4xl 
                    font-bold
                    mb-10 lg:mb-20
                ">
                    Nuestros Valores
                </h2>

                <div className="
                    flex flex-col items-stretch
                    lg:grid lg:grid-cols-3
                    gap-4
                ">
                    <CardImgLeft
                        svgIcono={innovacion}
                        titulo={"Innovación Disruptiva"}
                    >
                        <p>No seguimos las tendencias, las creamos. Abrazamos la tecnología de <span className="font-bold">vanguardia</span> para darte soluciones que te preparan para el futuro.</p>
                    </CardImgLeft>
                   
                    <CardImgLeft 
                        svgIcono={integridad}
                        titulo={"Integridad Impecable"}
                    >
                        <p>Tu confianza es nuestro mayor activo. Somos una empresa que <span className="font-bold">honra su palabra</span> y se compromete con cada proyecto, desde el primer contacto hasta el resultado final.</p>
                    </CardImgLeft>

                    <CardImgLeft 
                        svgIcono={excelencia}
                        titulo={"Excelencia Humana"}
                    >
                        <p>Nuestra propuesta de valor se construye sobre la empatía y el trato personal. Cada interacción es única porque entendemos que detrás de cada desafío hay personas con sueños.</p>
                    </CardImgLeft>
        
                </div>

            </div>
        </section>
    )
}