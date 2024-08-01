/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

interface Props {
  property1: "three" | "one";
  className: any;
}

export const ButtonHeart = ({ property1, className }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "one",
  });

  return (
    <div
      className={`w-6 bg-[100%_100%] h-6 ${
        state.property1 === "three" ? "bg-[url(/static/img/icon-heart-1.svg)]" : "bg-[url(/static/img/icon-heart.svg)]"
      } ${state.property1 === "three" ? "rounded-[1000px]" : ""} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    />
  );
};

function reducer(state: any, action: any) {
  if (state.property1 === "one") {
    switch (action) {
      case "click":
        return {
          property1: "three",
        };
    }
  }

  if (state.property1 === "three") {
    switch (action) {
      case "click":
        return {
          property1: "one",
        };
    }
  }

  return state;
}

ButtonHeart.propTypes = {
  property1: PropTypes.oneOf(["three", "one"]),
};
