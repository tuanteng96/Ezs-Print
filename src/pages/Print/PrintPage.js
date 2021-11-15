import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
// import PrinSize k58
import { PrintSizeK58 } from "./components/PrintSizeK58/PrintSizeK58";
import { PrintSizeK58T } from "./components/PrintSizeK58/PrintSizeK58T";
import { PrintSizeK58TTKH } from "./components/PrintSizeK58/PrintSizeK58TTKH";
import { PrintSizeK58DV } from "./components/PrintSizeK58/PrintSizeK58DV";
import { PrintSizeK58X } from "./components/PrintSizeK58/PrintSizeK58X";
import { PrintSizeK58XuatKho } from "./components/PrintSizeK58/PrintSizeK58XuatKho";

// import PrinSize k80
import { PrintSizeK80 } from "./components/PrintSizeK80/PrintSizeK80";
import { PrintSizeK80T } from "./components/PrintSizeK80/PrintSizeK80T";
import { PrintSizeK80TTKH } from "./components/PrintSizeK80/PrintSizeK80TTKH";
import { PrintSizeK80DV } from "./components/PrintSizeK80/PrintSizeK80DV";
import { PrintSizeK80X } from "./components/PrintSizeK80/PrintSizeK80X";
import { PrintSizeK80XuatKho } from "./components/PrintSizeK80/PrintSizeK80XuatKho";

// import PrinSize A5
import { PrintSizeA5 } from "./components/PrintSizeA5/PrintSizeA5";
import { PrintSizeA5T } from "./components/PrintSizeA5/PrintSizeA5T";
import { PrintSizeA5TTKH } from "./components/PrintSizeA5/PrintSizeA5TTKH";
import { PrintSizeA5DV } from "./components/PrintSizeA5/PrintSizeA5DV";
import { PrintSizeA5X } from "./components/PrintSizeA5/PrintSizeA5X";
import { PrintSizeA5XuatKho } from "./components/PrintSizeA5/PrintSizeA5XuatKho";


// import PrinSize A4
import { PrintSizeA4 } from "./components/PrintSizeA4/PrintSizeA4";
import { PrintSizeA4T } from "./components/PrintSizeA4/PrintSizeA4T";
import { PrintSizeA4TTKH } from "./components/PrintSizeA4/PrintSizeA4TTKH";
import { PrintSizeA4DV } from "./components/PrintSizeA4/PrintSizeA4DV";
import { PrintSizeA4X } from "./components/PrintSizeA4/PrintSizeA4X";
import { PrintSizeA4XuatKho} from "./components/PrintSizeA4/PrintSizeA4XuatKho";

