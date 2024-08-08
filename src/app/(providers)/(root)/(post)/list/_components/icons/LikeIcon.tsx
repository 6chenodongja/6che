const LikeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
    >
      <g filter="url(#filter0_bd_5533_8302)">
        <path
          d="M9.46702 17.6916C9.31172 17.6061 9.1021 17.4874 8.85564 17.3396C8.37314 17.0502 7.70013 16.6199 7 16.0801C6.32882 15.5625 5.46297 14.8156 4.72066 13.8617C4.03396 12.9792 3 11.3407 3 9.14045C3 6.30146 5.23858 4 8 4C9.6356 4 11.0878 4.8074 12 6.05568C12.9122 4.8074 14.3644 4 16 4C18.7614 4 21 6.30146 21 9.14045C21 11.3407 19.966 12.9792 19.2793 13.8617C18.537 14.8156 17.6712 15.5625 17 16.0801C16.2999 16.6199 15.6269 17.0502 15.1444 17.3396C14.8979 17.4874 14.6883 17.6061 14.533 17.6916L13.8357 18.0518C12.6842 18.6466 11.3158 18.6466 10.1643 18.0518L9.46702 17.6916Z"
          fill="#FF4732"
          fillOpacity="0.85"
          shapeRendering="crispEdges"
          className="blur-[1px] drop-shadow-[0_0_3px_rgba(0,0,0,0.15)] stroke-[ver(--text-box, rgba(255, 255, 255, 0.50))] stroke-[2px] opacity-[var(--sds-size-stroke-border)]"
        />
        <path
          d="M9.46702 17.6916C9.31172 17.6061 9.1021 17.4874 8.85564 17.3396C8.37314 17.0502 7.70013 16.6199 7 16.0801C6.32882 15.5625 5.46297 14.8156 4.72066 13.8617C4.03396 12.9792 3 11.3407 3 9.14045C3 6.30146 5.23858 4 8 4C9.6356 4 11.0878 4.8074 12 6.05568C12.9122 4.8074 14.3644 4 16 4C18.7614 4 21 6.30146 21 9.14045C21 11.3407 19.966 12.9792 19.2793 13.8617C18.537 14.8156 17.6712 15.5625 17 16.0801C16.2999 16.6199 15.6269 17.0502 15.1444 17.3396C14.8979 17.4874 14.6883 17.6061 14.533 17.6916L13.8357 18.0518C12.6842 18.6466 11.3158 18.6466 10.1643 18.0518L9.46702 17.6916Z"
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_5533_8302"
          x="-1"
          y="0"
          width="26"
          height="22.4979"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_5533_8302"
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
            in2="effect1_backgroundBlur_5533_8302"
            result="effect2_dropShadow_5533_8302"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_5533_8302"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LikeIcon;
