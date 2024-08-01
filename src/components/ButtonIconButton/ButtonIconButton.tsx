/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconNone30 } from "../../icons/IconNone30";
import { ButtonIconButtons } from "../ButtonIconButtons";

interface Props {
  size: "large" | "medium" | "small";
  className: any;
  buttonIconButtonsVariantPrimaryClassName: any;
}

export const ButtonIconButton = ({ size, className, buttonIconButtonsVariantPrimaryClassName }: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-start relative ${className}`}>
      <ButtonIconButtons
        className={buttonIconButtonsVariantPrimaryClassName}
        iconFrameIcon={
          <IconNone30
            className={
              size === "large"
                ? "!absolute !w-[22px] !h-[22px] !top-px !left-px"
                : size === "medium"
                ? "!absolute !w-[18px] !h-[18px] !top-[3px] !left-[3px]"
                : size === "small"
                ? "!absolute !w-4 !h-4 !top-1 !left-1"
                : undefined
            }
            color="white"
          />
        }
        iconFrameSize={size === "medium" ? "twenty" : size === "small" ? "eighteen" : "twenty-four"}
        iconFrameSizeClassName={["medium", "small"].includes(size) ? "!h-6 !w-6" : undefined}
        stateProp="default"
        type="default"
        variant="primary"
      />
    </div>
  );
};

ButtonIconButton.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
};
