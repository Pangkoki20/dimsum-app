import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import "./OrderConfirm.css";
import img_address from "../../imgorder/address.png";
import img_pay from "../../imgorder/pay.png";
import img_confirm from "../../imgorder/confirm.png";
class Order extends Component {
  state = {
    step: 1
  };
  onUserChanged = address => {
    this.setState({ address });
  };
  render() {
    const { address } = this.state;
    return (
      <div class="container">
        <div class="card shadow-lg p-3 mb-5  bg-white rounded">
          <div className="text_basketconfirm">ยืนยันการสั่งซื้อ</div>
          <Row className="from_order">
            {this.state.step == 1 && (
              <Col xs="6" sm="4">
                <div>
                  <Button outline color="info" size="lg" block>
                    <div>
                      <img
                        className="img_address"
                        src={img_address}
                        href="/Address"
                      />
                    </div>
                    <div className="text-addre">ที่อยู่สำหรับการจัดส่ง</div>
                  </Button>
                </div>
              </Col>
            )}
            <Col xs="6" sm="4">
              <div>
                <Button outline color="info" size="lg" block>
                  <div>
                    <img className="img_pay" src={img_pay} />
                  </div>
                  <div className="text-addre">วิธีการชำระเงิน</div>
                </Button>
              </div>
            </Col>
            <Col xs="6" sm="4">
              <div>
                <Button outline color="info" size="lg" block>
                  <div>
                    <img className="img_confirm" src={img_confirm} />
                  </div>
                  <div className="text-addre">ยืนยันการสั่งอาหาร</div>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Order;
