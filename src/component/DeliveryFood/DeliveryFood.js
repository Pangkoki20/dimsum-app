import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Row,
  Col,
  CardBody,
  Button,
  CardFooter,
} from "reactstrap";
import "./DeliveryFood.css";
import axios from "axios";

class DeliveryFood extends Component {
  state = {
    order: [],
    users: [],
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
    };
  }
  componentDidMount = () => {
    let order = JSON.parse(localStorage.getItem("order"));
    console.log("all order : ", order);
    this.setState({ order: order });
  };

  onUserChanged = (user) => {
    this.setState({ user });
  };
  componentDidMount = async (nextProps) => {
    let order = await axios.get(`http://localhost:3001/api/order`);
    this.setState({ order: order.data });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({ message: "" });
    console.log({ [name]: value });

    try {
      const data = {
        numhouse: this.state.numhouse,
        nummoo: this.state.nummoo,
        road: this.state.road,
        tambon: this.state.tambon,
        amphoe: this.state.amphoe,
        changwat: this.state.changwat,
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
    const { numhouse, nummoo, road, tambon, amphoe, changwat } = this.state;
    return (
      <div className="container-fluid formSender">
        <div className="text_senderstatus">ข้อมูลลูกค้า</div>
        <div className="row fromDeliveryfood">
          <div className="col-md-6 offset-md-3 ">
            <Card>
              <CardHeader>
                <Row className="cardDelivery">
                  <Col xs="4">Order_id</Col>
                  <Col>ข้อมูลของลูกค้า</Col>
                </Row>
              </CardHeader>
              {this.state.order.map((order) => {
                if (order.status === "3")
                  return (
                    <CardBody>
                      <Row>
                        <Col className="cardDataUser" xs="4">
                          {order.id}
                        </Col>
                        <div className="textNameCustomer">
                          <Col>ชื่อลูกค้า :</Col>
                          <Col className="fontNameCustomer">
                            ที่อยู่สำหรับการจัดส่ง :
                          </Col>
                          <div>
                            <Col className="fontAddress">
                              บ้านเลขที่ :
                              <b className="fontAddressfrom">
                                {order.numhouse}
                              </b>
                            </Col>
                            <Col className="fontAddress">
                              หมู่ที่ :
                              <b className="fontAddressfrom">{order.nummoo}</b>
                            </Col>
                            <Col className="fontAddress">
                              ซอย/ตรอก :
                              <b className="fontAddressfrom"> {order.road}</b>
                            </Col>
                            <Col className="fontAddress">
                              ตำบล :
                              <b className="fontAddressfrom">{order.tambon}</b>
                            </Col>
                            <Col className="fontAddress">
                              อำเภอ :
                              <b className="fontAddressfrom"> {order.amphoe}</b>
                            </Col>
                            <Col className="fontAddress">
                              จังหวัด :
                              <b className="fontAddressfrom">
                                {order.changwat}
                              </b>
                            </Col>
                          </div>
                          <div>
                            <Col className="fontNameCustomer">
                              เบอร์โทรศัพท์ :
                            </Col>
                          </div>
                          <div>
                            <Col className="fontNameCustomer">
                              วิธีการชำระเงิน :
                              <b className="fontpayment"> {order.payment}</b>
                            </Col>
                          </div>
                          <br></br> <br></br>
                        </div>
                      </Row>
                    </CardBody>
                  );
                else return null;
              })}
              <CardFooter>
                <div className="row ">
                  <div className="col fontMoney">
                    จำนวนเงินที่ลูกค้าต้องชำระ{" "}
                  </div>
                  <div className="col col-lg-2 fontUnit">บาท</div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="btFoodDelivery">
          <Button className="fontBTFoodDelivery" color="danger" size="sm" block>
            ส่งอาหารเรียบร้อยแล้ว
          </Button>
        </div>
      </div>
    );
  }
}
export default DeliveryFood;
