import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Input,
  FormGroup,
  CardBody,
  Card,
  Label,Form
} from "reactstrap";
import "./Order.css";
import axios from "axios";
import img_address from "../../imgorder/address.png";
import img_pay from "../../imgorder/pay.png";
import img_confirm from "../../imgorder/confirm.png";
import auth from "../service/index";
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
      payment: "1",
      code: "",
      message: "",
      order:[]
    };
  }
componentDidMount =()=> {
      let order = JSON.parse(localStorage.getItem("order"));
      console.log("all order : ", order);
      this.setState({ order: order });
} 

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({ message: "" });
    console.log({ [name]: value });
  };
  sentOrder = e => {
    e.preventDefault();
    console.log("dimsum");
    let user = auth.getToken();
    let userDecode = auth.decodeToken(user);
    let uId = userDecode.id;
    
    //  if userDecode.role != "k"
    
    try {
      const data = {
        numhouse: this.state.numhouse,
        nummoo: this.state.nummoo,
        lane: this.state.lane,
        tambon: this.state.tambon,
        amphoe: this.state.amphoe,
        changwat: this.state.changwat,
        postcode: this.state.postcode,
        payment: this.state.payment,
        code: this.state.code,
        user_id: uId,

        order: this.state.order.map($obj => {
          return {
            menu_name: $obj.menu_name,
            menu_value: $obj.menu_value,
            menu_price: $obj.menu_price
          };
        })
      };
      console.log("ข้อมูลที่กำลังจะส่งไป ....  ", data);
      axios.post(`http://localhost:3001/api/order/create`, data).then(res => {
        const { data } = res;
        this.setState({ message: data.message });
        let oldItems = [];
        localStorage.setItem("order", JSON.stringify(oldItems));
        this.props.history.push(`/Delivery`);
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
      code,
      payment
    } = this.state;
    return (
      <div className="container">
        <div className="card shadow-lg p-3 mb-5  bg-white rounded">
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
              <Form onSubmit={this.sentOrder}>
              {this.state.step === 1 ? (
                <div className="from_addressdelivery">
                  <div className="addressdelivery">
                    กรอกที่อยู่สำหรับการจัดส่ง
                  </div>
                  <Input
                    className="from_addressdelivery"
                    type="text"
                    name="numhouse"
                    id="numhouse"
                    value={this.state.numhouse}
                    placeholder="บ้านเลขที่"
                    onChange={this.handleInputChange}
                    required
                  />
                  <Input
                    className="from_addressdelivery"
                    type="text"
                    name="nummoo"
                    id="nummoo"
                    value={this.state.nummoo}
                    placeholder="หมู่ที่"
                    onChange={this.handleInputChange}
                    required
                  ></Input>
                  <Input
                    className="from_addressdelivery"
                    type="text"
                    name="lane"
                    id="lane"
                    value={this.state.lane}
                    placeholder="ซอย/ตรอก"
                    onChange={this.handleInputChange}
                    required
                  ></Input>
                  <Input
                    className="from_addressdelivery"
                    type="text"
                    name="tambon"
                    id="tambo"
                    value={this.state.tambon}
                    placeholder="ตำบล"
                    onChange={this.handleInputChange}
                    required
                  ></Input>
                  <Input
                    className="from_addressdelivery"
                    type="text"
                    name="amphoe"
                    id="amphoe"
                    value={this.state.amphoe}
                    placeholder="อำเภอ"
                    onChange={this.handleInputChange}
                    required
                  ></Input>
                  <Input
                    className="from_addressdelivery"
                    type="text"
                    name="changwat"
                    id="code"
                    value={this.state.changwat}
                    placeholder="จังหวัด"
                    onChange={this.handleInputChange}
                    required
                  ></Input>
                  <Input
                    className="from_addressdelivery"
                    type="postcode"
                    name="postcode"
                    id="code"
                    value={this.state.postcode}
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
                      <Input
                        type="radio"
                        name="payment"
                        value="1"
                        checked={this.state.payment === "1"}
                        onChange={this.handleInputChange}
                      />
                      <div className="text_paymentconfirm">ชำระเงินปลายทาง</div>
                    </Label>
                  </FormGroup>
                  <FormGroup check className="from_check">
                    <Label check>
                      <Input
                        type="radio"
                        name="payment"
                        value="2"
                        checked={this.state.payment === "2"}
                        onChange={this.handleInputChange}
                      />
                      <div className="text_paymentconfirm">อื่น ๆ</div>
                    </Label>
                  </FormGroup>
                  <div className="code">โค้ดส่วนลดของคุณ</div>
                  <Input
                    className="text_code"
                    type="text"
                    name="code"
                    value={this.state.code}
                    placeholder="โค้ดของคุณ"
                    onChange={this.handleInputChange}
                    
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
                       { numhouse}, {nummoo}, {lane}, {tambon}, {amphoe}, {changwat},
                        {postcode}, {code}, {payment}
                      </CardBody>
                    </Card>
                  </div>
                  <div className="from_editorder">
                    <a className="edit_order" href="/Order">
                      แก้ไขข้อมูลการสั่งซื้อ
                    </a>
                  </div>
                  <div className="from_payments">
                    <Button
                      
                      className="bt_ok"
                      color="success"
                      // onClick={e => this.order(e)}
                    >
                      ยืนยัน
                    </Button>
                  </div>
                </div>
              ) : null}
              </Form>
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
