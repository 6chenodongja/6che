const NotLikeIcon = () => {
  return (
    <svg
      width="24"
      height="21"
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_bd_2323_704)">
        <path
          d="M9.46702 16.6916C9.31172 16.6061 9.1021 16.4874 8.85564 16.3396C8.37314 16.0502 7.70013 15.6199 7 15.0801C6.32882 14.5625 5.46297 13.8156 4.72066 12.8617C4.03396 11.9792 3 10.3407 3 8.14045C3 5.30146 5.23858 3 8 3C9.6356 3 11.0878 3.8074 12 5.05568C12.9122 3.8074 14.3644 3 16 3C18.7614 3 21 5.30146 21 8.14045C21 10.3407 19.966 11.9792 19.2793 12.8617C18.537 13.8156 17.6712 14.5625 17 15.0801C16.2999 15.6199 15.6269 16.0502 15.1444 16.3396C14.8979 16.4874 14.6883 16.6061 14.533 16.6916L13.8357 17.0518C12.6842 17.6466 11.3158 17.6466 10.1643 17.0518L9.46702 16.6916Z"
          fill="white"
          fillOpacity="0.5"
          shapeRendering="crispEdges"
          className="backdrop-blur-[10px]  stroke-[2px] opacity-[var(--sds-size-stroke-border)] stroke-[var(--text-box, rgba(255, 255, 255, 0.50))]"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_2323_704"
          x="-1"
          y="-1"
          width="26"
          height="22.4978"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2323_704"
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
            in2="effect1_backgroundBlur_2323_704"
            result="effect2_dropShadow_2323_704"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2323_704"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default NotLikeIcon;
