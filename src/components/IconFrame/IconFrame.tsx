/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconNone30 } from "../../icons/IconNone30";

interface Props {
  size: "sixteen" | "twenty-four" | "twenty-eight" | "forty-two-p" | "twenty" | "twelve" | "thirty-two" | "eighteen";
  icon: JSX.Element;
  className: any;
}

export const IconFrame = ({
  size,
  icon = <IconNone30 className="!absolute !w-4 !h-4 !top-px !left-px" color="#B3B3B3" />,
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={`relative ${
        size === "thirty-two"
          ? "w-8"
          : size === "twenty-eight"
          ? "w-7"
          : size === "twenty-four"
          ? "w-6"
          : size === "twenty"
          ? "w-5"
          : size === "eighteen"
          ? "w-[18px]"
          : size === "sixteen"
          ? "w-4"
          : size === "twelve"
          ? "w-3"
          : "w-[42px]"
      } ${["sixteen", "twelve"].includes(size) ? "bg-[100%_100%]" : ""} ${
        size === "thirty-two"
          ? "h-8"
          : size === "twenty-eight"
          ? "h-7"
          : size === "twenty-four"
          ? "h-6"
          : size === "twenty"
          ? "h-5"
          : size === "eighteen"
          ? "h-[18px]"
          : size === "sixteen"
          ? "h-4"
          : size === "twelve"
          ? "h-3"
          : "h-[42px]"
      } ${
        size === "sixteen"
          ? "bg-[url(/static/img/icon-none-30.svg)]"
          : size === "twelve"
          ? "bg-[url(/static/img/icon-none-31.svg)]"
          : ""
      } ${className}`}
    >
      {["eighteen", "forty-two-p", "thirty-two", "twenty-eight", "twenty-four", "twenty"].includes(size) && <>{icon}</>}
    </div>
  );
};

IconFrame.propTypes = {
  size: PropTypes.oneOf([
    "sixteen",
    "twenty-four",
    "twenty-eight",
    "forty-two-p",
    "twenty",
    "twelve",
    "thirty-two",
    "eighteen",
  ]),
};
