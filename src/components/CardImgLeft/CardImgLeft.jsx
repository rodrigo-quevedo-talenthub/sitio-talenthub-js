






export default function CardImgLeft({svgIcono, titulo, children}) {
    
    return (
        <div>
            {svgIcono}
            <h3>{titulo}</h3>

            {children}
        </div>
    )

}