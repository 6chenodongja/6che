/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
  overlapGroupClassName: any;
  groupClassName: any;
}

export const Sunshine = ({ className, overlapGroupClassName, groupClassName }: Props): JSX.Element => {
  return (
    <div
      className={`w-6 h-6 rounded overflow-hidden backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] ${className}`}
    >
      <div
        className={`relative w-3.5 h-3.5 top-[5px] left-[5px] bg-palette-orange-500 rounded-[7px] blur-[6px] ${overlapGroupClassName}`}
      >
        <div className={`relative w-2.5 h-2.5 top-0.5 left-0.5 bg-[#ffc329] rounded-[4.9px] ${groupClassName}`} />
      </div>
    </div>
  );
};