function PrintPage(props) {
  // import PrinSize K58
  const PrintK58Ref = useRef();
  const PrintSizeK58TRef = useRef();
  const PrintSizeK58TTKHRef = useRef();
  const PrintSizeK58DVRef = useRef();
  const PrintSizeK58XRef = useRef();
  const PrintSizeK58XuatKhoRef = useRef();

  // import PrinSize K80
  const PrintK80Ref = useRef();
  const PrintK80TRef = useRef();
  const PrintSizeK80TTKHRef = useRef();
  const PrintSizeK80DVRef = useRef();
  const PrintSizeK80XRef = useRef();
  const PrintSizeK80XuatKhoRef = useRef();

  // import PrinSize A5
  const PrintSizeA5Ref = useRef();
  const PrintSizeA5TRef = useRef();
  const PrintSizeA5TTKHRef = useRef();
  const PrintSizeA5DVRef = useRef();
  const PrintSizeA5XRef = useRef();
  const PrintSizeA5XuatKhoRef = useRef();

  // import PrinSize A4
  const PrintSizeA4Ref = useRef();
  const PrintSizeA4TRef = useRef();
  const PrintSizeA4TTKHRef = useRef ();
  const PrintSizeA4DVRef = useRef();
  const PrintSizeA4XRef = useRef();
  const PrintSizeA4XuatKhoRef = useRef();


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
      Name: "Print Size K58 Thông tin khách hàng",
      ComponentName: "<PrintSizeK58 />",
      Component: <PrintSizeK58TTKH ref={PrintSizeK58TTKHRef} />,
      Ref: PrintSizeK58TTKHRef,
      ButtonName: "Print K58 Thông tin khách hàng",
    },
    {
      Name: "Print Size K58 Phiếu làm dịch vụ",
      ComponentName: "<PrintSizeK58 />",
      Component: <PrintSizeK58DV ref={PrintSizeK58DVRef} />,
      Ref: PrintSizeK58DVRef,
      ButtonName: "Print K58 Phiếu làm dịch vụ",
    },
    {
      Name: "Print Size K58 Phiếu yêu cầu xuất kho",
      ComponentName: "<PrintSizeK58 />",
      Component: <PrintSizeK58X ref={PrintSizeK58XRef} />,
      Ref: PrintSizeK58XRef,
      ButtonName: "Print K58 Phiếu yêu cầu xuất kho",
    },
    {
      Name: "Print Size K58 Phiếu xuất kho",
      ComponentName: "<PrintSizeK58 />",
      Component: <PrintSizeK58XuatKho ref={PrintSizeK58XuatKhoRef} />,
      Ref: PrintSizeK58XuatKhoRef,
      ButtonName: "Print K58 Phiếu xuất kho",
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
      Name: "Print Size K80 Thông tin khách hàng",
      ComponentName: "<PrintSizeK80 />",
      Component: <PrintSizeK80TTKH ref={PrintSizeK80TTKHRef} />,
      Ref: PrintSizeK80TTKHRef,
      ButtonName: "Print K80 Thông tin khách hàng",
    },
    {
      Name: "Print Size K80 Phiếu làm dịch vụ",
      ComponentName: "<PrintSizeK80 />",
      Component: <PrintSizeK80DV ref={PrintSizeK80DVRef} />,
      Ref: PrintSizeK80DVRef,
      ButtonName: "Print K80 Phiếu làm dịch vụ",
    },
    {
      Name: "Print Size K80 Phiếu y/c xuất kho",
      ComponentName: "<PrintSizeK80 />",
      Component: <PrintSizeK80X ref={PrintSizeK80XRef} />,
      Ref: PrintSizeK80XRef,
      ButtonName: "Print K80 Phiếu y/c xuất kho",
    },
    
    {
      Name: "Print Size K80 Phiếu xuất kho",
      ComponentName: "<PrintSizeK80 />",
      Component: <PrintSizeK80XuatKho ref={PrintSizeK80XuatKhoRef} />,
      Ref: PrintSizeK80XuatKhoRef,
      ButtonName: "Print K80 Phiếu xuất kho",
    },
    {
      Name: "Print Size A5",
      ComponentName: "<PrintSizeA5 />",
      Component: <PrintSizeA5T ref={PrintSizeA5TRef} />,
      Ref: PrintSizeA5TRef,
      ButtonName: "Print A5 Phiếu thu",
    },
    {
      Name: "Print Size A5 Phiếu thu",
      ComponentName: "<PrintSizeA5 />",
      Component: <PrintSizeA5 ref={PrintSizeA5Ref} />,
      Ref: PrintSizeA5Ref,
      ButtonName: "Print A5",
    },
    {
      Name: "Print Size A5 Thông tin khách hàng",
      ComponentName: "<PrintSizeA5 />",
      Component: <PrintSizeA5TTKH ref={PrintSizeA5TTKHRef} />,
      Ref: PrintSizeA5TTKHRef,
      ButtonName: "Print A5 Thông tin khách hàng",
    },
    {
      Name: "Print Size A5 Phiếu làm dịch vụ",
      ComponentName: "<PrintSizeA5 />",
      Component: <PrintSizeA5DV ref={PrintSizeA5DVRef} />,
      Ref: PrintSizeA5DVRef,
      ButtonName: "Print A5 Phiếu làm dịch vụ",
    },
    {
      Name: "Print Size A5 Phiếu y/c xuất kho",
      ComponentName: "<PrintSizeA5 />",
      Component: <PrintSizeA5X ref={PrintSizeA5XRef} />,
      Ref: PrintSizeA5XRef,
      ButtonName: "Print A5 Phiếu y/c xuất kho",
    },
    {
      Name: "Print Size A5 Phiếu xuất kho",
      ComponentName: "<PrintSizeA5 />",
      Component: <PrintSizeA5XuatKho ref={PrintSizeA5XuatKhoRef} />,
      Ref: PrintSizeA5XuatKhoRef,
      ButtonName: "Print A5 Phiếu xuất kho",
    },
    {
      Name: "Print Size A4",
      ComponentName: "<PrintSizeA4 />",
      Component: <PrintSizeA4 ref={PrintSizeA4Ref} />,
      Ref: PrintSizeA4Ref,
      ButtonName: "Print A4",
    },
    {
      Name: "Print Size A4 Phiếu thu",
      ComponentName: "<PrintSizeA4 />",
      Component: <PrintSizeA4T ref={PrintSizeA4TRef} />,
      Ref: PrintSizeA4TRef,
      ButtonName: "Print A4 Phiếu thu",
    },
    {
      Name: "Print Size A4 Thông tin khách hàng",
      ComponentName: "<PrintSizeA4 />",
      Component: <PrintSizeA4TTKH ref={PrintSizeA4TTKHRef} />,
      Ref: PrintSizeA4TTKHRef,
      ButtonName: "Print A4 Thông tin khách hàng",
    },
    {
      Name: "Print Size A4 Phiếu làm dịch vụ",
      ComponentName: "<PrintSizeA4 />",
      Component: <PrintSizeA4DV ref={PrintSizeA4DVRef} />,
      Ref: PrintSizeA4DVRef,
      ButtonName: "Print A4 Phiếu làm dịch vụ",
    },
    {
      Name: "Print Size A4 Phiếu y/c xuất kho",
      ComponentName: "<PrintSizeA4 />",
      Component: <PrintSizeA4X ref={PrintSizeA4XRef} />,
      Ref: PrintSizeA4XRef,
      ButtonName: "Print A4 Phiếu y/c xuất kho",
    },
    {
      Name: "Print Size A4 Phiếu xuất kho",
      ComponentName: "<PrintSizeA4 />",
      Component: <PrintSizeA4XuatKho ref={PrintSizeA4XuatKhoRef} />,
      Ref: PrintSizeA4XuatKhoRef,
      ButtonName: "Print A4 Phiếu xuất kho",
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
