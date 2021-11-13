import React from 'react'
import { toAbsoluteUrl } from '../../../../_ezs/_helpers/AssetsHelpers';
import "../../../../_ezs/_assets/sass/components/_print.scss";

export const PrintSizeK80DV = React.forwardRef((props, ref) =>{
    return (
    <div ref={ref} className="print-ezs print-k80 print-k80dv pr-104r">
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
        <div className="print-hottline text-center print-size-sm ">Hotline : 0981.883.338</div>
        <h1 className="print-receipt text-center text-uppercase print-size-lg font-weight-800 mb-0 pt-4">
        PHIẾU LÀM DỊCH VỤ
        </h1>
      </div>
      <div className="body-print text-center">
        <div className="print-date pb-2">
          <p>#12021548 - 01/01/2021</p>
        </div>
        <div className="print-infor ">
          <div className="name-user d-flex justify-content-between">
            <div className="name-user-item text-left font-weight-bold">
              Khách hàng<span className="dotted-item">:</span>
            </div>
            <div className="font-weight-800">Phạm Trung Hiếu</div>
          </div>
          <div className="name-hotline d-flex justify-content-between py-2">
            <div className="name-hotline-item text-left font-weight-bold">
              Số điện thoại<span className="dotted-item">:</span>
            </div>
            <div className="font-weight-800">0978.544.973</div>
          </div>
          <div className="name-address d-flex justify-content-between pb-2">
            <div className="name-address-item text-left font-weight-bold">
              Địa chỉ<span className="dotted-item">:</span>
            </div>
            <div className="font-weight-800 text-right">
              Phường Văn Miếu - Quận Đống Đa
            </div>
          </div>
          <div className="pb-2">
            <div className="name-address d-flex justify-content-between">
                <div className="name-address-item text-left font-weight-bold">
                Kỹ thuật viên<span className="dotted-item"> :</span>
                </div>
                <div className="font-weight-800 text-right w-left--calc">
                Nhân viên A
                </div>
            </div>
            <div className="name-address pb-2">
              <div className="font-weight-800 text-right">
              Nhân viên B
              </div>
            </div>
          </div>
        </div>
        <table className="table table-bordered table-bordered-dark ">
          <thead>
          <tr>
            <th className="font-weight-800 min-w-180px">Tên mặt hàng</th>
            <th className="font-weight-800">Buổi thứ</th>
            <th className="font-weight-800">Tổng buổi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left vertical-align-middle font-weight-800 print-size-sm">
              Kem dưỡng da chống lão hóa, khôi phục tế bào chết
            </td>
            <td className="font-weight-800 vertical-align-middle">01</td>
            <td className="font-weight-bold vertical-align-middle">
              <p className="vertical-align-middle mb-0" >
                10
              </p>
            </td>
          </tr>
          <tr className="font-weight-bold">
            <td className="text-left vertical-align-middle font-weight-800 print-size-sm">
              Liệu trình tắm trắng phi thuyền 10B
            </td>
            <td className="font-weight-800 vertical-align-middle">01</td>
            <td className="vertical-align-middle">
              <p className="mb-0">10</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="text-left">
          <p className=""><span className="font-weight-800">Ghi chú :</span> Khách dị ứng với tinh dầu nghệ, khách đã mang theo thuốc triệt lông</p>
      </div>
      <div className="print-signature d-flex justify-content-between font-weight-800 w-100 pt-4">
        <div className="h-300px ">Khách hàng</div>
        <div className="h-300px ">Kỹ thuật viên</div>
      </div>
        <div className="print-footer pb-5 ">
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