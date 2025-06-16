const NoDataFoundSvg = ({
  width = 240,
  height = 200,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      
      {/* Empty folder */}
      <path 
        d="M70 70H170V130C170 132.761 167.761 135 165 135H75C72.2386 135 70 132.761 70 130V70Z" 
        fill="#F5F5F4" 
        stroke="#78716C" 
        strokeWidth="2" 
      />
      <path 
        d="M70 70V65C70 62.2386 72.2386 60 75 60H95L105 70H170" 
        stroke="#78716C" 
        strokeWidth="2" 
      />
      
      {/* Dotted line */}
      <path 
        d="M90 100H150" 
        stroke="#78716C" 
        strokeWidth="2" 
        strokeDasharray="4 4" 
      />
      <path 
        d="M90 115H150" 
        stroke="#78716C" 
        strokeWidth="2" 
        strokeDasharray="4 4" 
      />
      
      {/* Animated search effect */}
      <circle cx="120" cy="90" r="35" stroke="#78716C" strokeWidth="1" strokeDasharray="3,3" opacity="0.5">
        <animate 
          attributeName="r" 
          values="35;40;35" 
          dur="4s" 
          repeatCount="indefinite" 
        />
      </circle>
      
      {/* Text */}
      <text x="120" y="170" textAnchor="middle" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#57534E">
        No Data Found
      </text>
      <text x="120" y="190" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#6B7280">
        Try a different search or filter
      </text>
    </svg>
  )
}

export default NoDataFoundSvg;