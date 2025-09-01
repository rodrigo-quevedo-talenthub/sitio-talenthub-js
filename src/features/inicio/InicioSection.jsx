import logoIcon from "../../assets/logo/logo-icon.avif"


export default function InicioSection(){
    
    
    return (
        <section className="
        flex items-center justify-center 
        px-[7.5%] 
        backdrop-blur-[20px] backdrop-saturate-[170%] bg-[#0d0a2cbf] 
        min-h-[90vh]
        ">

            <img src={logoIcon} alt="TalentHub" className="size-140"/>

            <div className="text-white flex flex-col gap-15">
                <h1 className="text-6xl font-bold">TalentHub</h1>

                <strong className="font-[Montserrat,sans-serif] font-normal text-3xl">Donde el Potencial Humano y la Tecnología se Encuentran</strong>


                <p className="text-lg">Somos una startup tecnológica nacida para ayudar a las empresas a profesionalizarse y crecer. Conectamos el desarrollo del talento humano con herramientas de vanguardia, llevando soluciones innovadoras a empresas de todos los tamaños.</p>
            </div>

        </section>
    )
}