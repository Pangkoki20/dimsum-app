import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Input,
  CardBody,
  Card,
  Form,
  CustomInput,
} from "reactstrap";
import "./Order.css";
import axios from "axios";
import auth from "../service/index";
import img_address from "../../imgorder/address.png";
import img_pay from "../../imgorder/pay.png";
import img_confirm from "../../imgorder/confirm.png";

class Order extends Component {
  state = {
    step: 1,
  };
  onUserChanged = (address) => {
    this.setState({ address });
  };
  constructor(props) {
    super(props);
    this.state1 = {
      numhouse: "",
      nummoo: "",
      road: "",
      tambon: "",
      amphoe: "",
      changwat: "",
      postcode: "",
      payment: "1",
      message: "",
      order: [],
      selects: "",
    };
  }
  componentDidMount = () => {
    let order = JSON.parse(localStorage.getItem("order"));
    console.log("all order : ", order);
    this.setState({ order: order });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({ message: "" });
    console.log({ [name]: value });
  };
  sentOrder = (e) => {
    e.preventDefault();
    console.log("dimsum");
    let user = auth.getToken();
    let userDecode = auth.decodeToken(user);
    let uId = userDecode.id;

    //  if userDecode.road != "Kitchen"

    try {
      const data = {
        numhouse: this.state.numhouse,
        nummoo: this.state.nummoo,
        road: this.state.road,
        tambon: this.state.tambon,
        amphoe: this.state.amphoe,
        changwat: this.state.changwat,
        postcode: this.state.postcode,
        payment: this.state.payment,
        code: this.state.code,
        selects: this.state.selects,
        user_id: uId,

        order: this.state.order.map(($obj) => {
          return {
            menu_name: $obj.menu_name,
            menu_value: $obj.menu_value,
            menu_price: $obj.menu_price,
            userid: $obj.user_id,
          };
        }),
      };
      console.log("ข้อมูลที่กำลังจะส่งไป ....  ", data);
      axios.post(`http://localhost:3001/api/order/create`, data).then((res) => {
        const { data } = res;
        //orderNo.
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
      road,
      tambon,
      amphoe,
      changwat,
      payment,
      selects,
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
                      alt=""
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
                    <img className="img_pay" src={img_pay} alt="" />
                  </div>
                  <div className="text-addre">วิธีการชำระเงิน</div>
                </Button>
              </div>
              <Form onSubmit={this.sentOrder}>
                {this.state.step === 1 ? (
                  <div className="from_addressdelivery">
                    <div className="addressdelivery"></div>
                    {/* <CustomInput
                      className="addressCurrent"
                      type="radio"
                      id="exampleCustomRadio"
                      name="customRadio"
                      value="ที่อยู่ที่บันทึกไว้"
                      label="ที่อยู่ที่บันทึกไว้"
                      onChange={(e) => {
                        this.setState({ selects: e.target.value });
                      }}
                    /> */}
                    <CustomInput
                      className="addressCurrent"
                      type="radio"
                      id="exampleCustomRadio2"
                      name="customRadio"
                      value="เพิ่มที่อยู่ปัจจุบัน"
                      label="เพิ่มที่อยู่ปัจจุบัน"
                      onChange={(e) => {
                        this.setState({ selects: e.target.value });
                      }}
                    />
                    {this.state.selects === "เพิ่มที่อยู่ปัจจุบัน" ? (
                      <div>
                        <Input
                          className="inputAddress"
                          type="numhouse"
                          name="numhouse"
                          value={numhouse}
                          placeholder="บ้านเลขที่"
                          onChange={this.handleInputChange}
                          required
                        />
                        <Input
                          className="inputAddress"
                          type="nummoo"
                          name="nummoo"
                          value={nummoo}
                          placeholder="หมู่ที่"
                          onChange={this.handleInputChange}
                          required
                        ></Input>
                        <Input
                          className="inputAddress"
                          type="road"
                          name="road"
                          value={road}
                          placeholder="ซอย/ตรอก"
                          onChange={this.handleInputChange}
                          required
                        ></Input>
                        <Input
                          className="inputAddress"
                          type="tambon"
                          name="tambon"
                          value={tambon}
                          placeholder="ตำบล"
                          onChange={this.handleInputChange}
                          required
                        ></Input>
                        <Input
                          className="inputAddress"
                          type="amphoe"
                          name="amphoe"
                          value={amphoe}
                          placeholder="อำเภอ"
                          onChange={this.handleInputChange}
                          required
                        ></Input>
                        <Input
                          className="inputAddress"
                          type="changwat"
                          name="changwat"
                          value={changwat}
                          placeholder="จังหวัด"
                          onChange={this.handleInputChange}
                          required
                        ></Input>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <div className="btNext">
                      <Button
                        size="sm"
                        className="bt_nextone"
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
                    <div className="addressdelivery">
                      <b>เลือกวิธีการชำระเงิน</b>
                    </div>
                    <CustomInput
                      check
                      className="addressCurrent"
                      type="radio"
                      id="exampleCustomRadio3"
                      name="payment"
                      label="ชำระเงินปลายทาง"
                      value="ชำระเงินปลายทาง"
                      checked={this.state.payment === "ชำระเงินปลายทาง"}
                      onChange={this.handleInputChange}
                    />

                    <div className="from_payments">
                      <div className="bt_nextotwo">
                        <Button
                          size="sm"
                          className="bt_back"
                          color="secondary"
                          onClick={() => {
                            this.setState({ step: this.state.step - 1 });
                          }}
                        >
                          ย้อนกลับ
                        </Button>

                        <Button
                          size="sm"
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
                  </div>
                ) : null}
                {this.state.step === 3 ? (
                  <div className="from_addressdelivery">
                    <div className="addressdelivery">
                      <b>ข้อมูลยืนยันการสั่งซื้อ</b>
                    </div>
                    <Card>
                      <CardBody className="selects">
                        <div>
                          <b className="frontAddress">
                            ที่อยู่สำหรับการจัดส่ง :{" "}
                          </b>
                          {selects}
                        </div>

                        <div className="textAddress">
                          บ้านเลขที่ : {numhouse}{" "}
                        </div>
                        <div className="textAddress">หมู่ที่ : {nummoo}</div>
                        <div className="textAddress">ซอย/ถนน : {road} </div>
                        <div className="textAddress">ตำบล : {tambon}</div>
                        <div className="textAddress">อำเภอ : {amphoe}</div>
                        <div className="textAddress">จังหวัด : {changwat}</div>

                        <div>
                          <b className="frontAddress">วิธีการชำระเงิน : </b>
                          {payment}
                        </div>
                      </CardBody>
                    </Card>

                    <div className="from_editorder">
                      <a className="edit_order" href="/Order">
                        แก้ไขข้อมูลการสั่งซื้อ
                      </a>
                    </div>
                    <div className="from_payments">
                      <Button
                        className="bt_ok"
                        color="success"
                        onClick={(e) => this.sentOrder(e)}
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
                    <img className="img_confirm" src={img_confirm} alt="" />
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
