import React from "react";
import { toAbsoluteUrl } from "../../../../_ezs/_helpers/AssetsHelpers";
import "../../../../_ezs/_assets/sass/components/_print.scss";

const getPageConfig = () => {
  return `@page { size: auto; }`;
};

export const PrintSizeK58 = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="print-ezs print-k58 pr-104r">
      <style>{getPageConfig()}</style>
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
        <h1 className="print-receipt text-center text-uppercase print-size-lg font-weight-800 mb-0 pt-4">
          Hóa đơn bán hàng
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
        </div>
        <table className="table table-bordered table-bordered-dark ">
          <thead>
            <tr>
              <th className="font-weight-800">Tên mặt hàng</th>
              <th className="font-weight-800">SL</th>
              <th className="font-weight-800">Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left vertical-align-middle font-weight-800 print-size-sm">
                Kem dưỡng da chống lão hóa, khôi phục tế bào chết
              </td>
              <td className="font-weight-800 vertical-align-middle">01</td>
              <td className="font-weight-bold vertical-align-middle">
                <p className="into-money-discount vertical-align-middle mb-0">
                  1.500.000
                </p>
                <p className="into-money vertical-align-middle mb-0">1.200.000</p>
              </td>
            </tr>
            <tr className="font-weight-bold">
              <td className="text-left vertical-align-middle font-weight-800 print-size-sm">
                Liệu trình tắm trắng phi thuyền 10B
              </td>
              <td className="font-weight-800 vertical-align-middle">01</td>
              <td className="vertical-align-middle">
                <p className="into-money mb-0">3.000.000</p>
              </td>
            </tr>
            <tr className="font-weight-bold">
              <td className="text-left vertical-align-middle font-weight-800 print-size-sm">
                Triệt lông toàn thân, nách, bụng, lưng, tay, chân,
              </td>
              <td className="font-weight-800 vertical-align-middle">01</td>
              <td className="vertical-align-middle">
                <p className="into-money mb-0">5.000.000</p>
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
              <p className="total-money-item font-weight-800">9.200.000</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold">
                Giá trị chiết khấu <span className="dotted-item">:</span>
              </p>
              <p className="total-money-item total-money-item font-weight-800">
                1.200.000
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-800 text-left">
                Giá trị cần thanh toán <span className="dotted-item">:</span>
              </p>
              <p className="total-money-item font-weight-800">8.000.000</p>
            </div>
          </div>
          <div className="pay-money">
            <h4 className="text-left font-weight-800">Thanh toán</h4>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold">
                Chuyển khoản<span className="dotted-item ml-1">:</span>
              </p>
              <p className="total-money-item font-weight-bold">1.000.000</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold">
                Ví<span className="dotted-item ml-1">:</span>
              </p>
              <p className="total-money-item font-weight-bold">1.000.000</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="total-money-item font-weight-bold">
                Nợ đơn hàng<span className="dotted-item ml-1">:</span>
              </p>
              <p className="total-money-item font-weight-bold">1.000.000</p>
            </div>
          </div>
          <div className="history-total">
            <h4 className="font-weight-800 text-left">Lịch sử thanh toán</h4>
            <div className="d-flex justify-content-between text-left border-bottom font-weight-bold">
              <p className="date mb-0 py-2 mr-2">01/01/2021</p>
              <p className="payments mb-0 py-2 w-100px">Tiền mặt</p>
              <p className="total-payments mb-0 py-2 font-weight-bold">
                5.000.000
              </p>
            </div>
            <div className="d-flex justify-content-between text-left border-bottom font-weight-bold">
              <p className="date mb-0 py-2 mr-2">05/11/2021</p>
              <p className="payments mb-0 py-2 w-100px">Ví</p>
              <p className="total-payments mb-0 py-2 font-weight-bold">
                1.000.000
              </p>
            </div>
            <div className="d-flex justify-content-between text-left border-bottom font-weight-bold">
              <p className="date mb-0 py-2 mr-2">05/11/2021</p>
              <p className="payments mb-0 py-2 w-100px ">C.khoản</p>
              <p className="total-payments mb-0 py-2 font-weight-bold">
                1.000.000
              </p>
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
  );
});
