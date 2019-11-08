import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import "./OrderConfirm.css";
import img_address from "../../imgorder/address.png";
import img_pay from "../../imgorder/pay.png";
import img_confirm from "../../imgorder/confirm.png";
class Order extends Component {
  state ={
    step :[]
  };
  render() {
    return (
      <div>
        <Row className="from_order">
         (<Col xs="6" sm="4"> 
         {this.state.step == 1) && (
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
    )})
        </Col>
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
    );
  }
export default Order;
