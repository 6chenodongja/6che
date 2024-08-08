const NotLikeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <g filter="url(#filter0_b_5482_4103)">
        <g filter="url(#filter1_bd_5482_4103)">
          <path
            d="M11.0449 21.807C10.8637 21.7072 10.6191 21.5687 10.3316 21.3963C9.76866 21.0587 8.98349 20.5566 8.16667 19.9268C7.38362 19.323 6.37347 18.4516 5.50743 17.3387C4.70629 16.3091 3.5 14.3976 3.5 11.8306C3.5 8.51841 6.11167 5.83337 9.33333 5.83337C11.2415 5.83337 12.9357 6.77534 14 8.23166C15.0643 6.77534 16.7585 5.83337 18.6667 5.83337C21.8883 5.83337 24.5 8.51841 24.5 11.8306C24.5 14.3976 23.2937 16.3091 22.4926 17.3387C21.6265 18.4516 20.6164 19.323 19.8333 19.9268C19.0165 20.5566 18.2313 21.0587 17.6684 21.3963C17.3809 21.5687 17.1363 21.7072 16.9551 21.807L15.8357 22.3852C14.6842 22.98 13.3158 22.98 12.1643 22.3852L11.0449 21.807Z"
            fill="white"
            fillOpacity="0.5"
            shapeRendering="crispEdges"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_b_5482_4103"
          x="-20"
          y="-20"
          width="68"
          height="68"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_5482_4103"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_5482_4103"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_bd_5482_4103"
          x="-0.5"
          y="1.83337"
          width="29"
          height="24.9979"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_5482_4103"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_5482_4103"
            result="effect2_dropShadow_5482_4103"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_5482_4103"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default NotLikeIcon;
