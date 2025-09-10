
import { useState, useEffect } from "react";



export default function BannerSVG(props) {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const left = 0;
    const right = width; // stretch with screen
    const arrowInset = 25;

    const rightSpace = 25;

    const d = `
        M ${right - rightSpace} 0
        L ${right} 36
        L ${right - rightSpace} 72
        L ${left} 72
        L ${arrowInset} 36
        L ${left} 0
        Z
    `;


    return (
        <svg 
            width="fit-content" height="72" 
            viewBox={`0 0 ${width} 83`}
            preserveAspectRatio="none"
            {...props}>

            <path 
                stroke="#4a2c85ff" 
                strokeWidth={2}
                fill="url(#theme-accent-background-gradient-linear)"
                transform="scale(1, 1.15)"
                d={d}
            />
            
             <defs>
                <linearGradient id="theme-accent-background-gradient-linear" x1="75.75190374550272%" y1="7.141634964894386%" x2="24.248096254497288%" y2="92.8583650351056%">
                    <stop offset="10%" stopColor="#3c136dff"></stop>
                    <stop offset="90%" stopColor="#26136cff"></stop>
                </linearGradient>
            </defs>

        </svg>
    )
}