import React from "react";
import { toAbsoluteUrl } from "../../../../_ezs/_helpers/AssetsHelpers";
import "../../../../_ezs/_assets/sass/components/_print.scss";

const getPageConfig = () => {
  return `@page { }`;
};

export const PrintSizeA4X = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="print-ezs print-A4 print-A4x">
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
          PHIẾU YÊU CẦU XUẤT KHO
          </h1>
        </div>
        <div className="body-print text-center">
          <div className="print-date pb-2">
            <p>#12021548 - 01/01/2021</p>
          </div>
          <div className="print-infor ">
            <div className="d-flex  pb-2">
              <div className="text-left font-weight-800 w-130px">
              Kính gửi <span className="dotted-item float-right font-weight-bold">:</span>
              </div>
              <div className="font-weight-bold text-right pl-15">Bộ phận kế toán</div>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <div className="name-user d-flex w-60">
                <div className="name-user-item text-left font-weight-bold w-130px">
                  Họ tên<span className="dotted-item float-right">:</span>
                </div>
                <div className="font-weight-bold text-left pl-15">Phạm Trung Hiếu</div>
              </div>
              <div className="d-flex justify-content-between pl-15 text-left font-weight-bold w-40">
                <div className="text-left font-weight-bold w-70px w-50px">
                Cơ sở<span className="dotted-item float-right">:</span>
                </div>
                <div className="font-weight-bold text-right pl-15">CSER HÀ NỘI</div>
              </div>
            </div>
            <div className="d-flex pb-4">
              <div className="text-left font-weight-bold w-130px">
              Lý do cần nhập<span className="dotted-item float-right">:</span>
              </div>
              <div className="font-weight-bold text-left w-left--calc pl-15">
               Nhập để bán hàng cho khách Nhập để bán hàng cho khách Nhập để bán hàng cho khách Nhập để bán hàng cho khách
              </div>
            </div>
          </div>
          <table className="table table-bordered table-bordered-dark ">
            <thead>
              <tr>
                <th className="font-weight-800 vertical-align-middle">STT</th>
                <th className="font-weight-800 vertical-align-middle">Tên sản phẩm</th>
                <th className="font-weight-800 vertical-align-middle">Mã</th>
                <th className="font-weight-800 vertical-align-middle">Đơn vị</th>
                <th className="font-weight-800 vertical-align-middle w-quantity">Số lượng</th>
              </tr>
            </thead>
            <tbody>
              {Array(30)
                .fill()
                .map((item, index) => (
                  <tr key={index}>
                    <td className="font-weight-bold vertical-align-middle">01</td>
                    <td className="text-left  font-weight-800 print-size-md vertical-align-middle">
                      Kem dưỡng da chống lão hóa, khôi phục tế bào chết
                    </td>
                    <td className="font-weight-bold vertical-align-middle">SP01</td>
                    <td className="font-weight-bold vertical-align-middle">lọ</td>
                    <td className="font-weight-bold vertical-align-middle">10</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="print-signature d-flex justify-content-between font-weight-800 w-100 pt-4">
            <div className="h-300px text-center pl-12">Người lập phiếu 
              <div className="font-weight-bold font-italic print-size-12">(Ký &amp; ghi rõ họ tên)</div>
            </div>
            <div className="h-300px text-center pr-12">Thủ kho
              <div className="font-weight-bold font-italic print-size-12">(Ký &amp; ghi rõ họ tên)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="print-footer py-4 d-flex flex-column align-items-center"> 
        <div className="text-center text-see">
          Thời gian in : 05/11/2021 05:54 PM
        </div>
      </div>
    </div>
  );
});
