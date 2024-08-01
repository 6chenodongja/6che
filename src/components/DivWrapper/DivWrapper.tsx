/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Sunshine } from "../Sunshine";

interface Props {
  property1: "eight-hundred-and-ten" | "thirty-five" | "two" | "sixty-seven" | "eleven";
}

export const DivWrapper = ({ property1 }: Props): JSX.Element => {
  return (
    <div className="border border-solid border-semantic-text-box w-[88px] shadow-[4px_4px_20px_#0000000d,0px_0px_2px_#0000000d] h-[100px] overflow-hidden rounded-2xl [-webkit-backdrop-filter:blur(20px)_brightness(100%)] bg-semantic-bg-box backdrop-blur-[20px] backdrop-brightness-[100%] relative">
      <div className="font-caption left-7 [font-style:var(--caption-font-style)] tracking-[var(--caption-letter-spacing)] text-[length:var(--caption-font-size)] top-[9px] text-semantic-box-text font-[number:var(--caption-font-weight)] text-center whitespace-nowrap leading-[var(--caption-line-height)] absolute">
        자외선
      </div>
      <div
        className={`top-7 h-[61px] absolute ${property1 === "eight-hundred-and-ten" ? "w-[54px]" : "w-11"} ${
          property1 === "eight-hundred-and-ten" ? "left-[17px]" : "left-[22px]"
        }`}
      >
        <div
          className={`font-subtitle-KR-small [font-style:var(--subtitle-KR-small-font-style)] tracking-[var(--subtitle-KR-small-letter-spacing)] text-[length:var(--subtitle-KR-small-font-size)] top-10 text-palette-black font-[number:var(--subtitle-KR-small-font-weight)] text-center whitespace-nowrap leading-[var(--subtitle-KR-small-line-height)] absolute ${
            property1 === "eight-hundred-and-ten" ? "left-0" : "left-[9px]"
          }`}
        >
          {property1 === "two" && <>낮음</>}

          {property1 === "thirty-five" && <>보통</>}

          {property1 === "sixty-seven" && <>높음</>}

          {property1 === "eight-hundred-and-ten" && <>매우 높음</>}

          {property1 === "eleven" && <>위험</>}
        </div>
        <Sunshine
          className={
            property1 === "eight-hundred-and-ten"
              ? "!h-11 !absolute !left-[5px] !w-11 !top-0"
              : "!h-11 !absolute !left-0 !w-11 !top-0"
          }
          groupClassName="!h-[18px] !rounded-[8.98px] !left-1 !w-[18px] !top-1"
          overlapGroupClassName={
            property1 === "thirty-five"
              ? "!h-[26px] !rounded-[12.83px] !left-[9px] !bg-palette-yellow-500 !w-[26px] !top-[9px]"
              : property1 === "sixty-seven"
              ? "!h-[26px] !rounded-[12.83px] !left-[9px] !w-[26px] !top-[9px]"
              : property1 === "eight-hundred-and-ten"
              ? "!h-[26px] !rounded-[12.83px] !left-[9px] !bg-palette-red-500 !w-[26px] !top-[9px]"
              : property1 === "eleven"
              ? "!h-[26px] !rounded-[12.83px] !left-[9px] !bg-[#a82af5d9] !w-[26px] !top-[9px]"
              : "!h-[26px] !rounded-[12.83px] !left-[9px] !bg-[color:var(--palette-black-100)] !w-[26px] !top-[9px]"
          }
        />
      </div>
    </div>
  );
};

DivWrapper.propTypes = {
  property1: PropTypes.oneOf(["eight-hundred-and-ten", "thirty-five", "two", "sixty-seven", "eleven"]),
};
