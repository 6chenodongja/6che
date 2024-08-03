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

export const IconNone30 = ({ color = "#B3B3B3", opacity = "unset", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M5.25 2.8125C4.91846 2.8125 4.60372 2.87838 4.3171 2.99724C4.03014 3.11624 3.70104 2.98007 3.58204 2.69311C3.46304 2.40614 3.5992 2.07705 3.88617 1.95805C4.307 1.78354 4.76799 1.6875 5.25 1.6875H6.1875C6.49816 1.6875 6.75 1.93934 6.75 2.25C6.75 2.56066 6.49816 2.8125 6.1875 2.8125H5.25ZM7.5 2.25C7.5 1.93934 7.75184 1.6875 8.0625 1.6875H9.9375C10.2482 1.6875 10.5 1.93934 10.5 2.25C10.5 2.56066 10.2482 2.8125 9.9375 2.8125H8.0625C7.75184 2.8125 7.5 2.56066 7.5 2.25ZM11.25 2.25C11.25 1.93934 11.5018 1.6875 11.8125 1.6875H12.75C13.232 1.6875 13.693 1.78354 14.1138 1.95805C14.4008 2.07705 14.537 2.40614 14.418 2.69311C14.299 2.98007 13.9699 3.11624 13.6829 2.99724C13.3963 2.87838 13.0815 2.8125 12.75 2.8125H11.8125C11.5018 2.8125 11.25 2.56066 11.25 2.25ZM2.69311 3.58204C2.98007 3.70104 3.11624 4.03014 2.99724 4.3171C2.87838 4.60372 2.8125 4.91846 2.8125 5.25V6.1875C2.8125 6.49816 2.56066 6.75 2.25 6.75C1.93934 6.75 1.6875 6.49816 1.6875 6.1875V5.25C1.6875 4.76799 1.78354 4.30699 1.95805 3.88617C2.07705 3.5992 2.40614 3.46304 2.69311 3.58204ZM15.3069 3.58204C15.5939 3.46304 15.923 3.5992 16.042 3.88617C16.2165 4.307 16.3125 4.76799 16.3125 5.25V6.1875C16.3125 6.49816 16.0607 6.75 15.75 6.75C15.4393 6.75 15.1875 6.49816 15.1875 6.1875V5.25C15.1875 4.91846 15.1216 4.60372 15.0028 4.3171C14.8838 4.03014 15.0199 3.70104 15.3069 3.58204ZM2.25 7.5C2.56066 7.5 2.8125 7.75184 2.8125 8.0625V9.9375C2.8125 10.2482 2.56066 10.5 2.25 10.5C1.93934 10.5 1.6875 10.2482 1.6875 9.9375V8.0625C1.6875 7.75184 1.93934 7.5 2.25 7.5ZM15.75 7.5C16.0607 7.5 16.3125 7.75184 16.3125 8.0625V9.9375C16.3125 10.2482 16.0607 10.5 15.75 10.5C15.4393 10.5 15.1875 10.2482 15.1875 9.9375V8.0625C15.1875 7.75184 15.4393 7.5 15.75 7.5ZM2.25 11.25C2.56066 11.25 2.8125 11.5018 2.8125 11.8125V12.75C2.8125 13.0815 2.87838 13.3963 2.99724 13.6829C3.11624 13.9699 2.98007 14.299 2.69311 14.418C2.40614 14.537 2.07705 14.4008 1.95805 14.1138C1.78354 13.693 1.6875 13.232 1.6875 12.75V11.8125C1.6875 11.5018 1.93934 11.25 2.25 11.25ZM15.75 11.25C16.0607 11.25 16.3125 11.5018 16.3125 11.8125V12.75C16.3125 13.232 16.2165 13.693 16.042 14.1138C15.923 14.4008 15.5939 14.537 15.3069 14.418C15.0199 14.299 14.8838 13.9699 15.0028 13.6829C15.1216 13.3963 15.1875 13.0815 15.1875 12.75V11.8125C15.1875 11.5018 15.4393 11.25 15.75 11.25ZM3.58204 15.3069C3.70104 15.0199 4.03014 14.8838 4.3171 15.0028C4.60372 15.1216 4.91846 15.1875 5.25 15.1875H6.1875C6.49816 15.1875 6.75 15.4393 6.75 15.75C6.75 16.0607 6.49816 16.3125 6.1875 16.3125H5.25C4.76799 16.3125 4.30699 16.2165 3.88617 16.042C3.5992 15.923 3.46304 15.5939 3.58204 15.3069ZM14.418 15.3069C14.537 15.5939 14.4008 15.923 14.1138 16.042C13.693 16.2165 13.232 16.3125 12.75 16.3125H11.8125C11.5018 16.3125 11.25 16.0607 11.25 15.75C11.25 15.4393 11.5018 15.1875 11.8125 15.1875H12.75C13.0815 15.1875 13.3963 15.1216 13.6829 15.0028C13.9699 14.8838 14.299 15.0199 14.418 15.3069ZM7.5 15.75C7.5 15.4393 7.75184 15.1875 8.0625 15.1875H9.9375C10.2482 15.1875 10.5 15.4393 10.5 15.75C10.5 16.0607 10.2482 16.3125 9.9375 16.3125H8.0625C7.75184 16.3125 7.5 16.0607 7.5 15.75Z"
        fill={color}
        fillOpacity={opacity}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconNone30.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};