import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import axios from "axios";
import "./ListUser.css";
import correct from "../../imgshop/correct.png";
class ListUser extends Component {
  state = {
    users: [],
    order: [],
    popoverOpen: false,
    modal: false,
  };
  componentDidMount = async (nextProps) => {
    let user = await axios.get(`http://localhost:3001/api/users`);
    this.setState({ users: user.data });
    console.log("tetsa", this.state.users);
    let order = await axios.get(`http://localhost:3001/api/order/me`);
    this.setState({ order: order.data });
  };

  getOrder = () => {};

  toggle2 = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    const order_id = this.state.order.map((item, id) => {
      console.log(item);
      return <div key={id}>{item.order_id}</div>;
    });
    const user_id = this.state.order.map((item, id) => {
      console.log(item);
      return <div key={id}>{item.user_id}</div>;
    });
    return (
      <div className="container-fluid">
        <div className="text_customer">ข้อมูลลูกค้า</div>
        <div className="row">
          <div className="col-sm-6">
            <Card className="card_listorder">
              <CardHeader>
                <Row>
                  <Col xs="4">Order_id</Col>
                  <Col xs="4">User_id</Col>
                  {/* <Col>ชื่อ</Col>
                  <Col>นามสกุล</Col>
                  <Col>เบอร์โทร</Col> */}
                  <Col xs="4">สถานะ</Col>
                </Row>
              </CardHeader>
              {/* {this.state.order.map((order)
              ) */}
              {/* {this.state.users.map((user, index) => {
                if (user.role === "user")
                  if (true)
                    return (
                      <div key={index + 1}> */}
              {this.state.order.map((item, id) => {
                console.log(item);
                return (
                  <div key={id}>
                    {" "}
                    <CardBody>
                      <Row>
                        <Col xs="4">{item.order_id}</Col>
                        <Col xs="4">{item.user_id}</Col>
                        <Col xs="4">
                          <Button
                            id="Popover1"
                            className="bt_listorder"
                            color="danger"

                            // href={`/FoodOrder/${user.id}`}
                          >
                            รับรายการอาหาร
                          </Button>
                          <div className="row">
                            <div className="col-sm-9 ">
                              <Popover
                                className="popup"
                                placement="right"
                                isOpen={this.state.popoverOpen}
                                target="Popover1"
                                toggle={this.toggle2}
                              >
                                <PopoverHeader className="menulistuser">
                                  รายการอาหาร
                                </PopoverHeader>
                                <PopoverBody>
                                  <div className="row  align-items-center tablelistuser">
                                    <div class="col col-lg-2">ลำดับที่</div>

                                    <Col>ชื่ออาหาร</Col>

                                    <div class="col col-lg-2">จำนวน</div>
                                  </div>
                                  <CardBody>
                                    <Row>
                                      <Col></Col>
                                      <Col></Col>
                                      <Col></Col>
                                    </Row>
                                  </CardBody>
                                  <Col>
                                    <div className="formBTConfirm">
                                      <Button
                                        className="btconfirm"
                                        color="info"
                                        onClick={() => {
                                          this.setState({
                                            popoverOpen: false,
                                            modal: true,
                                          });
                                        }}
                                      >
                                        อาหารพร้อมส่ง
                                      </Button>
                                    </div>
                                  </Col>
                                </PopoverBody>

                                <div></div>
                              </Popover>
                            </div>
                          </div>
                        </Col>
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                          <ModalBody className="readytodeliver">
                            อาหารของลูกค้าพร้อมส่ง
                          </ModalBody>

                          <div className="piccorrect">
                            <img
                              className="img_correct img-fluid"
                              src={correct}
                              alt=""
                            />
                          </div>
                          <br></br>
                          <ModalFooter>
                            <Button
                              className="btoksender"
                              color="info"
                              onClick={this.toggle}
                              size="sm"
                              block
                            >
                              ตกลง
                            </Button>
                          </ModalFooter>
                        </Modal>
                      </Row>
                    </CardBody>
                  </div>
                );
              })}
            </Card>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}
export default ListUser;
