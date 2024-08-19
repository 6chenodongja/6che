function DetailNicknameIcon() {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect
        x={2}
        y={2}
        width={28}
        height={28}
        rx={4}
        fill="white"
        fillOpacity="0.6"
      />
      <path
        d="M16.5145 16C14.2973 16 12.4998 14.7344 12.4998 13.1731C12.4998 11.6973 14.1059 10.4856 16.1545 10.3574C16.5616 8.91811 18.3655 7.83337 20.5292 7.83337C22.9929 7.83337 24.99 9.23966 24.99 10.9744C24.99 11.0008 24.9896 11.0271 24.9887 11.0533C26.5285 11.3319 27.6665 12.316 27.6665 13.4872C27.6665 14.875 26.0688 16 24.0979 16H16.5145Z"
        fill="#B3B3B3"
      />
      <g filter="url(#filter0_bd_3033_4928)">
        <path
          d="M19.7744 24.1667C22.8445 24.1667 25.3333 22.1778 25.3333 19.7244C25.3333 17.4053 23.1094 15.5012 20.273 15.2997C19.7092 13.038 17.2115 11.3334 14.2156 11.3334C10.8044 11.3334 8.03913 13.5433 8.03913 16.2693C8.03913 16.3107 8.03977 16.3521 8.04105 16.3933C5.90891 16.8311 4.33325 18.3775 4.33325 20.218C4.33325 22.3988 6.54549 24.1667 9.27443 24.1667H19.7744Z"
          fill="#CCCCCC"
          fillOpacity="0.7"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_3033_4928"
          x="2.33325"
          y="9.33337"
          width={25}
          height="16.8334"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_3033_4928"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
          />
          <feOffset dx="0.5" dy="-0.5" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_3033_4928"
            result="effect2_dropShadow_3033_4928"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_3033_4928"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default DetailNicknameIcon;
