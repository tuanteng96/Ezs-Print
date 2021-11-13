import React from "react";
import { toAbsoluteUrl } from "../../../../_ezs/_helpers/AssetsHelpers";
import "../../../../_ezs/_assets/sass/components/_print.scss";

const getPageConfig = () => {
  return `@page {  }`;
};

export const PrintSizeA5TTKH = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="print-ezs print-A5 print-A5Ttkh">
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
          <div className="print-infor pb-5">
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
            <div className="name-email d-flex justify-content-between pb-2">
              <div className="name-email-item text-left font-weight-bold  w-150px ">
                Email<span className="dotted-item float-right"> :</span>
              </div>
              <div className="font-weight-bold text-right w-left--calc text-right">
                trunghieu@ezs.vn
              </div>
            </div>
            <div className="name-birthday d-flex justify-content-between">
              <div className="name-birthday-item text-left font-weight-bold w-90px">
                Ngày sinh<span className="dotted-item float-right"> :</span>
              </div>
              <div className="font-weight-bold text-right w-left--calc text-right">
                24/12/1986
              </div>
            </div>
          </div>
          <div className="use-login pt-4">
            <div className="d-flex justify-content-between pb-2">
              <p className="total-money-item font-weight-bold mb-0  w-150px text-left ">
                User <span className="dotted-item float-right">:</span>
              </p>
              <p className="total-money-item font-weight-800 mb-0 w-left--calc text-right">hieuezs</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p className="total-money-item font-weight-bold mb-0  w-150px text-left ">
              Mật khẩu <span className="dotted-item float-right">:</span>
              </p>
              <p className="total-money-item font-weight-800 mb-0 w-left--calc text-right">1234</p>
            </div>
          </div>
        </div>
      </div>
      <div className="print-footer py-4 d-flex flex-column align-items-center ">
        <img
          src={toAbsoluteUrl("/media/print/QR.png")}
          alt=""
        className="py-6"/>
        <p className="pb-1 font-weight-bold text-left"><span className="font-weight-800">Lưu ý :</span> Cài đặt ứng dụng EZSpa để quản lý tài khoản.</p>
        <div className="text-center pb-1 text-thank font-weight-bold">
              Cảm ơn quý khách và hẹn gặp lại !
        </div>
      </div>
    </div>
  );
});
