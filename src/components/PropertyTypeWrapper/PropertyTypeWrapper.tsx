/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { One } from "../../icons/One";
import { PropertyWrapper } from "../PropertyWrapper";

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
  type: "two" | "one";
  icon: JSX.Element;
}

export const PropertyTypeWrapper = ({
  property1,
  type,
  icon = <One className="!absolute !w-[22px] !h-[34px] !top-8 !left-[33px] !object-cover" />,
}: Props): JSX.Element => {
  return (
    <div className="border border-solid border-semantic-text-box w-[88px] shadow-[4px_4px_20px_#0000000d,0px_0px_2px_#0000000d] h-[100px] overflow-hidden rounded-2xl [-webkit-backdrop-filter:blur(20px)_brightness(100%)] bg-semantic-bg-box backdrop-blur-[20px] backdrop-brightness-[100%] relative">
      {type === "one" && <>{icon}</>}

      <div
        className={`font-caption [font-style:var(--caption-font-style)] tracking-[var(--caption-letter-spacing)] text-[length:var(--caption-font-size)] top-[9px] text-semantic-box-text font-[number:var(--caption-font-weight)] text-center whitespace-nowrap leading-[var(--caption-line-height)] absolute ${
          type === "two" ? "left-[33px]" : "left-[22px]"
        }`}
      >
        {type === "one" && <>강수확률</>}

        {type === "two" && <>습도</>}
      </div>
      <div
        className={`font-temperature-16 [font-style:var(--temperature-16-font-style)] tracking-[var(--temperature-16-letter-spacing)] text-[length:var(--temperature-16-font-size)] top-[68px] text-palette-black font-[number:var(--temperature-16-font-weight)] text-center whitespace-nowrap leading-[var(--temperature-16-line-height)] absolute ${
          property1 === "zero" ? "left-[33px]" : property1 === "one-hundred" ? "left-[23px]" : "left-7"
        }`}
      >
        {property1 === "zero" && <>0%</>}

        {property1 === "ten" && <>10%</>}

        {property1 === "twenty" && <>20%</>}

        {property1 === "thirty" && <>30%</>}

        {property1 === "forty" && <>40%</>}

        {property1 === "fifty" && <>50%</>}

        {property1 === "sixty" && <>60%</>}

        {property1 === "seventy" && <>70%</>}

        {property1 === "eighty" && <>80%</>}

        {property1 === "ninety" && <>90%</>}

        {property1 === "one-hundred" && <>100%</>}
      </div>
      {type === "two" && (
        <PropertyWrapper
          className="!h-[34px] !absolute !left-[33px] !w-[22px] !top-8"
          img={property1 === "zero" ? "/img/mask-group.png" : undefined}
          maskGroup={property1 === "eighty" ? "/img/mask-group-8.png" : undefined}
          maskGroup1={property1 === "ten" ? "/img/mask-group-1.png" : undefined}
          maskGroup2={property1 === "twenty" ? "/img/mask-group-2.png" : undefined}
          maskGroup3={property1 === "thirty" ? "/img/mask-group-3.png" : undefined}
          maskGroup4={property1 === "forty" ? "/img/mask-group-4.png" : undefined}
          maskGroup5={property1 === "fifty" ? "/img/mask-group-5.png" : undefined}
          maskGroup6={property1 === "sixty" ? "/img/mask-group-6.png" : undefined}
          maskGroup7={property1 === "seventy" ? "/img/mask-group-7.png" : undefined}
          maskGroup8={property1 === "ninety" ? "/img/mask-group-9.png" : undefined}
          maskGroup9={property1 === "one-hundred" ? "/img/mask-group-10.png" : undefined}
          maskGroupClassName="!h-8 !w-5"
          property1={
            property1 === "ten"
              ? "ten"
              : property1 === "twenty"
              ? "twenty"
              : property1 === "thirty"
              ? "thirty"
              : property1 === "forty"
              ? "forty"
              : property1 === "fifty"
              ? "fifty"
              : property1 === "sixty"
              ? "sixty"
              : property1 === "seventy"
              ? "seventy"
              : property1 === "eighty"
              ? "eighty"
              : property1 === "ninety"
              ? "ninety"
              : property1 === "one-hundred"
              ? "one-hundred"
              : "zero"
          }
        />
      )}
    </div>
  );
};

PropertyTypeWrapper.propTypes = {
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
  type: PropTypes.oneOf(["two", "one"]),
};
