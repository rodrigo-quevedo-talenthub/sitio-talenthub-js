
// import bg from "../assets/background/bg.png"
import bg from "../assets/background/test/bg.png"


export default function MainLayout({children}){


    return (
    <>
        {/* TODO: Header */}

        <main  
            // En este caso Tailwind no sirve para setear la URL del background, porque Tailwind necesita una URL estatica, y las URL de assets/ no lo son.
            style={{ backgroundImage: `url(${bg})`}}
            className="bg-cover bg-no-repeat bg-center bg-fixed font-[Heebo,sans-serif] font-extralight"
        >
            
            {children}
        
        </main>


        {/* TODO: Footer */}
    </>
    )
}