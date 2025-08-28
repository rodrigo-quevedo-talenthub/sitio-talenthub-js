import CardServicio from "./components/CardServicio/CardServicio"


function App() {


  return (
    <>
        {/* test tailwind OK */}
        {/* <h1 className="bg-black text-white font-bold text-8xl">test</h1> */}

        {/* Poner los componentes aca para probarlos */}
        <CardServicio 
            imgUrl={"https://talenthubai.com.ar/images/Iconos/Servicios/1.DesarrolloOrganizacional.png"}
            nombre={"Desarrollo Organizacional"}
            descripcion={"Creamos organizaciones ágiles, eficientes y con un fuerte sentido de propósito, alineando la estrategia, la estructura y la cultura."}
        />

        <CardServicio 
            imgUrl={"https://talenthubai.com.ar/images/Iconos/Servicios/2.DesarrolloTalento.png"}
            nombre={"Desarrollo del Talento"}
            descripcion={"Diseñamos programas de capacitación a medida, basados en las necesidades de tu empresa y sus empleados, utilizando metodologías innovadoras."}
        />


    </>
  )
}

export default App
