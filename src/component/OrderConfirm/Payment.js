import React, { Component } from "react";
import { CardTitle, Card, CardText, Button } from "reactstrap";
import "./Payment.css";
import Order from "./Oder";
import RtOrder from "./BtOder";
class Payment extends Component {
  render() {
    return (
      <div class="container-fluid ">
        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="text_basketconfirm">ยืนยันการสั่งซื้อ</div>
          <div>
            <Order />
          </div>
          <div className="from_payment">
            <Card body outline color="secondary">
              <CardTitle className="text_payment">วิธีการชำระเงิน</CardTitle>
              <CardText></CardText>
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
