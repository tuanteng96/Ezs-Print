import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
// import PrinSize k58
import { PrintSizeK58 } from "./components/PrintSizeK58/PrintSizeK58";
import { PrintSizeK58T } from "./components/PrintSizeK58/PrintSizeK58T";
import { PrintSizeK58C } from "./components/PrintSizeK58/PrintSizeK58C";
import { PrintSizeK58X } from "./components/PrintSizeK58/PrintSizeK58X";

// import PrinSize k80
import { PrintSizeK80 } from "./components/PrintSizeK80/PrintSizeK80";
import { PrintSizeK80T } from "./components/PrintSizeK80/PrintSizeK80T"

// import PrinSize A5
import { PrintSizeA5 } from "./components/PrintSizeA5/PrintSizeA5";

// import PrinSize A4
import { PrintSizeA4 } from "./components/PrintSizeA4/PrintSizeA4";

function PrintPage(props) {
  // import PrinSize K58
  const PrintK58Ref = useRef();
  const PrintSizeK58TRef = useRef();
  const PrintSizeK58CRef = useRef(); 
  const PrintSizeK58XRef = useRef(); 

  // import PrinSize K80
  const PrintK80Ref = useRef();
  const PrintK80TRef = useRef();

  // import PrinSize A5
  const PrintSizeA5Ref = useRef();

  // import PrinSize A4
  const PrintSizeA4Ref = useRef();

  const PrintArr = [
    {
      Name: "Print Size K58",
      ComponentName: "<PrintSizeK58 />",
      Component: <PrintSizeK58 ref={PrintK58Ref} />,
      Ref: PrintK58Ref,
      ButtonName: "Print K58",
    },
    {
      Name: "Print Size K58 Phiếu thu",
      ComponentName: "<PrintSizeK58 />",
      Component: <PrintSizeK58T ref={PrintSizeK58TRef} />,
      Ref: PrintSizeK58TRef,
      ButtonName: "Print K58 phiếu thu",
    },
    {
      Name: "Print Size K58 Phiếu chi tiền",
      ComponentName: "<PrintSizeK58 />",
      Component: <PrintSizeK58C ref={PrintSizeK58CRef} />,
      Ref: PrintSizeK58CRef,
      ButtonName: "Print K58 Phiếu chi tiền",
    },
    {
      Name: "Print Size K58 Phiếu Y/c xuất kho",
      ComponentName: "<PrintSizeK58 />",
      Component: <PrintSizeK58X ref={PrintSizeK58XRef} />,
      Ref: PrintSizeK58XRef,
      ButtonName: "Print K58 Phiếu chi tiền",
    },
    {
      Name: "Print Size K80",
      ComponentName: "<PrintSizeK80 />",
      Component: <PrintSizeK80 ref={PrintK80Ref} />,
      Ref: PrintK80Ref,
      ButtonName: "Print K80",
    },
    {
      Name: "Print Size K80 Phiếu thu",
      ComponentName: "<PrintSizeK80 />",
      Component: <PrintSizeK80T ref={PrintK80TRef} />,
      Ref: PrintK80TRef,
      ButtonName: "Print K80 Phiếu thu",
    },
    {
      Name: "Print Size A5",
      ComponentName: "<PrintSizeA5 />",
      Component: <PrintSizeA5 ref={PrintSizeA5Ref} />,
      Ref: PrintSizeA5Ref,
      ButtonName: "Print A5",
    },
    {
      Name: "Print Size A4",
      ComponentName: "<PrintSizeA4 />",
      Component: <PrintSizeA4 ref={PrintSizeA4Ref} />,
      Ref: PrintSizeA4Ref,
      ButtonName: "Print A4",
    },
  ];

  return (
    <div className="mt-15">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3 className="font-weight-boldest">Print EZS</h3>
          </div>
          <div className="card-body">
            <table className="table table-bordered font-size-lg">
              <thead>
                <tr>
                  <th scope="col">Tên Print</th>
                  <th scope="col">Component</th>
                  <th scope="col" className="text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {PrintArr &&
                  PrintArr.map((item, index) => (
                    <tr key={index}>
                      <td className="vertical-align-middle">{item.Name}</td>
                      <td className="vertical-align-middle">
                        {item.ComponentName}
                      </td>
                      <td className="text-right">
                        <ReactToPrint
                          trigger={() => (
                            <button
                              type="button"
                              className="btn btn-sm btn-primary font-size-md"
                            >
                              {item.ButtonName}
                            </button>
                          )}
                          content={() => item.Ref && item.Ref.current}
                        />
                        <div style={{ display: "none" }}>{item.Component}</div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintPage;
