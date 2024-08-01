/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  property1:
    | "sixty"
    | "zero"
    | "thirty"
    | "eighty"
    | "twenty"
    | "one-hundred"
    | "ten"
    | "fifty"
    | "forty"
    | "ninety"
    | "seventy";
  className: any;
  maskGroupClassName: any;
  maskGroup: string;
  img: string;
  maskGroup1: string;
  maskGroup2: string;
  maskGroup3: string;
  maskGroup4: string;
  maskGroup5: string;
  maskGroup6: string;
  maskGroup7: string;
  maskGroup8: string;
  maskGroup9: string;
}

export const PropertyWrapper = ({
  property1,
  className,
  maskGroupClassName,
  maskGroup = "/img/mask-group-19.png",
  img = "/img/mask-group-11.png",
  maskGroup1 = "/img/mask-group-12.png",
  maskGroup2 = "/img/mask-group-13.png",
  maskGroup3 = "/img/mask-group-14.png",
  maskGroup4 = "/img/mask-group-15.png",
  maskGroup5 = "/img/mask-group-16.png",
  maskGroup6 = "/img/mask-group-17.png",
  maskGroup7 = "/img/mask-group-18.png",
  maskGroup8 = "/img/mask-group-20.png",
  maskGroup9 = "/img/mask-group-21.png",
}: Props): JSX.Element => {
  return (
    <div
      className={`border border-solid border-semantic-text-box w-7 h-[52px] rounded-md bg-[color:var(--palette-black-100)] relative ${className}`}
    >
      <img
        className={`w-[26px] left-0 top-0 h-[50px] absolute ${maskGroupClassName}`}
        alt="Mask group"
        src={
          property1 === "ten"
            ? maskGroup1
            : property1 === "twenty"
            ? maskGroup2
            : property1 === "thirty"
            ? maskGroup3
            : property1 === "forty"
            ? maskGroup4
            : property1 === "fifty"
            ? maskGroup5
            : property1 === "sixty"
            ? maskGroup6
            : property1 === "seventy"
            ? maskGroup7
            : property1 === "eighty"
            ? maskGroup
            : property1 === "ninety"
            ? maskGroup8
            : property1 === "one-hundred"
            ? maskGroup9
            : img
        }
      />
    </div>
  );
};

PropertyWrapper.propTypes = {
  property1: PropTypes.oneOf([
    "sixty",
    "zero",
    "thirty",
    "eighty",
    "twenty",
    "one-hundred",
    "ten",
    "fifty",
    "forty",
    "ninety",
    "seventy",
  ]),
  maskGroup: PropTypes.string,
  img: PropTypes.string,
  maskGroup1: PropTypes.string,
  maskGroup2: PropTypes.string,
  maskGroup3: PropTypes.string,
  maskGroup4: PropTypes.string,
  maskGroup5: PropTypes.string,
  maskGroup6: PropTypes.string,
  maskGroup7: PropTypes.string,
  maskGroup8: PropTypes.string,
  maskGroup9: PropTypes.string,
};
