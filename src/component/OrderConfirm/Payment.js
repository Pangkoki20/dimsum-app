import React, { Component } from "react";
import { Container, CardHeader, Card, CardBody, Button } from "reactstrap";
import "./Payment.css";
import Order from "./Oder";
class Payment extends Component {
  render() {
    return (
      <div class="container-fluid ">
        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="text_basketconfirm">ยืนยันการสั่งซื้อ</div>
          <div>
            <Order />
          </div>
          
            <Card className="from_payment">
              <CardHeader className="text_payment">วิธีการชำระเงิน</CardHeader>
              <CardBody className="bt_payment">
                <Button color="danger" className="text_btpayment">
                  ชำระเงินปลายทาง
                </Button>
              </CardBody>
            </Card>
          
        </div>
      </div>
    );
  }
}
export default Payment;
