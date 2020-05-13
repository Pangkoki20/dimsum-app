import React, { Component } from "react";
import { Row, Button, Input, Card, Form, CustomInput } from "reactstrap";
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
      menu_id: "",
      priceAll: "",
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
    try {
      const data = {
        priceAll: this.state.priceAll,
        numhouse: this.state.numhouse,
        nummoo: this.state.nummoo,
        road: this.state.road,
        tambon: this.state.tambon,
        amphoe: this.state.amphoe,
        changwat: this.state.changwat,
        menu_id: this.state.menu_id,
        payment: this.state.payment,
        code: this.state.code,
        selects: this.state.selects,
        user_id: uId,

        order: this.state.order.map(($obj) => {
          return {
            priceAll: $obj.menu_value * $obj.menu_price,
            menu_name: $obj.menu_name,
            menu_value: $obj.menu_value,
            menu_price: $obj.menu_price,
            menu_id: $obj.menu_id,
            userid: $obj.user_id,
          };
        }),
      };
      data.priceAll = data.order.reduce((a, b) => {
        return a.priceAll + b.priceAll + 30;
      });

      console.log("ข้อมูลที่กำลังจะส่งไป ....  ", data);
      axios.post(`http://localhost:3001/api/order/create`, data).then((res) => {
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
      road,
      tambon,
      amphoe,
      changwat,
      payment,
      selects,
    } = this.state;
    return (
      <div className="container">
        <div className="text_basketconfirm">ยืนยันการสั่งซื้อ</div>
        <div className="shadow p-3 mb-5 bg-white rounded">
          <div className="from_orderDelivery">
            <Row>
              <Form>
                {this.state.step === 1 ? (
                  <div className="from_addressdelivery ">
                    <Card className="cardAddress" body outline color="primary">
                      <div>
                        <img
                          className="img_address"
                          src={img_address}
                          href="/Address"
                          alt=""
                        />
                      </div>
                      <div className="text-addre">
                        <b>ที่อยู่สำหรับการจัดส่ง</b>
                      </div>
                    </Card>

                    <div className="addressdelivery"></div>
                    <CustomInput
                      className="addressCurrent font-weight-bold"
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
                    <Card className="cardAddress" body outline color="primary">
                      <div>
                        <img className="img_pay" src={img_pay} alt="" />
                      </div>
                      <div className="text-addre">
                        <b>วิธีการชำระเงิน</b>
                      </div>
                    </Card>
                    <div className="addressdelivery">
                      <b className="addressCurrent">เลือกวิธีการชำระเงิน</b>
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
                    <Card className="cardAddress" body outline color="primary">
                      <div>
                        <img className="img_confirm" src={img_confirm} alt="" />
                      </div>
                      <div className="text-addre">
                        <b>ยืนยันการสั่งอาหาร</b>
                      </div>
                    </Card>
                    <div className="addressdelivery">
                      <b className="fontVerify">ข้อมูลยืนยันการสั่งซื้อ</b>
                    </div>
                    <div className="selects ">
                      <b className="frontAddress textSelect">
                        ที่อยู่สำหรับการจัดส่ง :{" "}
                      </b>
                      {selects}
                    </div>
                    <div className="selects textAddress ">
                      บ้านเลขที่ : {numhouse}
                    </div>
                    <div className="selects textAddress ">
                      หมู่ที่ : {nummoo}
                    </div>
                    <div className="selects textAddress ">
                      ซอย/ถนน : {road}{" "}
                    </div>
                    <div className="selects textAddress ">ตำบล : {tambon}</div>
                    <div className="selects textAddress ">อำเภอ : {amphoe}</div>
                    <div className="selects textAddress ">
                      จังหวัด : {changwat}
                    </div>
                    <div className="selects">
                      <b className="frontAddress">วิธีการชำระเงิน : </b>
                      {payment}
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
                        onClick={(e) => this.sentOrder(e)}
                      >
                        ยืนยัน
                      </Button>
                    </div>
                  </div>
                ) : null}
              </Form>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default Order;
