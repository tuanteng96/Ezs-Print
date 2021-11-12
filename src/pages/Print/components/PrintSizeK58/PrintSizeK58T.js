import React from 'react'
import { toAbsoluteUrl } from '../../../../_ezs/_helpers/AssetsHelpers';
import "../../../../_ezs/_assets/sass/components/_print.scss";

export const PrintSizeK58T = React.forwardRef((props,ref) =>{
    return (
      <div ref={ref} className="print-ezs print-k58T">
      <div className="header-print">
        <div className="print-logo text-center">
          <img src={toAbsoluteUrl("/media/print/logoCSER.png")} alt="" />
        </div>
        <div className="print-title text-center text-uppercase font-weight-800 print-sizes-sm">
          cser beauty
        </div>
        <div className="print-address text-center print-size-sm">
          22/42 Vũ Ngọc Phan - Láng Hạ - Đống Đa - HN
        </div>
        <div className="print-hottline text-center print-size-sm">
          Hotline : 0981.883.338
        </div>
        <h1 className="print-receipt text-center text-uppercase print-size-lg font-weight-800 mb-0 py-1">
          Hóa đơn bán hàng
        </h1>
      </div>
      <div className="body-print text-center">
        <div className="print-date ">
          <p>#12021548 - 01/01/2021</p>
        </div>
        <div className="print-infor ">
          <div className="name-user d-flex justify-content-between">
            <div className="name-user-item text-left font-weight-bold">
              khách hàng<span className="dotted-item">:</span>
            </div>
            <div className="font-weight-bold">Phạm Trung Hiếu</div>
          </div>
          <div className="name-hotline d-flex justify-content-between py-2">
            <div className="name-hotline-item text-left font-weight-bold">
              Số điện thoại<span className="dotted-item">:</span>
            </div>
            <div className="font-weight-bold">0978.544.973</div>
          </div>
          <div className="name-address d-flex justify-content-between pb-2">
            <div className="name-address-item text-left font-weight-bold">
              Địa chỉ<span className="dotted-item">:</span>
            </div>
            <div className="font-weight-bold text-right">
              Phường Văn Miếu - Quận Đống Đa
            </div>
          </div>
        </div>
        <div className="total-payment ">
          <div className="total-money">
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold">
              Lý do thu <span className="dotted-item">:</span>
              </p>
              <p className="total-money-item font-weight-bold ">Ghi chú từ khoản thu chi</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold">
              Tổng số tiền <span className="dotted-item">:</span>
              </p>
              <p className="total-money-item total-money-item font-weight-800">
              9.200.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold ">
              Bằng chữ <span className="dotted-item">:</span>
              </p>
              <p className="total-money-item font-weight-bold">Chín triệu hai trăm nghìn</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold ">
              Hình thức thanh toán<span className="dotted-item">:</span>
              </p>
              <p className="total-money-item font-weight-bold">Tiền mặt</p>
            </div>
          </div>
        </div>
        <div className="print-footer pb-5 ">
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
    )
})
