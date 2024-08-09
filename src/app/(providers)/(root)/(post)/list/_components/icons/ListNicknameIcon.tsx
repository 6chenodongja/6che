const ListNicknameIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
    >
      <path
        d="M8.33088 5.5C6.9055 5.5 5.75 4.68636 5.75 3.68269C5.75 2.73395 6.78248 1.95501 8.09942 1.87259C8.36115 0.947331 9.52081 0.25 10.9118 0.25C12.4955 0.25 13.7794 1.15404 13.7794 2.26923C13.7794 2.28619 13.7791 2.3031 13.7785 2.31996C14.7684 2.49907 15.5 3.13169 15.5 3.88462C15.5 4.77677 14.4729 5.5 13.2059 5.5H8.33088Z"
        fill="#B3B3B3"
      />
      <g filter="url(#filter0_bd_4322_3812)">
        <path
          d="M10.4265 10.75C12.4001 10.75 14 9.47143 14 7.89423C14 6.40335 12.5704 5.17931 10.747 5.04979C10.3846 3.59581 8.77888 2.5 6.85294 2.5C4.66005 2.5 2.88235 3.92063 2.88235 5.67308C2.88235 5.69973 2.88276 5.7263 2.88358 5.7528C1.51292 6.03425 0.5 7.02836 0.5 8.21154C0.5 9.61349 1.92215 10.75 3.67647 10.75H10.4265Z"
          fill="#CCCCCC"
          fillOpacity="0.7"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_4322_3812"
          x="-1.5"
          y="0.5"
          width="17.5"
          height="12.25"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4322_3812"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.5" dy="-0.5" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_4322_3812"
            result="effect2_dropShadow_4322_3812"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_4322_3812"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default ListNicknameIcon;
