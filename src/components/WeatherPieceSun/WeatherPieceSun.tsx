/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
  overlapGroupClassName: any;
  ellipseClassName: any;
}

export const WeatherPieceSun = ({ className, overlapGroupClassName, ellipseClassName }: Props): JSX.Element => {
  return (
    <div className={`w-[230px] h-[230px] ${className}`}>
      <div
        className={`relative w-[172px] h-[172px] top-[29px] left-[29px] bg-[color:var(--palette-yellow-400)] rounded-[86.25px] blur-[20px] ${overlapGroupClassName}`}
      >
        <div
          className={`h-[172px] bg-palette-yellow-500 rounded-[86.25px] border border-solid border-semantic-bg-box backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] ${ellipseClassName}`}
        />
      </div>
    </div>
  );
};
