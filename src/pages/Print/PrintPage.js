import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { PrintSizeA5 } from "./components/PrintSizeA5/PrintSizeA5";

// import PropTypes from 'prop-types';

// PrintPage.propTypes = {

// };

function PrintPage(props) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <div style={{ display: "none" }}>
        <PrintSizeA5 ref={componentRef} />
      </div>
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
}

export default PrintPage;
