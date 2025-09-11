import BannerSVG from "./BannerSVG";


export default function BannerConIcono({iconoSVG}){



    return (
        <div className="relative">
            <BannerSVG />
            <img src={iconoSVG} alt="" 
                style={{filter: "invert(100%) brightness(86%) sepia(3%) saturate(200%) hue-rotate(260deg) contrast(95%)"}}
                className="
                    w-7 h-7 
                    absolute left-[47.5%] top-[30%]
                "
            />
        </div>
    )
}