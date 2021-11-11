import React from "react";
import { toAbsoluteUrl } from "../../../../_ezs/_helpers/AssetsHelpers";
import "../../../../_ezs/_assets/sass/components/_print.scss";

const getPageConfig = () => {
  return `@page { size: auto; }`;
};

export const PrintSizeA4T = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="print-ezs print-A4">
            
        </div>
    )
})
