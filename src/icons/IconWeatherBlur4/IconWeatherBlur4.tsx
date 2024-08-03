/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconWeatherBlur4 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="white" fillOpacity="0.6" height="28" rx="4" width="28" />
      <path
        d="M14.5145 14C12.2973 14 10.4998 12.7344 10.4998 11.1731C10.4998 9.69727 12.1059 8.48559 14.1545 8.35738C14.5616 6.91808 16.3655 5.83334 18.5292 5.83334C20.9929 5.83334 22.99 7.23963 22.99 8.97437C22.99 9.00075 22.9896 9.02706 22.9887 9.05329C24.5285 9.3319 25.6665 10.316 25.6665 11.4872C25.6665 12.875 24.0688 14 22.0979 14H14.5145Z"
        fill="#B3B3B3"
      />
      <g filter="url(#filter0_bd_2795_1359)">
        <path
          d="M17.7744 22.1667C20.8445 22.1667 23.3333 20.1778 23.3333 17.7244C23.3333 15.4052 21.1094 13.5012 18.273 13.2997C17.7092 11.0379 15.2115 9.33334 12.2156 9.33334C8.80443 9.33334 6.03913 11.5432 6.03913 14.2692C6.03913 14.3107 6.03977 14.352 6.04105 14.3933C3.90891 14.8311 2.33325 16.3775 2.33325 18.218C2.33325 20.3988 4.54549 22.1667 7.27443 22.1667H17.7744Z"
          fill="#CCCCCC"
          fillOpacity="0.7"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="16.8333"
          id="filter0_bd_2795_1359"
          width="25"
          x="0.333252"
          y="7.33334"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2795_1359" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="0.5" dy="-0.5" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
          <feBlend in2="effect1_backgroundBlur_2795_1359" mode="normal" result="effect2_dropShadow_2795_1359" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow_2795_1359" mode="normal" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
