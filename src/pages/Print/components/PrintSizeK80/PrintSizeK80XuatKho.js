import React from 'react'
import { toAbsoluteUrl } from '../../../../_ezs/_helpers/AssetsHelpers';
import "../../../../_ezs/_assets/sass/components/_print.scss";

export const PrintSizeK80XuatKho = React.forwardRef((props, ref) =>{
    return (
    <div ref={ref} className="print-ezs print-k80 print-k80X pr-104r">
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
          PHIẾU XUẤT KHO
        </h1>
      </div>
      <div className="body-print text-center">
        <div className="print-date pb-2">
          <p>#12021548 - 01/01/2021</p>
        </div>
        <div className="print-infor ">
          <div className=" d-flex justify-content-between pb-2">
            <div className="  text-left font-weight-bold">
              Người nhận<span className="dotted-item"> :</span>
            </div>
            <div className="font-weight-bold">Nhân viên A</div>
          </div>
          <div className="name-user d-flex justify-content-between pb-2">
            <div className="name-user-item text-left font-weight-bold">
              Họ tên<span className="dotted-item"> :</span>
            </div>
            <div className="font-weight-bold">Nhân viên A</div>
          </div>
          <div className="d-flex justify-content-between pb-2">
            <div className="text-left font-weight-bold">
            Lý do xuất<span className="dotted-item"> :</span>
            </div>
            <div className="font-weight-bold">Nhập để bán hàng cho khách </div>
          </div>
          <div className=" d-flex justify-content-between pb-4">
            <div className=" text-left font-weight-bold">
            Xuất tại kho<span className="dotted-item"> :</span>
            </div>
            <div className="font-weight-bold text-right w-left--calc">
            CSER HÀ NỘI
            </div>
          </div>
        </div>
        <table className="table table-bordered table-bordered-dark ">
          <thead>
          <tr>
            <th className="vertical-align-middle font-weight-800 min-w-180px">Tên mặt hàng</th>
            <th className="vertical-align-middle font-weight-800 w-90px">SL/ĐV</th>
            <th className="vertical-align-middle font-weight-800 w-90px">Thành tiền</th>
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
                  <td className="font-weight-bold vertical-align-middle">
                    <p className="mb-0">30</p>
                    <p className="mb-0">Hộp</p>
                  </td>
                  <td className="font-weight-bold vertical-align-middle">1.00.0000</td>
                </tr>
            ))}
            <tr >
              <td className="text-left  font-weight-800 print-size-md vertical-align-middle">
                  Kem dưỡng da chống lão hóa, khôi phục tế bào chết
              </td>
              <td className="font-weight-bold vertical-align-middle">Chai</td>
              <td className="font-weight-bold vertical-align-middle">1.00.0000</td>
            </tr>
            <tr >
              <td className="text-left  font-weight-800 print-size-md vertical-align-middle">
                  Kem dưỡng da chống lão hóa, khôi phục tế bào chết
              </td>
              <td className="font-weight-bold vertical-align-middle">Lọ</td>
              <td className="font-weight-bold vertical-align-middle">1.00.0000</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
              <td colSpan="2" className="font-weight-800 vertical-align-middle">Tổng</td>
              <td className="font-weight-bold vertical-align-middle ">30.000.000</td>
            </tr>
          </tfoot>
      </table>
      <div className="print-signature d-flex justify-content-between font-weight-800 w-100 pt-4 px-6">
        <div className="h-300px ">Người lập phiếu</div>
        <div className="h-300px ">Thủ kho </div>
      </div>
        <div className="print-footerpb-5 ">
          <div className="text-center text-see">
            Thời gian in : 05/11/2021 05:54 PM{" "}
          </div>
        </div>
      </div>
    </div>
    
    )
})