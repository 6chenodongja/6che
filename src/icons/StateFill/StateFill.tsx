/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const StateFill = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_2350_1039)">
        <path
          d="M9.46702 18.6916C9.31172 18.6061 9.1021 18.4874 8.85564 18.3396C8.37314 18.0502 7.70013 17.6199 7 17.0801C6.32882 16.5625 5.46297 15.8156 4.72066 14.8617C4.03396 13.9792 3 12.3407 3 10.1404C3 7.30146 5.23858 5 8 5C9.6356 5 11.0878 5.8074 12 7.05568C12.9122 5.8074 14.3644 5 16 5C18.7614 5 21 7.30146 21 10.1404C21 12.3407 19.966 13.9792 19.2793 14.8617C18.537 15.8156 17.6712 16.5625 17 17.0801C16.2999 17.6199 15.6269 18.0502 15.1444 18.3396C14.8979 18.4874 14.6883 18.6061 14.533 18.6916L13.8357 19.0518C12.6842 19.6466 11.3158 19.6466 10.1643 19.0518L9.46702 18.6916Z"
          fill="#FF4732"
          fillOpacity="0.85"
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="18.4978"
          id="filter0_b_2350_1039"
          width="22"
          x="1"
          y="3"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2350_1039" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_2350_1039" mode="normal" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
