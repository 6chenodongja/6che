/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Five = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="34"
      viewBox="0 0 22 34"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.7331 2.59159C9.62955 0.469472 12.3705 0.469471 13.2669 2.59159L20.1904 18.9812C22.9969 25.6248 18.1619 33 11 33C3.83812 33 -0.996889 25.6248 1.80958 18.9812L8.7331 2.59159Z"
        fill="#E6E6E6"
        fillOpacity="0.6"
      />
      <path
        d="M13.7275 2.39702C13.2022 1.15339 12.1131 0.5 11 0.5C9.88694 0.5 8.79785 1.1534 8.27251 2.39702L1.34899 18.7867C-1.59425 25.7541 3.47394 33.5 11 33.5C18.5261 33.5 23.5943 25.754 20.651 18.7867L13.7275 2.39702Z"
        stroke="white"
        strokeOpacity="0.5"
      />
      <mask height="32" id="mask0_2678_917" maskUnits="userSpaceOnUse" width="20" x="1" y="1">
        <path
          d="M8.7331 2.59159C9.62955 0.469472 12.3705 0.469471 13.2669 2.59159L20.1904 18.9812C22.9969 25.6248 18.1619 33 11 33C3.83812 33 -0.996889 25.6248 1.80958 18.9812L8.7331 2.59159Z"
          fill="#A9DCFF"
        />
      </mask>
      <g mask="url(#mask0_2678_917)">
        <rect fill="#A9DCFF" height="29.44" width="20" x="1" y="17" />
      </g>
    </svg>
  );
};
