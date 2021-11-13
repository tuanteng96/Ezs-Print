import React from 'react'
import { toAbsoluteUrl } from '../../../../_ezs/_helpers/AssetsHelpers';
import "../../../../_ezs/_assets/sass/components/_print.scss";

export const PrintSizeK58T = React.forwardRef((props,ref) =>{
    return (
      <div ref={ref} className="print-ezs print-k58 print-k58t pr-104r ">
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
        <h1 className="print-receipt text-center text-uppercase print-size-lg font-weight-800 mb-0 pt-5">
          phiếu thu tiền
        </h1>
      </div>
      <div className="body-print text-center">
        <div className="print-date ">
          <p>#12021548 - 01/01/2021</p>
        </div>
        <div className="print-infor pb-4">
          <div className="name-user d-flex justify-content-between">
            <div className="name-user-item text-left font-weight-bold w-80px">
              Khách hàng<span className="dotted-item float-right"> :</span>
            </div>
            <div className="font-weight-bold w-left--calc text-right">Phạm Trung Hiếu</div>
          </div>
          <div className="name-hotline d-flex justify-content-between py-2">
            <div className="name-hotline-item text-left font-weight-bold w-80px">
              Điện thoại<span className="dotted-item float-right"> :</span>
            </div>
            <div className="font-weight-bold w-left--calc text-right">0978.544.973</div>
          </div>
          <div className="name-address d-flex justify-content-between">
            <div className="name-address-item text-left font-weight-bold w-80px">
              Địa chỉ<span className="dotted-item float-right"> :</span>
            </div>
            <div className="font-weight-bold text-right w-left--calc text-right">
              Phường Văn Miếu, Quận Đống Đa
            </div>
          </div>
        </div>
        <div className="total-payment pb-4 pt-4">
          <div className="total-money">
            
            <div className="d-flex justify-content-between pb-2">
              <p className="total-money-item font-weight-bold mb-0 text-left w-80px">
              Số tiền <span className="dotted-item float-right">:</span>
              </p>
              <p className="total-money-item total-money-item font-weight-800 mb-0 w-left--calc text-right">
              9.200.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
            <div className="pb-2 ">
              <p className="font-weight-bold mb-0 text-right">Chín triệu hai trăm nghìn</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p className="total-money-item font-weight-bold mb-0 w-80px text-left">
              Hình thức<span className="dotted-item float-right"> :</span>
              </p>
              <p className="total-money-item font-weight-bold mb-0 w-left--calc text-right">Tiền mặt</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <p className="total-money-item font-weight-bold mb-0 w-80px text-left ">
              Nội dung <span className="dotted-item float-right">:</span>
              </p>
              <p className="total-money-item font-weight-bold mb-0 w-left--calc text-right">Thanh toán đơn hàng nợ ngày 15/09</p>
            </div>
          </div>
        </div>
        <div className="print-signature d-flex justify-content-between font-weight-800 w-100 pt-4">
            <div className="h-300px text-left">Người lập</div>
            <div className="h-300px text-center">Người nộp</div>
            <div className="h-300px text-right">Thủ quỹ </div>
        </div>
        <div className="print-footer pb-5 ">
          <div className="text-center text-see">
            Thời gian in : 05/11/2021 05:54 PM{" "}
          </div>
        </div>
      </div>
    </div>
    )
})
