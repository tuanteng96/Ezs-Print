import React from "react";
import "../../../../_ezs/_assets/sass/components/_print.scss";
export const PrintSizeA5 = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <div className="print-header">
          <div className="logo">
            <img src="" alt=""/>
          </div>
          <h3 className="text-center font-size-lg text-uppercase font-weight-boldest">cser beauty 2</h3>
        </div>
      </div>
    );
});
