import stickNote from "../../assets/icons/stick-note.svg"



export default function StickNote({children}){
    
    
    return(
        <div className="
            bg-[#B05EF1]
            w-full
            p-6
            rounded-md
            flex items-start
            gap-6
        "> 

            <img src={stickNote} className="
                w-4 h-4 
                [filter:invert(20%)_sepia(90%)_saturate(7000%)_hue-rotate(272deg)_brightness(56%)_contrast(100%)]" 
            />
        
            <div className="
                text-black 
                font-light
                text-lg
            ">
                {children}
            </div>
        </div>
    )
}