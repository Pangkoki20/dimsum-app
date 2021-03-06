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
    user: {},
  };
  onUserChanged = (address) => {
    this.setState({ address });
  };
  constructor(props) {
    super(props);
    this.state1 = {
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
    };
  }
  // componentDidMount = () => {
  //   let order = JSON.parse(localStorage.getItem("order"));
  //   console.log("all order : ", order);
  //   this.setState({ order: order });
  // };
  getOrder = async () => {
    let order = await axios.get(`http://localhost:3001/api/order`);
    this.setState({ order: order.data });
  };
  updateStatus = async (id, status) => {
    let res = await axios.put(
      `http://localhost:3001/api/order/updatebystatus/${id}`,
      { status }
    );
    if (res.data.message === "Error") {
    } else {
      await this.getOrder();
    }
  };
  onUserChanged = (user) => {
    this.setState({ user });
  };
  componentDidMount = async (nextProps) => {
    let order = await axios.get(
      `http://localhost:3001/api/order/${this.props.match.params.id}`
    );
    this.setState({ order: order.data });
    let user = await axios.get(`http://localhost:3001/api/users`);
    this.setState({ users: user.data });
    this.setState({ user: this.state.users[this.state.order[0].user_id - 1] });
    console.log(this.state.user);
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({ message: "" });
    console.log({ [name]: value });

    try {
      const data = {
        priceAll: this.state.priceAll,
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
    return (
      <div className="container-fluid formSender">
        <div className="text_senderstatus">ข้อมูลลูกค้า</div>
        <div className="row fromDeliveryfood">
          <div className="col-md-6 offset-md-3 ">
            {this.state.order.map((order) => {
              if (order.status === "3")
                return (
                  <Card>
                    <CardHeader>
                      <Row xs="3" className="cardDelivery">
                        <Col xs="3">Order_id</Col>
                        <Col xs="8">ข้อมูลของลูกค้า</Col>
                      </Row>
                    </CardHeader>

                    <CardBody>
                      <Row xs="3">
                        <Col xs="3" className="cardDataUser">
                          {order.id}
                        </Col>
                        <Col xs="8" className="textNameCustomer">
                          <Col>
                            ชื่อลูกค้า :
                            <b className="fontAddressfrom">
                              {" "}
                              {this.state.user.firstname}
                            </b>
                            <b className="fontAddressfrom">
                              {" "}
                              {this.state.user.lastname}
                            </b>
                          </Col>
                          <Col className="fontNameCustomer">
                            ที่อยู่สำหรับการจัดส่ง :
                          </Col>
                          <Col className="fontAddress">
                            บ้านเลขที่ :
                            <b className="fontAddressfrom">{order.numhouse}</b>
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
                            <b className="fontAddressfrom">{order.changwat}</b>
                          </Col>

                          <Col className="fontNameCustomer">
                            เบอร์โทรศัพท์ :
                            <b className="fontAddressfrom">
                              {this.state.user.phone}
                            </b>
                          </Col>
                          <div>
                            <Col className="fontNameCustomer">
                              วิธีการชำระเงิน :
                              <b className="fontpayment"> {order.payment}</b>
                            </Col>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>

                    <CardFooter>
                      <Row>
                        <Col xs="7" className=" fontMoney">
                          จำนวนเงินที่ลูกค้าต้องชำระ
                        </Col>
                        <Col className="fontPriceAll">{order.priceAll}</Col>
                        <Col className=" fontUnit">บาท</Col>
                      </Row>
                    </CardFooter>
                  </Card>
                );
              else return null;
            })}
          </div>
        </div>
        <div className="btFoodDelivery">
          <Button
            href="/SenderStatus"
            className="fontBTFoodDelivery"
            color="danger"
            size="sm"
            block
            onClick={() => {
              this.updateStatus(this.props.match.params.id, 4);
              console.log(this.props.match.params.id);
            }}
          >
            ส่งอาหารเรียบร้อยแล้ว
          </Button>
        </div>
      </div>
    );
  }
}
export default DeliveryFood;
