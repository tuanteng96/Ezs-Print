import React from "react";
import { toAbsoluteUrl } from "../../../../_ezs/_helpers/AssetsHelpers";
import "../../../../_ezs/_assets/sass/components/_print.scss";

const getPageConfig = () => {
  return `@page { }`;
};

export const PrintSizeA4T = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="print-ezs print-A4 print-A4T">
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
            PHIẾU THU TIỀN
          </h1>
        </div>
        <div className="body-print text-center">
          <div className="print-date pb-2">
            <p>#12021548 - 01/01/2021</p>
          </div>
          <div className="print-infor ">
            <div className="name-user d-flex justify-content-between">
              <div className="name-user-item text-left font-weight-bold w-150px">
                Khách hàng <span className="dotted-item float-right">:</span>
              </div>
              <div className="font-weight-bold text-right">Phạm Trung Hiếu</div>
            </div>
            <div className="name-hotline d-flex justify-content-between my-3">
              <div className="name-hotline-item text-left font-weight-bold w-150px">
                Số điện thoại <span className="dotted-item float-right">:</span>
              </div>
              <div className="font-weight-bold text-right">0978.544.973</div>
            </div>
            <div className="name-address d-flex justify-content-between pb-4">
              <div className="name-address-item text-left font-weight-bold w-150px">
                Địa chỉ <span className="dotted-item float-right">:</span>
              </div>
              <div className="font-weight-bold text-right ">
                22/42 Vũ Ngọc Phan - Láng Hạ - Đống Đa - HN
              </div>
            </div>
          </div>
          <div className="total-payment pb-4 pt-4">
          <div className="total-money">
            <div className="d-flex justify-content-between pb-2">
              <p className="total-money-item font-weight-bold mb-0 text-left w-150px">
              Số tiền <span className="dotted-item float-right">:</span>
              </p>
              <p className="total-money-item total-money-item font-weight-800 mb-0 w-left--calc text-right">
              9.200.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
            <div className="pb-2">
              <p className="total-money-item font-weight-bold mb-0 text-right">Chín triệu hai trăm nghìn</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p className="total-money-item font-weight-bold mb-0 w-150px text-left">
              Hình thức<span className="dotted-item float-right"> :</span>
              </p>
              <p className="total-money-item font-weight-bold mb-0 w-left--calc text-right">Tiền mặt</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p className="total-money-item font-weight-bold mb-0 w-150px text-left ">
              Nội dung <span className="dotted-item float-right">:</span>
              </p>
              <p className="total-money-item font-weight-bold mb-0 w-left--calc text-right">Thanh toán đơn hàng nợ ngày 15/09</p>
            </div>
          </div>
        </div>
        </div>
        <div className="print-signature d-flex justify-content-between font-weight-800 w-100 pt-4">
            <div className="h-300px text-left">Người lập phiếu 
              <div className="font-weight-bold font-italic print-size-12">(Ký &amp; ghi rõ họ tên)</div>
            </div>
            <div className="h-300px text-center">Người nộp tiền
              <div className="font-weight-bold font-italic print-size-12">(Ký &amp; ghi rõ họ tên)</div>
            </div>
            <div className="h-300px text-center">Thủ quỹ
            <div className="font-weight-bold font-italic print-size-12">(Ký &amp; ghi rõ họ tên)</div>
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
