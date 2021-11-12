import React from "react";
import { toAbsoluteUrl } from "../../../../_ezs/_helpers/AssetsHelpers";
import "../../../../_ezs/_assets/sass/components/_print.scss";

const getPageConfig = () => {
  return `@page { size: auto; }`;
};

export const PrintSizeA5T = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="print-ezs print-A5">
      <style>{getPageConfig()}</style>
      <div className="header-print">
        <div className="print-logo text-center">
          <img src={toAbsoluteUrl("/media/print/logoCSER.png")} alt="" />
        </div>
        <div className="print-title text-center text-uppercase font-weight-800 print-sizes-md">
          cser beauty
        </div>
        <div className="print-address text-center print-size-sm py-1">
          22/42 Vũ Ngọc Phan - Láng Hạ - Đống Đa - HN
        </div>
        <div className="print-hottline text-center print-size-sm">
          Hotline : 0981.883.338
        </div>
        <h1 className="print-receipt text-center text-uppercase print-size-xl font-weight-900 mb-0 py-3">
          Hóa đơn bán hàng
        </h1>
      </div>
      <div className="body-print text-center">
        <div className="print-date pb-2">
          <p>#12021548 - 01/01/2021</p>
        </div>
        <div className="print-infor ">
          <div className="name-user d-flex justify-content-between">
            <div className="name-user-item text-left font-weight-bold w-200px">
              Khách hàng <span className="dotted-item float-right">:</span>
            </div>
            <div className="font-weight-800 text-right">Phạm Trung Hiếu</div>
          </div>
          <div className="name-hotline d-flex justify-content-between my-3">
            <div className="name-hotline-item text-left font-weight-bold w-200px">
              Số điện thoại <span className="dotted-item float-right">:</span>
            </div>
            <div className="font-weight-800 text-right">0978.544.973</div>
          </div>
          <div className="name-address d-flex justify-content-between pb-4">
            <div className="name-address-item text-left font-weight-bold w-200px">
              Địa chỉ <span className="dotted-item float-right">:</span>
            </div>
            <div className="font-weight-800 text-right ">
              22/42 Vũ Ngọc Phan - Láng Hạ - Đống Đa - HN
            </div>
          </div>
        </div>
        <table className="table table-bordered table-bordered-dark ">
          <thead>
            <tr>
              <th className="font-weight-800">Tên mặt hàng</th>
              <th className="font-weight-800">Số lượng</th>
              <th className="font-weight-800">Đơn giá</th>
              <th className="font-weight-800">Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {Array(7)
              .fill()
              .map((item, index) => (
                <tr key={index}>
                  <td className="text-left  font-weight-800 print-size-md vertical-align-middle">
                    Kem dưỡng da chống lão hóa, khôi phục tế bào chết
                  </td>
                  <td className="font-weight-800 vertical-align-middle">01</td>
                  <td className="font-weight-bold vertical-align-middle">
                    <p className="into-money-discount ">
                      1.500.000
                    </p>
                    <p className="into-money ">
                      1.200.000
                    </p>
                  </td>
                  <td className="font-weight-bold vertical-align-middle">
                    <p className="into-money ">1.200.000</p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="total-payment ">
          <div className="total-money">
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold w-200px text-left">
                Tổng giá trị <span className="dotted-item float-right">:</span>
              </p>
              <p className="total-money-item font-weight-800">
                9.200.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold w-200px text-left">
                Giá trị chiết khấu{" "}
                <span className="dotted-item float-right">:</span>
              </p>
              <p className="total-money-item total-money-item font-weight-800">
                1.200.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-800 w-200px text-left">
                Giá trị cần thanh toán{" "}
                <span className="dotted-item float-right">:</span>
              </p>
              <p className="total-money-item font-weight-800">
                8.000.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
          </div>
          <div className="pay-money">
            <h4 className="text-left font-weight-800 print-sizes-lg">
              Thanh toán
            </h4>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold w-200px text-left">
                Chuyển khoản
                <span className="dotted-item ml-1 float-right">:</span>
              </p>
              <p className="total-money-item font-weight-bold">
                1.000.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold w-200px text-left">
                Ví<span className="dotted-item ml-1 float-right">:</span>
              </p>
              <p className="total-money-item font-weight-bold">
                1.000.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold w-200px text-left">
                Nợ đơn hàng
                <span className="dotted-item ml-1 float-right">:</span>
              </p>
              <p className="total-money-item font-weight-bold">
                1.000.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
          </div>
          <div className="history-total">
            <h4 className="font-weight-800 text-left print-sizes-lg">
              Lịch sử thanh toán
            </h4>
            <div className="d-flex justify-content-between text-left border-bottom font-weight-bold">
              <p className="date mb-0 py-2 mr-2">01/01/2021</p>
              <p className="payments mb-0 py-2 w-150px">Tiền mặt</p>
              <p className="total-payments mb-0 py-2 font-weight-bold">
                5.000.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
            <div className="d-flex justify-content-between text-left border-bottom font-weight-bold">
              <p className="date mb-0 py-2 mr-2">05/11/2021</p>
              <p className="payments mb-0 py-2 w-150px">Ví</p>
              <p className="total-payments mb-0 py-2 font-weight-bold">
                1.000.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
            <div className="d-flex justify-content-between text-left border-bottom font-weight-bold">
              <p className="date mb-0 py-2 mr-2">05/11/2021</p>
              <p className="payments mb-0 py-2 w-150px ">Chuyển khoản</p>
              <p className="total-payments mb-0 py-2 font-weight-bold">
                1.000.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
          </div>
        </div>
        <div className="print-footer py-5 ">
          <img
            src={toAbsoluteUrl("/media/print/barcode.png")}
            alt=""
            className="py-6"
          />
          <div className="text-center pb-1 text-thank font-weight-bold">
            Cảm ơn quý khách và hẹn gặp lại !
          </div>
          <div className="text-center text-see">
            Thời gian in : 05/11/2021 05:54 PM{" "}
          </div>
        </div>
        
      </div>
    </div>
  );
});
