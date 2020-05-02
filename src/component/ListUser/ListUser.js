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
    menu: [],
    popoverOpen: false,
    modal: false,
    oderMenu: [],
  };
  componentDidMount = async (nextProps) => {
    let user = await axios.get(`http://localhost:3001/api/users`);
    this.setState({ users: user.data });
    // console.log("tetsa", this.state.users);
    let order = await axios.get(`http://localhost:3001/api/order`);
    this.setState({ order: order.data });
    console.log("Order", this.state.order);
    let menu = await axios.get(`http://localhost:3001/api/menu`);
    this.setState({ menu: menu.data });
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

  orderMenu = (id, orderid) => {
    // console.log(orderid);
    const oderMenu = this.state.menu.map((items) => {
      if (id == items.user_id && orderid == items.order_id) {
        return items;
      } else {
        return null;
      }
    });
    this.setState({
      oderMenu,
    });
    // console.log(this.state.oderMenu);
  };

  render() {
    const order_id = this.state.order.map((item, id) => {
      // console.log(item);
      return <div key={id}>{item.order_id}</div>;
    });
    const user_id = this.state.order.map((item, id) => {
      // console.log(item);
      return <div key={id}>{item.user_id}</div>;
    });
    const menu = this.state.menu.map((item, id) => {
      // console.log(item);
      return <div key={id}>{item.id}</div>;
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

              {this.state.order.map((item, id) => {
                // console.log(item);
                return (
                  <div key={id}>
                    {" "}
                    <CardBody>
                      <Row>
                        <Col xs="4">{item.id}</Col>
                        <Col xs="4">{item.user_id}</Col>
                        <Col xs="4">
                          <Button
                            id="Popover1"
                            className="bt_listorder"
                            color="danger"
                            onClick={() => {
                              this.orderMenu(item.user_id, item.id);
                            }}
                          >
                            รับรายการอาหาร
                          </Button>
                        </Col>
                        {/* {this.state.menu.map((items, ids) => {
                          // console.log(items);
                          // if (item.user_id == items.user_id) {
                          return (
                            <div key={ids}> */}
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
                                  <Col>ลำดับที่</Col>
                                  <Col>ชื่ออาหาร</Col>
                                  <Col>จำนวน</Col>
                                </div>
                                <CardBody>
                                  {this.state.oderMenu.map((iteme, idxs) => {
                                    if (iteme !== null) {
                                      return (
                                        <div
                                          key={idxs}
                                          className="row  align-items-center tablelistuser"
                                        >
                                          <Col>{iteme.id}</Col>
                                          <Col>{iteme.namefood}</Col>
                                          <Col></Col>
                                        </div>
                                      );
                                    }
                                  })}
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
                            </Popover>
                          </div>
                        </div>
                        {/* </div>
                          );
                          // } else { */}
                        {/* //   return null;
                          // } */}
                        {/* })} */}
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
