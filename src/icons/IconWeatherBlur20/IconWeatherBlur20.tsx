/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconWeatherBlur20 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="34"
      viewBox="0 0 34 34"
      width="34"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="white" fillOpacity="0.6" height="34" rx="4" width="34" />
      <path
        d="M17.6248 17C14.9324 17 12.7498 15.4632 12.7498 13.5673C12.7498 11.7753 14.7001 10.304 17.1876 10.1483C17.682 8.40055 19.8725 7.08337 22.4998 7.08337C25.4914 7.08337 27.9165 8.79101 27.9165 10.8975C27.9165 10.9295 27.9159 10.9615 27.9148 10.9933C29.7847 11.3316 31.1665 12.5266 31.1665 13.9488C31.1665 15.6339 29.2264 17 26.8332 17H17.6248Z"
        fill="#B3B3B3"
      />
      <g filter="url(#filter0_bd_2795_1560)">
        <path
          d="M21.5833 26.9167C25.3112 26.9167 28.3333 24.5016 28.3333 21.5225C28.3333 18.7064 25.6329 16.3943 22.1886 16.1496C21.5041 13.4032 18.4711 11.3334 14.8333 11.3334C10.6911 11.3334 7.33325 14.0168 7.33325 17.327C7.33325 17.3773 7.33403 17.4275 7.33557 17.4775C4.74655 18.0092 2.83325 19.8869 2.83325 22.1218C2.83325 24.77 5.51954 26.9167 8.83325 26.9167H21.5833Z"
          fill="#CCCCCC"
          fillOpacity="0.7"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="19.5834"
          id="filter0_bd_2795_1560"
          width="29.5"
          x="0.833252"
          y="9.33337"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2795_1560" />
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
          <feBlend in2="effect1_backgroundBlur_2795_1560" mode="normal" result="effect2_dropShadow_2795_1560" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow_2795_1560" mode="normal" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
