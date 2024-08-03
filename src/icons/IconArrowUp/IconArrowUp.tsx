/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconArrowUp = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 17 16"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M4.02851 9.80476C4.28886 10.0651 4.71097 10.0651 4.97132 9.80476L8.49992 6.27616L12.0285 9.80476C12.2889 10.0651 12.711 10.0651 12.9713 9.80476C13.2317 9.54441 13.2317 9.1223 12.9713 8.86195L8.97132 4.86195C8.71097 4.6016 8.28886 4.6016 8.02851 4.86195L4.02851 8.86195C3.76816 9.1223 3.76816 9.54441 4.02851 9.80476Z"
        fill="#121212"
        fillRule="evenodd"
      />
    </svg>
  );
};
