/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconNone30 } from "../../icons/IconNone30";
import { IconFrame } from "../IconFrame";

interface Props {
  variant: "primary" | "neutral" | "subtle";
  stateProp: "disabled" | "pressed" | "hover" | "default";
  type: "rectangle" | "default";
  className: any;
  iconFrameIcon: JSX.Element;
  iconFrameSize: string;
  iconFrameSizeClassName: any;
}

export const ButtonIconButtons = ({
  variant,
  stateProp,
  type,
  className,
  iconFrameIcon = <IconNone30 className="!absolute !w-[22px] !h-[22px] !top-px !left-px" color="#121212" />,
  iconFrameSize = "twenty-four",
  iconFrameSizeClassName,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "primary",
    state: stateProp || "default",
    type: type || "default",
  });

  return (
    <div
      className={`inline-flex items-center shadow-[0px_0px_4px_#00000014] p-2 [-webkit-backdrop-filter:blur(10px)_brightness(100%)] relative backdrop-blur-[10px] backdrop-brightness-[100%] gap-2 overflow-hidden justify-center ${
        state.state === "default" && state.variant === "neutral"
          ? "border-palette-black"
          : state.variant === "neutral" && ["hover", "pressed"].includes(state.state)
          ? "border-semantic-color-bg-brand"
          : state.state === "disabled" && state.variant === "neutral"
          ? "border-[color:var(--palette-black-200)]"
          : ""
      } ${state.type === "rectangle" ? "rounded-lg" : "rounded-[1000px]"} ${
        state.state === "default" && state.variant === "primary"
          ? "bg-palette-black"
          : state.variant === "primary" && ["hover", "pressed"].includes(state.state)
          ? "bg-semantic-color-bg-brand-b"
          : (state.state === "disabled" && state.variant === "neutral") ||
            (state.state === "disabled" && state.variant === "primary") ||
            (state.state === "hover" && state.variant === "subtle")
          ? "bg-[color:var(--palette-black-100)]"
          : state.variant === "neutral" && ["default", "hover", "pressed"].includes(state.state)
          ? "bg-semantic-bg-header"
          : ""
      } ${state.variant === "neutral" ? "border border-solid" : ""} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {["default", "disabled", "hover"].includes(state.state) && (
        <IconFrame className={iconFrameSizeClassName} icon={iconFrameIcon} size={iconFrameSize} />
      )}

      {state.state === "pressed" && (
        <>
          <IconFrame
            icon={
              <IconNone30
                className="!absolute !w-[22px] !h-[22px] !top-px !left-px"
                color={
                  ["primary", "subtle"].includes(state.variant)
                    ? "#121212"
                    : state.variant === "neutral"
                    ? "#FFD65E"
                    : undefined
                }
                opacity={state.variant === "neutral" ? "0.8" : undefined}
              />
            }
            size="twenty-four"
          />
          <div className="w-10 left-0 top-0 h-10 bg-[color:var(--palette-black-900)] absolute" />
        </>
      )}
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

ButtonIconButtons.propTypes = {
  variant: PropTypes.oneOf(["primary", "neutral", "subtle"]),
  stateProp: PropTypes.oneOf(["disabled", "pressed", "hover", "default"]),
  type: PropTypes.oneOf(["rectangle", "default"]),
  iconFrameSize: PropTypes.string,
};
