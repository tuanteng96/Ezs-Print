import React from "react";
import { toAbsoluteUrl } from "../../../../_ezs/_helpers/AssetsHelpers";
import "../../../../_ezs/_assets/sass/components/_print.scss";

const getPageConfig = () => {
  return `@page {  }`;
};

export const PrintSizeA5DV = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="print-ezs print-A5 print-A5dv">
      <style>{getPageConfig()}</style>
      <div className="print-body">
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
          <h1 className="print-receipt text-center text-uppercase print-size-xl font-weight-900 mb-0 pt-3">
          PHIẾU LÀM DỊCH VỤ
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
                <th className="font-weight-800">Buổi thứ</th>
                <th className="font-weight-800">Tổng buổi</th>
                <th className="font-weight-800">Kỹ thuật viên</th>
              </tr>
            </thead>
            <tbody>
              {Array(2)
                .fill()
                .map((item, index) => (
                  <tr key={index}>
                    <td className="text-left  font-weight-800 print-size-md vertical-align-middle">
                      Kem dưỡng da chống lão hóa, khôi phục tế bào chết
                    </td>
                    <td className="font-weight-bold vertical-align-middle">01</td>
                    <td className="font-weight-bold vertical-align-middle">10</td>
                    <td className="font-weight-bold vertical-align-middle">Nhân viên A</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="text-left">
              <p className=""><span className="font-weight-800">Ghi chú :</span> Khách dị ứng với tinh dầu nghệ, khách đã mang theo thuốc triệt lông</p>
          </div>
          <div className="print-signature d-flex justify-content-between font-weight-800 w-100 pt-4">
            <div className="h-300px pl-12">Khách hàng</div>
            <div className="h-300px pr-12">Kỹ thuật viên</div>
          </div>
        </div>
      </div>
      <div className="print-footer py-4 d-flex flex-column align-items-center">
        <div className="text-center pb-1 text-thank font-weight-bold">
          Cảm ơn quý khách và hẹn gặp lại !
        </div>
        <div className="text-center text-see">
          Thời gian in : 05/11/2021 05:54 PM
        </div>
      </div>
    </div>
  );
});
