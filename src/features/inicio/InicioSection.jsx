import logoIcon from "../../assets/logo/logo-icon.avif"


export default function InicioSection(){
    
    
    return (
        <section className="
            flex justify-center items-center
            backdrop-blur-[20px] backdrop-saturate-[170%] bg-[#0d0a2cbf] 
            w-[100%]
            min-h-[90vh]
        ">
            <div className="
                flex items-center justify-center
                flex-col md:flex-row
                text-center md:text-left
                w-[85%] lg:w-[75%] 
            ">

                <img src={logoIcon} alt="TalentHub" className="
                    size-40 sm:size-80 xl:size-90 2xl:size-120"
                />

                <div className="
                    flex flex-col 
                    gap-8 lg:gap-15
                    text-white 
                ">
                    <h1 className="
                        font-bold
                        text-5xl 2xl:text-6xl 
                    ">
                        TalentHub
                    </h1>

                    <strong className="
                        font-[Montserrat,sans-serif] font-normal 
                        text-2xl 2xl:text-3xl 
                    ">
                        Donde el Potencial Humano y la Tecnología se Encuentran
                    </strong>


                    <p className="
                        text-lg 2xl:text-2xl
                    ">
                        Somos una startup tecnológica nacida para ayudar a las empresas a profesionalizarse y crecer. Conectamos el desarrollo del talento humano con herramientas de vanguardia, llevando soluciones innovadoras a empresas de todos los tamaños.
                    </p>
                </div>

            </div>

        </section>
    )
}