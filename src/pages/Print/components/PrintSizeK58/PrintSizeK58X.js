import React from 'react'
import { toAbsoluteUrl } from '../../../../_ezs/_helpers/AssetsHelpers';
import "../../../../_ezs/_assets/sass/components/_print.scss";

export const PrintSizeK58X = React.forwardRef((props,ref) =>{
    return (
      <div ref={ref} className="print-ezs print-k58 pr-104r ">
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
          PHIẾU YÊU CẦU XUẤT KHO
        </h1>
      </div>
      <div className="body-print text-center">
        <div className="print-date ">
          <p>#12021548 - 01/01/2021</p>
        </div>
        <div className="print-infor ">
          <div className="name-sento d-flex justify-content-between">
            <div className="name-user-item text-left font-weight-800">
               Kính gửi<span className="dotted-item">:</span>
            </div>
            <div className="font-weight-bold">Bộ phận kế toán</div>
          </div>
          <div className="name-user d-flex justify-content-between py-2">
            <div className="name-hotline-item text-left font-weight-bold">
            Họ tên<span className="dotted-item">:</span>
            </div>
            <div className="font-weight-bold">Nhân viên A</div>
          </div>
          <div className="name-address d-flex justify-content-between pb-2">
            <div className="name-address-item text-left font-weight-bold">
            Cơ sở<span className="dotted-item">:</span>
            </div>
            <div className="font-weight-bold text-right">
            CSER HÀ NỘI
            </div>
          </div>
          <div className="name-address d-flex justify-content-between pb-2">
            <div className="name-address-item text-left font-weight-bold">
            Lý do cần nhập<span className="dotted-item">:</span>
            </div>
            <div className="font-weight-bold text-right">
            Nhập để bán hàng cho khách
            </div>
          </div>
        </div>
        <table className="table table-bordered table-bordered-dark ">
            <thead>
              <tr>
                <th className="font-weight-800">Tên mặt hàng</th>
                <th className="font-weight-800">Đơn vị</th>
                <th className="font-weight-800">Số lượng Y/C</th>
              </tr>
            </thead>
            <tbody>
              {Array(4)
                .fill()
                .map((item, index) => (
                  <tr key={index}>
                    <td className="text-left  font-weight-800 print-size-md vertical-align-middle">
                    Kem dưỡng da chống lão hóa, khôi phục tế bào chết
                    </td>
                    <td className="font-weight-800 vertical-align-middle">
                      Hộp
                    </td>
                    <td className="font-weight-800 vertical-align-middle">
                      10
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="print-signature d-flex justify-content-between font-weight-800">
            <div className="h-70px">người lập phiếu</div>
            <div className="h-70px">Thủ kho</div>
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
