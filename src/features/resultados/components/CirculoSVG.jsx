


export default function CirculoSVG({ porcentaje = 30, ...props }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (porcentaje / 100) * circumference;

    return (
        <svg viewBox="0 0 120 120" width="300" height="300" {...props}>
            <defs> 
                <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%"> 
                    <stop offset="0%" stopColor="#371C9B" />
                    <stop offset="100%" stopColor="#4E1C9F" />  
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
