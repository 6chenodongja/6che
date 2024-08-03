/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconSearch = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M3.33333 6.66667C3.33333 4.82572 4.82572 3.33333 6.66667 3.33333C8.50762 3.33333 10 4.82572 10 6.66667C10 8.50762 8.50762 10 6.66667 10C4.82572 10 3.33333 8.50762 3.33333 6.66667ZM6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2ZM11.1381 10.1953C10.8777 9.93491 10.4556 9.93491 10.1953 10.1953C9.93491 10.4556 9.93491 10.8777 10.1953 11.1381L12.8619 13.8047C13.1223 14.0651 13.5444 14.0651 13.8047 13.8047C14.0651 13.5444 14.0651 13.1223 13.8047 12.8619L11.1381 10.1953Z"
        fill="#121212"
        fillRule="evenodd"
      />
    </svg>
  );
};
