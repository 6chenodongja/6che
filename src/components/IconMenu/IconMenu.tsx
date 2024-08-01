/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  vectorClassName: any;
  vector: string;
}

export const IconMenu = ({ className, vectorClassName, vector = "/img/vector-1.svg" }: Props): JSX.Element => {
  return (
    <div className={`relative w-6 h-6 ${className}`}>
      <img className={`absolute w-[18px] h-3.5 top-[5px] left-[3px] ${vectorClassName}`} alt="Vector" src={vector} />
    </div>
  );
};

IconMenu.propTypes = {
  vector: PropTypes.string,
};
