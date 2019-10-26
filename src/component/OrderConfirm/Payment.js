import React, { Component } from "react";
import { CardHeader, Card, CardBody, Input } from "reactstrap";
import "./Payment.css";
import Order from "./Oder";
import RtOrder from "./BtOder";
import img_payment from "../../imgorder/pay.png";
class Payment extends Component {
  render() {
    return (
      <div class="container">
        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="text_basketconfirm">ยืนยันการสั่งซื้อ</div>
          <div>
            <Order />
          </div>
          <div class="container">
            <Card className="from_payment">
              <CardHeader className="text_payment">วิธีการชำระเงิน</CardHeader>
              <CardBody>
                <Input
                  addon
                  type="checkbox"
                  className="ip_pay"
                  aria-label="Checkbox for following text input"
                />
                <img className="img_payment text_pay" src={img_payment} />
                ชำระเงินปลายทาง
              </CardBody>
            </Card>
          </div>
          <div>
            <RtOrder />
          </div>
        </div>
      </div>
    );
  }
}
export default Payment;
