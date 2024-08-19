/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from 'react';

interface Props {
  className: any;
}

export const IconLogin = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.6763 17.9388C17.8354 17.2869 18 16.6992 18 16.5C18 16.3008 17.8354 15.7131 16.6763 15.0612C15.58 14.4445 13.9307 14 12 14C10.0693 14 8.42002 14.4445 7.32367 15.0612C6.16462 15.7131 6 16.3008 6 16.5C6 16.6992 6.16462 17.2869 7.32367 17.9388C8.42002 18.5555 10.0693 19 12 19C13.9307 19 15.58 18.5555 16.6763 17.9388ZM12 21C16.4183 21 20 18.9853 20 16.5C20 14.0147 16.4183 12 12 12C7.58172 12 4 14.0147 4 16.5C4 18.9853 7.58172 21 12 21Z"
        fill="black"
      />
    </svg>
  );
};
