


export default function CirculoSVG({ porcentaje = 30, ...props }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (porcentaje / 100) * circumference;

    return (
        <svg viewBox="0 0 120 120" width="300" height="300" {...props}>
            <defs> 
                <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%"> 
                    <stop offset="0%" stop-color="#371C9B" />
                    <stop offset="100%" stop-color="#4E1C9F" />  
                </linearGradient> 
            </defs>
            {/* Background ring */}
            <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#4A2C85"
                strokeWidth="1.3"
                fill="none"
            />
            
            {/* Progress ring */}
            <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="url(#grad)"
                strokeWidth="8"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="square"
                transform="rotate(-90 60 60)" // start at top
            />
        </svg>
    );
}










// function describeArc(cx, cy, r, value) {
//   // value in percent (0–100)
//   const endAngle = (value / 100) * 360 - 90; // start from top (-90°)
//   const startAngle = -90;

//   const start = polarToCartesian(cx, cy, r, endAngle);
//   const end = polarToCartesian(cx, cy, r, startAngle);

//   const largeArcFlag = value > 50 ? 1 : 0;

//   return [
//     "M", end.x, end.y,
//     "A", r, r, 0, largeArcFlag, 1, start.x, start.y,
//     "L", cx, cy,
//     "Z"
//   ].join(" ");
// }

// function polarToCartesian(cx, cy, r, angleInDegrees) {
//   const rad = (angleInDegrees * Math.PI) / 180.0;
//   return {
//     x: cx + r * Math.cos(rad),
//     y: cy + r * Math.sin(rad),
//   };
// }




// export default function CirculoSVG({porcentaje=100, ...props}){

//     return (

//         <svg
//             width="100%"
//             viewBox="-50 -50 100 100"
//             overflow="visible"
//             {...props}
//         >
//             <path
//             d="M2.7554552980815448e-15,-45A45,45,0,1,1,-2.7554552980815448e-15,45A45,45,0,1,1,2.7554552980815448e-15,-45M-8.183702235302187e-15,-44.55A44.55,44.55,0,1,0,8.183702235302187e-15,44.55A44.55,44.55,0,1,0,-8.183702235302187e-15,-44.55Z"
//             />
//             <path
//              d={describeArc(0, 0, 50, porcentaje)}
//             />
//         </svg>
//     )
// }


