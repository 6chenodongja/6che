/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconArrowDown2 = ({ className }: Props): JSX.Element => {
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
        d="M12.9715 6.19524C12.7111 5.93489 12.289 5.93489 12.0287 6.19524L8.50008 9.72384L4.97148 6.19524C4.71114 5.93489 4.28903 5.93489 4.02868 6.19524C3.76833 6.45559 3.76833 6.8777 4.02868 7.13805L8.02868 11.1381C8.28903 11.3984 8.71114 11.3984 8.97149 11.1381L12.9715 7.13805C13.2318 6.8777 13.2318 6.45559 12.9715 6.19524Z"
        fill="#121212"
        fillRule="evenodd"
      />
    </svg>
  );
};
