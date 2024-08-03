/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const IconArrowRight1 = ({ color = "white", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M9.29289 5.29289C8.90237 5.68342 8.90237 6.31658 9.29289 6.70711L14.5858 12L9.29289 17.2929C8.90237 17.6834 8.90237 18.3166 9.29289 18.7071C9.68342 19.0976 10.3166 19.0976 10.7071 18.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L10.7071 5.29289C10.3166 4.90237 9.68342 4.90237 9.29289 5.29289Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconArrowRight1.propTypes = {
  color: PropTypes.string,
};
