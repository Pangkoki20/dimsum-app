import React, { Component } from "react";
import { Row, Col, Button, Input, FormGroup, Label } from "reactstrap";
import "./Order.css";
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
    const { numhouse, nummoo, lane, tambon, amphoe, changwat } = this.state;
    return (
      <div class="container">
        <div class="card shadow-lg p-3 mb-5  bg-white rounded">
          <div className="text_basketconfirm">ยืนยันการสั่งซื้อ</div>
          <Row className="from_order">
            <Col xs="4" sm="4">
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
            <Col xs="4" sm="4">
              <div>
                <Button outline color="info" size="lg" block>
                  <div>
                    <img className="img_pay" src={img_pay} />
                  </div>
                  <div className="text-addre">วิธีการชำระเงิน</div>
                </Button>
              </div>
              {this.state.step === 1 ? (
                <div className="from_addressdelivery">
                  <div className="addressdelivery">
                    กรอกที่อยู่สำหรับการจัดส่ง
                  </div>
                  <Input
                    className="from_addressdelivery"
                    type="numhouse"
                    name="numhouse"
                    value={numhouse}
                    placeholder="บ้านเลขที่"
                    onChange={this.handleInputChange}
                    required
                  />
                  <Input
                    className="from_addressdelivery"
                    type="nummoo"
                    name="nummoo"
                    value={nummoo}
                    placeholder="หมู่ที่"
                    onChange={this.handleInputChange}
                    required
                  ></Input>
                  <Input
                    className="from_addressdelivery"
                    type="lane"
                    name="lane"
                    value={lane}
                    placeholder="ซอย/ตรอก"
                    onChange={this.handleInputChange}
                    required
                  ></Input>
                  <Input
                    className="from_addressdelivery"
                    type="tambon"
                    name="tambon"
                    value={tambon}
                    placeholder="ตำบล"
                    onChange={this.handleInputChange}
                    required
                  ></Input>
                  <Input
                    className="from_addressdelivery"
                    type="amphoe"
                    name="amphoe"
                    value={amphoe}
                    placeholder="อำเภอ"
                    onChange={this.handleInputChange}
                    required
                  ></Input>
                  <Input
                    className="from_addressdelivery"
                    type="amphoe"
                    name="amphoe"
                    value={amphoe}
                    placeholder="จังหวัด"
                    onChange={this.handleInputChange}
                    required
                  ></Input>
                  <Input
                    className="from_addressdelivery"
                    type="changwat"
                    name="changwat"
                    value={changwat}
                    placeholder="รหัสไปรษณีย์"
                    onChange={this.handleInputChange}
                    required
                  ></Input>
                  <div className="bt_nextone">
                    <Button
                      color="danger"
                      onClick={() => {
                        this.setState({ step: this.state.step + 1 });
                      }}
                    >
                      ถัดไป
                    </Button>
                  </div>
                </div>
              ) : null}
              {this.state.step === 2 ? (
                <div className="from_addressdelivery">
                  <div className="addressdelivery">เลือกวิธีการชำระเงิน</div>
                  <FormGroup check className="from_check">
                    <Label check>
                      <Input type="radio" name="radio1" />
                      <div className="text_paymentconfirm">ชำระเงินปลายทาง</div>
                    </Label>
                  </FormGroup>
                  <FormGroup check className="from_check">
                    <Label check>
                      <Input type="radio" name="radio1" />
                      <div className="text_paymentconfirm">อื่น ๆ</div>
                    </Label>
                  </FormGroup>
                  <div className="code">โค้ดส่วนลดของคุณ</div>
                  <Input className="text_code" placeholder="โค้ดของคุณ" />
                  <div className="from_payments">
                    <Button
                      className="bt_back"
                      color="secondary"
                      onClick={() => {
                        this.setState({ step: this.state.step - 1 });
                      }}
                    >
                      ย้อนกลับ
                    </Button>

                    <Button
                      className="bt_next"
                      color="danger"
                      onClick={() => {
                        this.setState({ step: this.state.step + 1 });
                      }}
                    >
                      ถัดไป
                    </Button>
                  </div>
                </div>
              ) : null}
              {this.state.step === 3 ? (
                <div className="from_addressdelivery">
                  <div className="addressdelivery"> ยืนยันการสั่งซื้อ</div>
                  <div></div>

                  <div className="from_payments">
                    <Button className="bt_ok" color="success" href="/Delivery">
                      ยืนยัน
                    </Button>
                  </div>
                </div>
              ) : null}
            </Col>
            <Col xs="4" sm="4">
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
