import React from 'react'
import { toAbsoluteUrl } from '../../../../_ezs/_helpers/AssetsHelpers';
import "../../../../_ezs/_assets/sass/components/_print.scss";

export const PrintSizeK58 = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="print-ezs print-k58">
            <div className="header-print">
                <div className="print-logo text-center">
                    <img src={toAbsoluteUrl("/media/print/logoCSER.png")} alt=""/>
                </div>
                <div className="print-title text-center text-uppercase font-weight-boldest">cser beauty</div>
                <div className="print-address text-center py-2">22/42 Vũ Ngọc Phan - Láng Hạ - Đống Đa - HN</div>
                <div className="print-hottline text-center">Hotline : 0981.883.338</div>
                <h1 className="print-receipt text-center font-weight-boldest text-uppercase pt-5">Hóa đơn bán hàng</h1>
            </div>
            <div className="body-print text-center">
                <div className="print-date"><p>#12021548 - 01/01/2021</p></div>
                <div className="print-infor">
                    <div className="name-user">
                        <div className="name-user-item">khách hàng<span className="dotted-item">:</span></div>
                        <div className="name-user-item">Phạm Trung Hiếu</div>
                    </div>
                    <div className="name-hotline">
                        <div className="name-hotline-item">Số điện thoại<span className="dotted-item">:</span></div>
                        <div className="name-hotline-item">0978.544.973</div>
                    </div>
                    <div className="name-address">
                        <div className="name-address">Địa chỉ<span className="dotted-item">:</span></div>
                        <div className="name-address">Phường Văn Miếu - Quận Đống Đa</div>
                    </div>

                </div>
                <table className="table table-bordered table-bordered-dark">
                    <thead>
                        <tr>
                            <th>Tên mặt hàng</th>
                            <th>Số lượng</th>
                            <th>Số lượng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Kem dưỡng da chống lão hóa, khôi phục tế bào chết</td>
                            <td>01</td>
                            <td><p className="into-money">1.500.000</p>
                                <p className="into-money-discount">1.200.000</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Liệu trình tắm trắng phi thuyền 10B</td>
                            <td>01</td>
                            <td><p className="into-money">3.000.000</p></td>
                        </tr>
                        <tr>
                            <td>Triệt lông toàn thân, nách, bụng, lưng, tay, chân, ...</td>
                            <td>01</td>
                            <td><p className="into-money">5.000.000</p></td>
                        </tr>
                    </tbody>
                </table>
                <div className="total-payment">
                    <div className="total-money">
                        <div className="d-flex justify-content-between justify-content-between">
                            <p className="total-money-item">Tổng giá trị <span className="dotted-item">:</span></p>
                            <p className="total-money-item"><span className="money font-weight-boldest">9.200.000</span> VNĐ</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="total-money-item">Giá trị triết khấu <span className="dotted-item">:</span></p>
                            <p className="total-money-item"><span className="money font-weight-boldest">1.200.000</span> VNĐ</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="total-money-item">Giá trị cần thanh toán <span className="dotted-item">:</span></p>
                            <p className="total-money-item"><span className="money font-weight-boldest">8.000.000</span> VNĐ</p>
                        </div>
                    </div>
                    <div className="pay-money">
                        <h4 className="font-weight-boldest text-left">Thanh toán</h4>
                        <div className="d-flex justify-content-between">
                            <p className="total-money-item">Chuyển khoản<span className="dotted-item">:</span></p>
                            <p className="total-money-item"><span className="money font-weight-boldest">1.000.000</span> VNĐ</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="total-money-item">Ví<span className="dotted-item">:</span></p>
                            <p className="total-money-item"><span className="money font-weight-boldest">1.000.000</span> VNĐ</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="total-money-item">Nợ đơn hàng<span className="dotted-item">:</span></p>
                            <p className="total-money-item"><span className="money font-weight-boldest">1.000.000</span> VNĐ</p>
                        </div>
                    </div>
                    <div className="history-total">
                        <h4 className="font-weight-boldest text-left">Lịch sử thanh toán</h4>
                        <div className="d-flex justify-content-between">
                            <p className="date">01/01/2021</p>
                            <p className="payments">Tiền mặt</p>
                            <p className="total-payments"><span className="money font-weight-boldest">5.000.000</span>VNĐ</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="date">05/11/2021</p>
                            <p className="payments">Ví</p>
                            <p className="total-payments "><span className="money font-weight-boldest">1.000.000</span>VNĐ</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="date">05/11/2021</p>
                            <p className="payments">Chuyển khoản</p>
                            <p className="total-payments"><span className="money font-weight-boldest">1.000.000</span>VNĐ</p>
                        </div>
                    </div>
                    
                </div>
                <div className="print-footer pb-5">
                    <img src={toAbsoluteUrl("/media/print/barcode.png")} alt="" className="py-6"/>
                    <div className="text-center print-size-md pb-1">Cảm ơn quý khách và hẹn gặp lại !</div>
                    <div className="text-center print-size-xs">Thời gian in : 05/11/2021 05:54 PM </div>

                </div>    
            </div>

        </div>
    )
})
