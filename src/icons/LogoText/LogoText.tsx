/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const LogoText = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="30"
      viewBox="0 0 90 30"
      width="90"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_bd_2350_1664)">
        <path
          d="M84.9056 9.12536V21.8879C84.511 22.2174 83.9835 22.4933 83.323 22.7157C82.6626 22.9381 81.8605 23.0493 80.917 23.0493C79.9735 23.0493 79.1715 22.8475 78.511 22.4439C77.7647 22.0073 77.3916 21.3896 77.3916 20.5906V7.8281C77.7862 7.49864 78.3137 7.22272 78.9742 7.00033C79.6347 6.77794 80.4324 6.66675 81.3673 6.66675C82.3023 6.66675 83.1129 6.86443 83.7991 7.25978C84.5368 7.71279 84.9056 8.33465 84.9056 9.12536Z"
          fill="#121212"
        />
      </g>
      <g filter="url(#filter1_bd_2350_1664)">
        <path
          d="M71.5669 14.4132C71.5669 13.5896 71.5283 13.0254 71.4511 12.7206C71.3739 12.4076 71.2324 12.2511 71.0265 12.2511C70.8979 12.2511 70.7821 12.2923 70.6791 12.3747C70.6963 12.5229 70.722 12.7206 70.7563 12.9677C70.7906 13.2148 70.8078 13.7419 70.8078 14.5491V15.3522C70.8078 15.9123 70.7949 16.32 70.7692 16.5753C70.7435 16.8307 70.722 17.0489 70.7049 17.2301C70.6963 17.329 70.6877 17.4278 70.6791 17.5266C70.7821 17.609 70.8979 17.6502 71.0265 17.6502C71.2324 17.6502 71.3739 17.4978 71.4511 17.1931C71.5283 16.8801 71.5669 16.3118 71.5669 15.4881V14.4132ZM66.7677 22.9504C65.8156 22.9504 65.0779 22.7074 64.5547 22.2215C64.04 21.7355 63.7827 21.0025 63.7827 20.0223V8.90297C63.7827 8.27699 64.4346 7.74986 65.7384 7.32155C67.0508 6.88502 68.5133 6.66675 70.1259 6.66675C72.9651 6.66675 75.1824 7.32567 76.7778 8.64352C78.4934 10.0602 79.3511 12.1729 79.3511 14.9816C79.3511 17.5102 78.5191 19.4705 76.855 20.8625C75.1995 22.2544 72.9222 22.9504 70.0229 22.9504H66.7677Z"
          fill="#121212"
        />
      </g>
      <g filter="url(#filter2_b_2350_1664)">
        <path
          clipRule="evenodd"
          d="M56.9781 23.0015C58.7327 23.0015 60.3633 22.4913 61.7176 21.617C62.466 21.9801 63.312 22.1847 64.2078 22.1847C67.2612 22.1847 69.7365 19.8079 69.7365 16.8759C69.7365 14.1325 67.5692 11.8751 64.7891 11.5961C63.4835 8.69612 60.4776 6.66675 56.9781 6.66675C53.1018 6.66675 49.8311 9.15671 48.806 12.5618C46.6517 13.1359 45.0703 15.0328 45.0703 17.2843C45.0703 19.9907 47.3552 22.1847 50.1737 22.1847C50.9632 22.1847 51.7109 22.0125 52.3782 21.7052C53.7043 22.5255 55.2833 23.0015 56.9781 23.0015Z"
          fill="#5EB0FF"
          fillOpacity="0.8"
          fillRule="evenodd"
        />
      </g>
      <g filter="url(#filter3_bd_2350_1664)">
        <path
          d="M42.4793 18.0826C42.5651 18.0826 42.6423 18.062 42.7109 18.0208V16.8965C43.2942 16.5177 44.1091 16.2088 45.1555 15.9699C46.2106 15.7311 47.2356 15.6116 48.2306 15.6116C48.6852 16.0564 49.0626 16.7236 49.3629 17.6131C49.6717 18.4944 49.8346 19.2934 49.8518 20.01C49.6802 20.3394 49.3886 20.6936 48.9769 21.0725C48.5737 21.4514 48.0848 21.8014 47.5101 22.1226C46.0862 22.9298 44.4522 23.3334 42.608 23.3334C39.9661 23.3334 37.886 22.5962 36.3677 21.1219C34.798 19.6311 34.0132 17.5678 34.0132 14.9321C34.0132 12.2882 34.8709 10.2126 36.5865 8.7053C37.3413 8.0299 38.2205 7.52335 39.2241 7.18565C40.2277 6.83972 41.2827 6.66675 42.3892 6.66675C44.5508 6.66675 46.3221 7.16918 47.7031 8.17404C49.0841 9.1789 49.7746 10.4185 49.7746 11.8928C49.7746 13.0048 49.4186 13.8284 48.7067 14.3638C47.9947 14.8909 47.0297 15.1545 45.8117 15.1545C45.1427 15.1545 44.4693 14.998 43.7917 14.685C43.1141 14.3638 42.7109 14.0632 42.5822 13.7831C42.5822 13.1077 42.5951 12.5765 42.6208 12.1894C42.6037 12.1811 42.5737 12.177 42.5308 12.177H42.4407C42.312 12.177 42.2091 12.2141 42.1319 12.2882C42.0633 12.3541 41.999 12.4982 41.9389 12.7206C41.8875 12.943 41.8617 13.5484 41.8617 14.5368C41.8617 16.9007 42.0676 18.0826 42.4793 18.0826Z"
          fill="#121212"
        />
      </g>
      <g filter="url(#filter4_bd_2350_1664)">
        <path
          d="M20.4043 20.5536V8.17404C20.4043 7.74574 20.7603 7.39156 21.4722 7.11152C22.1927 6.82324 23.0376 6.6791 24.0069 6.6791C24.5559 6.6791 25.0705 6.745 25.5509 6.87678C26.0398 7.00033 26.4129 7.16094 26.6703 7.35862C27.0219 7.78692 27.3436 8.22346 27.6352 8.66823C27.9269 9.113 28.5831 10.1508 29.6038 11.7816C29.6982 11.7816 29.7839 11.7528 29.8611 11.6952C29.9383 11.6375 29.9769 11.551 29.9769 11.4357C29.9769 11.3122 29.8697 11.0774 29.6553 10.7315L28.2657 8.43349V7.75397C28.7032 7.40804 29.235 7.14035 29.8611 6.95091C30.4873 6.76147 31.1349 6.66675 31.804 6.66675C32.8933 6.66675 33.7725 6.85619 34.4416 7.23507C35.2222 7.68808 35.6124 8.39642 35.6124 9.3601V21.0601C35.6124 21.7685 35.2608 22.2833 34.5574 22.6045C33.957 22.8928 33.1549 23.0369 32.1514 23.0369C31.5938 23.0369 31.0491 22.9792 30.5173 22.8639C29.9941 22.7486 29.5824 22.6004 29.2821 22.4192C28.6731 21.6696 28.0684 20.8295 27.468 19.8988L26.1556 17.7985C25.9068 17.8314 25.7825 17.9591 25.7825 18.1815C25.7825 18.3215 25.9068 18.5892 26.1556 18.9845L27.7639 21.4802V22.135C26.7689 22.7527 25.6452 23.0616 24.3929 23.0616C23.1491 23.0616 22.1713 22.8433 21.4593 22.4068C20.756 21.9703 20.4043 21.3525 20.4043 20.5536Z"
          fill="#121212"
        />
      </g>
      <g filter="url(#filter5_b_2350_1664)">
        <path
          d="M22.1054 14.8341C22.1054 19.3448 18.2973 23.0015 13.5998 23.0015C8.90231 23.0015 5.09424 19.3448 5.09424 14.8341C5.09424 10.3234 8.90231 6.66675 13.5998 6.66675C18.2973 6.66675 22.1054 10.3234 22.1054 14.8341Z"
          fill="#FFD65E"
          fillOpacity="0.8"
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="24.3826"
          id="filter0_bd_2350_1664"
          width="15.5139"
          x="74.3916"
          y="2.66675"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2350_1664" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
          <feBlend in2="effect1_backgroundBlur_2350_1664" mode="normal" result="effect2_dropShadow_2350_1664" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow_2350_1664" mode="normal" result="shape" />
        </filter>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="24.2837"
          id="filter1_bd_2350_1664"
          width="23.5684"
          x="60.7827"
          y="2.66675"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2350_1664" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
          <feBlend in2="effect1_backgroundBlur_2350_1664" mode="normal" result="effect2_dropShadow_2350_1664" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow_2350_1664" mode="normal" result="shape" />
        </filter>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="18.3347"
          id="filter2_b_2350_1664"
          width="26.6663"
          x="44.0703"
          y="5.66675"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2350_1664" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_2350_1664" mode="normal" result="shape" />
        </filter>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="24.6667"
          id="filter3_bd_2350_1664"
          width="23.8386"
          x="31.0132"
          y="2.66675"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2350_1664" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
          <feBlend in2="effect1_backgroundBlur_2350_1664" mode="normal" result="effect2_dropShadow_2350_1664" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow_2350_1664" mode="normal" result="shape" />
        </filter>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="24.3948"
          id="filter4_bd_2350_1664"
          width="23.2083"
          x="17.4043"
          y="2.66675"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2350_1664" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
          <feBlend in2="effect1_backgroundBlur_2350_1664" mode="normal" result="effect2_dropShadow_2350_1664" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow_2350_1664" mode="normal" result="shape" />
        </filter>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="18.3347"
          id="filter5_b_2350_1664"
          width="19.0112"
          x="4.09424"
          y="5.66675"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2350_1664" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_2350_1664" mode="normal" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
