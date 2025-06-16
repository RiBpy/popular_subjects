const FetchErrorSvg = ({
  width = 240,
  height = 200,
  className = "",
  error = " Something went wrong.",
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
      {/* Server with error */}
      <rect
        x="85"
        y="60"
        width="70"
        height="90"
        rx="4"
        fill="#FEF2F2"
        stroke="#EF4444"
        strokeWidth="2"
      />

      {/* Server details */}
      <rect x="95" y="70" width="50" height="5" rx="2" fill="#EF4444" />
      <rect x="95" y="85" width="50" height="5" rx="2" fill="#EF4444" />
      <rect x="95" y="100" width="50" height="5" rx="2" fill="#EF4444" />

      {/* Error symbol */}
      <circle
        cx="150"
        cy="60"
        r="25"
        fill="#FEF2F2"
        stroke="#EF4444"
        strokeWidth="2"
      />
      <line
        x1="140"
        y1="50"
        x2="160"
        y2="70"
        stroke="#EF4444"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="160"
        y1="50"
        x2="140"
        y2="70"
        stroke="#EF4444"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Animated warning effect */}
      <circle
        cx="150"
        cy="60"
        r="30"
        stroke="#EF4444"
        strokeWidth="2"
        strokeDasharray="5,5"
        opacity="0.5"
      >
        <animate
          attributeName="r"
          values="30;35;30"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.5;0.2;0.5"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Text */}
      <text
        x="120"
        y="170"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="16"
        fontWeight="bold"
        fill="#B91C1C"
      >
        API Error
      </text>
      <text
        x="120"
        y="190"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="12"
        fill="#6B7280"
      >
        {error}
      </text>
    </svg>
  );
};
export default FetchErrorSvg;
