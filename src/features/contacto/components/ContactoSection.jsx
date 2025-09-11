import CardImgCenter from "../../../components/CardImgCenter/CardImgCenter"
import ContenidoCardContacto from "./ContenidoCardContacto"


import telefono from "../../../assets/icons/contacto/telefono.svg"
import correo from "../../../assets/icons/contacto/correo.svg"
import instagram from "../../../assets/icons/contacto/instagram.svg"



export default function ContactoSection(){

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
                w-[75%] lg:w-[80%]  
            ">

                <h2 className="
                    text-4xl
                    font-bold
                    mb-10
                ">
                    Contacto
                </h2>

                <p className="
                    text-lg
                    mb-12
                ">
                    ¿Listo para transformar tu negocio? Contáctanos a través de los siguientes canales:
                </p>

                
                <div className="
                    flex flex-col items-stretch
                    md:grid md:grid-cols-2 md:p-0 
                    lg:grid lg:grid-cols-3 lg:p-0 
                    gap-x-4 gap-y-10
                ">
                    <CardImgCenter svgIcono={telefono} titulo={"Teléfono"}>
                        <ContenidoCardContacto titulo={"Teléfono"} hrefContacto={"tel:+543516854880"} textoContacto={"3516854880"} />    
                    </CardImgCenter>

                    <CardImgCenter svgIcono={correo} titulo={"Correo"}>
                        <ContenidoCardContacto titulo={"Correo"} hrefContacto={"mailto:soporte@talenthubai.com.ar"} textoContacto={"soporte@talenthubai.com.ar"} />   
                    </CardImgCenter>

                    <CardImgCenter svgIcono={instagram} titulo={"Instagram"}>
                        <ContenidoCardContacto titulo={"Instagram"} hrefContacto={"https://www.instagram.com/talenthub_ai"} textoContacto={"@talenthub_ai"} />               
                    </CardImgCenter>

                </div>
            
            
            </div>


        </section>
    )
}