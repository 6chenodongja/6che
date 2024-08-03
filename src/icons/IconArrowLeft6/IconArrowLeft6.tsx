/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  opacity: string;
  className: any;
}

export const IconArrowLeft6 = ({ color = "#FFD65E", opacity = "unset", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="22"
      viewBox="0 0 22 22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M13.4815 4.85174C13.8395 5.20972 13.8395 5.79012 13.4815 6.1481L8.62972 10.9999L13.4815 15.8517C13.8395 16.2097 13.8395 16.7901 13.4815 17.1481C13.1236 17.5061 12.5432 17.5061 12.1852 17.1481L6.68517 11.6481C6.32719 11.2901 6.32719 10.7097 6.68517 10.3517L12.1852 4.85174C12.5432 4.49376 13.1236 4.49376 13.4815 4.85174Z"
        fill={color}
        fillOpacity={opacity}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconArrowLeft6.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
