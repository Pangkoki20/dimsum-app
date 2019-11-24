import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Input,
  FormGroup,
  CardBody,
  Card,
  Label
} from "reactstrap";
import "./Order.css";
import axios from "axios";
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
  constructor(props) {
    super(props);
    this.state1 = {
      numhouse: "",
      nummoo: "",
      lane: "",
      tambon: "",
      amphoe: "",
      changwat: "",
      postcode: "",
      code:"",
      message: ""
    };
  }
  handleInputChange = e => {
    const { address, value } = e.target;
    this.setState({ [address]: value });
    this.setState({ message: "" });
    console.log({ [address]: value });
  };
  address = e => {
    e.preventDefault();
    try {
      const data = {
        numhouse: this.state.numhouse,
        nummoo: this.state.nummoo,
        lane: this.state.lane,
        tambon: this.state.tambon,
        amphoe: this.state.amphoe,
        changwat: this.state.changwat,
        postcode: this.state.postcode,
        code: this.state.code
      };
      console.log("ข้อมูลที่กำลังจะส่งไป ....  ", data);
      axios.post(`http://localhost:3001/api/users/order`, data).then(res => {
        const { data } = res;
        this.setState({ message: data.message });
        this.props.history.push(`/Order`);
      });
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  render() {
    const {
      numhouse,
      nummoo,
      lane,
      tambon,
      amphoe,
      changwat,
      postcode,
      code
    } = this.state;
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
                    type="changwat"
                    name="changwat"
                    value={changwat}
                    placeholder="จังหวัด"
                    onChange={this.handleInputChange}
                    required
                  ></Input>
                  <Input
                    className="from_addressdelivery"
                    type="postcode"
                    name="postcode"
                    value={postcode}
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
                  <Input
                    className="text_code"
                    type="code"
                    name="code"
                    value={code}
                    placeholder="โค้ดของคุณ"
                    onChange={this.handleInputChange}
                    required
                  />
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
                  <div>
                    <Card>
                      <CardBody>
                        <br></br>
                        <div>
                          <a>แก้ไขข้อมูลการสั่งซื้อ</a></div>
                      </CardBody>
                    </Card>
                  </div>

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
