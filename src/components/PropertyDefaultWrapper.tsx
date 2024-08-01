import React from 'react';

const PropertyDefaultWrapper = ({ className, iconFrameIcon, property1 }) => {
  return (
    <div className={`property-default-wrapper ${className}`}>
      <div className="icon-frame">{iconFrameIcon}</div>
      <div className={`property ${property1}`}></div>
    </div>
  );
};

export default PropertyDefaultWrapper;
