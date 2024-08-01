/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconLocation } from "../../icons/IconLocation";
import { IconSearch } from "../../icons/IconSearch";
import { IconFrame } from "../IconFrame";

interface Props {
  property1: "open" | "default";
  className: any;
  iconFrameIcon: JSX.Element;
}

export const Location = ({
  property1,
  className,
  iconFrameIcon = <IconLocation className="!absolute !w-4 !h-4 !top-px !left-px" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`border-semantic-text-box items-center shadow-[4px_4px_20px_#0000000d,0px_0px_2px_#0000000d] px-2 py-1 [-webkit-backdrop-filter:blur(20px)_brightness(100%)] relative rounded-[1000px] backdrop-blur-[20px] backdrop-brightness-[100%] bg-semantic-bg-box border border-solid ${
        state.property1 === "open" ? "flex" : "inline-flex"
      } ${state.property1 === "open" ? "w-[178px]" : ""} ${state.property1 === "open" ? "gap-0.5" : ""} ${
        state.property1 === "default" ? "justify-center" : ""
      } ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.property1 === "open" && (
        <>
          <IconFrame icon={<IconSearch className="!absolute !w-4 !h-4 !top-px !left-px" />} size="eighteen" />
          <div className="relative w-px h-3.5 bg-palette-black rounded-[1px]" />
        </>
      )}

      <div className="inline-flex items-center gap-0.5 flex-[0_0_auto] relative">
        <div
          className={`font-caption w-fit mt-[-1.00px] tracking-[var(--caption-letter-spacing)] text-[length:var(--caption-font-size)] [font-style:var(--caption-font-style)] font-[number:var(--caption-font-weight)] text-center whitespace-nowrap leading-[var(--caption-line-height)] relative ${
            state.property1 === "default" ? "text-palette-black" : "text-[color:var(--palette-black-400)]"
          }`}
        >
          서울시
        </div>
        <div
          className={`font-caption w-fit mt-[-1.00px] tracking-[var(--caption-letter-spacing)] text-[length:var(--caption-font-size)] [font-style:var(--caption-font-style)] font-[number:var(--caption-font-weight)] text-center whitespace-nowrap leading-[var(--caption-line-height)] relative ${
            state.property1 === "default" ? "text-palette-black" : "text-[color:var(--palette-black-400)]"
          }`}
        >
          동작구
        </div>
      </div>
      {state.property1 === "default" && <IconFrame icon={iconFrameIcon} size="eighteen" />}
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "open",
        };
    }
  }

  if (state.property1 === "open") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

Location.propTypes = {
  property1: PropTypes.oneOf(["open", "default"]),
};
