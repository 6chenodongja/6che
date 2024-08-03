/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconWeatherBlur14 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_2350_1028)">
        <rect fill="white" fillOpacity="0.6" height="24" rx="4" width="24" />
        <path
          d="M12.4412 12C10.5407 12 9 10.9152 9 9.57692C9 8.31193 10.3766 7.27335 12.1326 7.16346C12.4815 5.92977 14.0277 5 15.8824 5C17.994 5 19.7059 6.20539 19.7059 7.69231C19.7059 7.71492 19.7055 7.73747 19.7047 7.75995C21.0246 7.99876 22 8.84225 22 9.84615C22 11.0357 20.6305 12 18.9412 12H12.4412Z"
          fill="#B3B3B3"
        />
        <g filter="url(#filter1_bd_2350_1028)">
          <path
            d="M15.2353 19C17.8668 19 20 17.2952 20 15.1923C20 13.2045 18.0939 11.5724 15.6626 11.3997C15.1794 9.46107 13.0385 8 10.4706 8C7.54673 8 5.17647 9.89418 5.17647 12.2308C5.17647 12.2663 5.17702 12.3017 5.17811 12.3371C3.35057 12.7123 2 14.0378 2 15.6154C2 17.4847 3.89621 19 6.23529 19H15.2353Z"
            fill="#CCCCCC"
            fillOpacity="0.7"
            shapeRendering="crispEdges"
          />
        </g>
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="32"
          id="filter0_b_2350_1028"
          width="32"
          x="-4"
          y="-4"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2350_1028" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_2350_1028" mode="normal" result="shape" />
        </filter>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="15"
          id="filter1_bd_2350_1028"
          width="22"
          x="0"
          y="6"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2350_1028" />
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
          <feBlend in2="effect1_backgroundBlur_2350_1028" mode="normal" result="effect2_dropShadow_2350_1028" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow_2350_1028" mode="normal" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
