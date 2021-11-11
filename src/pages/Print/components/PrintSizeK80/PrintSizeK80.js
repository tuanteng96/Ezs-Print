import React from 'react'
import { toAbsoluteUrl } from '../../../../_ezs/_helpers/AssetsHelpers';
import "../../../../_ezs/_assets/sass/components/_print.scss";
import { Helmet } from "react-helmet";

export const PrintSizeK80 = React.forwardRef((props, ref) =>{
    return (
    <div ref={ref} className="print-ezs print-k80">
        <Helmet>
            <style type="text/css" media="print">{`
            @page {
                size: auto;
            }`}</style>
        </Helmet>
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
        <h1 className="print-receipt text-center text-uppercase print-size-lg font-weight-800 mb-0 py-3">
          Hóa đơn bán hàng
        </h1>
      </div>
      <div className="body-print text-center">
        <div className="print-date ">
          <p>#12021548 - 01/01/2021</p>
        </div>
        <div className="print-infor ">
          <div className="name-user d-flex justify-content-between">
            <div className="name-user-item text-left font-weight-bold w-110px">
              Khách hàng <span className="dotted-item">:</span>
            </div>
            <div className="font-weight-800">Phạm Trung Hiếu</div>
          </div>
          <div className="name-hotline d-flex justify-content-between py-2">
            <div className="name-hotline-item text-left font-weight-bold w-110px">
              Số điện thoại <span className="dotted-item">:</span>
            </div>
            <div className="font-weight-800">0978.544.973</div>
          </div>
          <div className="name-address d-flex justify-content-between pb-2">
            <div className="name-address-item text-left font-weight-bold w-110px">
              Địa chỉ <span className="dotted-item">:</span>
            </div>
            <div className="font-weight-800 text-right ">22/42 Vũ Ngọc Phan - Láng Hạ - Đống Đa - HN</div>
          </div>
        </div>
        <table className="table table-bordered table-bordered-dark ">
          <thead>
            <tr >
              <th className="font-weight-800">Tên mặt hàng</th>
              <th className="font-weight-800">SL</th>
              <th className="font-weight-800">Đơn giá</th>
              <th className="font-weight-800 m-ư">Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left font-weight-800 print-size-sm vertical-align-middle">
                Kem dưỡng da chống lão hóa, khôi phục tế bào chết
              </td>
              <td className="font-weight-800 vertical-align-middle">01</td>
              <td className="font-weight-bold vertical-align-middle">
                <p className="into-money-discount vertical-align-middle">1.500.000</p>
                <p className="into-money vertical-align-middle">1.200.000</p>
              </td>
              <td className="font-weight-bold vertical-align-middle">
                <p className="into-money ">1.200.000</p>
              </td>
            </tr>
            <tr className="font-weight-bold">
              <td className="text-left font-weight-800 print-size-sm vertical-align-middle">Liệu trình tắm trắng phi thuyền 10B</td>
              <td className="font-weight-800 vertical-align-middle">01</td>
              <td>
                <p className="into-money vertical-align-middle">3.000.000</p>
              </td>
              <td>
                <p className="into-money vertical-align-middle">3.000.000</p>
              </td>
            </tr>
            <tr className="font-weight-bold">
              <td className="text-left font-weight-800 print-size-sm">
                Triệt lông toàn thân, nách, bụng, lưng, tay, chân,
              </td>
              <td className="font-weight-800">01</td>
              <td>
                <p className="into-money">5.000.000</p>
              </td>
              <td>
                <p className="into-money">5.000.000</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="total-payment ">
          <div className="total-money">
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold">
                Tổng giá trị <span className="dotted-item">:</span>
              </p>
              <p className="total-money-item font-weight-800" >9.200.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold">
                Giá trị chiết khấu <span className="dotted-item">:</span>
              </p>
              <p className="total-money-item total-money-item font-weight-800">1.200.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-800">
                Giá trị cần thanh toán <span className="dotted-item">:</span>
              </p>
              <p className="total-money-item font-weight-800">8.000.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
          </div>
          <div className="pay-money">
            <h4 className="text-left font-weight-800">Thanh toán</h4>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold">
                Chuyển khoản<span className="dotted-item ml-1">:</span>
              </p>
              <p className="total-money-item font-weight-bold">1.000.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold">
                Ví<span className="dotted-item ml-1">:</span>
              </p>
              <p className="total-money-item font-weight-bold">1.000.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold">
                Nợ đơn hàng<span className="dotted-item ml-1">:</span>
              </p>
              <p className="total-money-item font-weight-bold">1.000.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
          </div>
          <div className="history-total">
            <h4 className="font-weight-800 text-left">
              Lịch sử thanh toán
            </h4>
            <div className="d-flex justify-content-between text-left border-bottom font-weight-bold">
              <p className="date mb-0 py-2 mr-2">01/01/2021</p>
              <p className="payments mb-0 py-2 w-100px">Tiền mặt</p>
              <p className="total-payments mb-0 py-2 font-weight-bold">5.000.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
            <div className="d-flex justify-content-between text-left border-bottom font-weight-bold">
              <p className="date mb-0 py-2 mr-2">05/11/2021</p>
              <p className="payments mb-0 py-2 w-100px">Ví</p>
              <p className="total-payments mb-0 py-2 font-weight-bold">1.000.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
            <div className="d-flex justify-content-between text-left border-bottom font-weight-bold">
              <p className="date mb-0 py-2 mr-2">05/11/2021</p>
              <p className="payments mb-0 py-2 w-110px ">Chuyển khoản</p>
              <p className="total-payments mb-0 py-2 font-weight-bold">1.000.000 <span className="font-weight-normal">VNĐ</span>
              </p>
            </div>
          </div>
        </div>
        <div className="print-footer pt-5 pb-10 ">
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
