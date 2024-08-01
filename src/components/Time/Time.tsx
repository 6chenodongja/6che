/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconWeatherBlur15 } from "../../icons/IconWeatherBlur15";
import { IconFrame } from "../IconFrame";

interface Props {
  temperature: string;
  time: string;
  className: any;
  iconFrameIcon: JSX.Element;
}

export const Time = ({
  temperature = "26°",
  time = "10",
  className,
  iconFrameIcon = <IconWeatherBlur15 className="!absolute !w-[34px] !h-[34px] !top-1 !left-1" />,
}: Props): JSX.Element => {
  return (
    <div className={`flex-col items-center justify-center gap-0.5 px-1 py-0 inline-flex relative ${className}`}>
      <div className="items-end flex-[0_0_auto] inline-flex relative">
        <div className="relative w-fit font-temperature-14 font-[number:var(--temperature-14-font-weight)] text-palette-black text-[length:var(--temperature-14-font-size)] text-center tracking-[var(--temperature-14-letter-spacing)] leading-[var(--temperature-14-line-height)] whitespace-nowrap [font-style:var(--temperature-14-font-style)]">
          {time}
        </div>
        <div className="relative w-fit mt-[-1.00px] font-body-KR-small font-[number:var(--body-KR-small-font-weight)] text-palette-black text-[length:var(--body-KR-small-font-size)] text-center tracking-[var(--body-KR-small-letter-spacing)] leading-[var(--body-KR-small-line-height)] whitespace-nowrap [font-style:var(--body-KR-small-font-style)]">
          시
        </div>
      </div>
      <IconFrame icon={iconFrameIcon} size="forty-two-p" />
      <div className="relative self-stretch font-temperature-16 font-[number:var(--temperature-16-font-weight)] text-palette-black text-[length:var(--temperature-16-font-size)] text-center tracking-[var(--temperature-16-letter-spacing)] leading-[var(--temperature-16-line-height)] [font-style:var(--temperature-16-font-style)]">
        {temperature}
      </div>
    </div>
  );
};

Time.propTypes = {
  temperature: PropTypes.string,
  time: PropTypes.string,
};
