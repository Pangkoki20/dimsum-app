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
  };
  onUserChanged = (address) => {
    this.setState({ address });
  };
  constructor(props) {
    super(props);
    this.state1 = {
      menu_id: "",
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
        menu_id: this.state.menu_id,
        // postcode: this.state.postcode,
        // payment: this.state.payment,
        code: this.state.code,
        selects: this.state.selects,

        order: this.state.order.map(($obj) => {
          return {
            menu_name: $obj.menu_name,
            menu_value: $obj.menu_value,
            menu_price: $obj.menu_price,
            menu_id: $obj.menu_id,
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
    const { numhouse, nummoo, road, tambon, amphoe, changwat } = this.state;
    return (
      <div className="container-fluid formSender">
        <div className="text_senderstatus">ข้อมูลลูกค้า</div>
        <div className="row fromDeliveryfood">
          <div className="col-md-6 offset-md-3 ">
            <Card>
              <CardHeader>
                <Row className="cardDelivery">
                  <Col xs="3">Order_id</Col>
                  <Col>ข้อมูลของลูกค้า</Col>
                </Row>
              </CardHeader>
              {this.state.order.map((order) => {
                if (order.status === "3")
                  return (
                    <CardBody>
                      <Row>
                        <Col className="cardDataUser" xs="3">
                          {order.id}
                        </Col>
                        <div className="textNameCustomer">
                          <Col className="fontNameCustomer">ชื่อลูกค้า :</Col>
                          <Col>
                            ที่อยู่สำหรับการจัดส่ง :{numhouse}
                            {console.log(numhouse)}
                            {nummoo}
                            {road}
                            {tambon}
                            {amphoe}
                            {changwat}
                          </Col>
                          <Col>เบอร์โทรศัพท์ :</Col>
                          <Col>วิธีการชำระเงิน :</Col>
                          <br></br> <br></br> <br></br> <br></br> <br></br>
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
