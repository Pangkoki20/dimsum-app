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
    test: null,
    select_id: null,
  };
  componentDidMount = async (nextProps) => {
    let user = await axios.get(`http://localhost:3001/api/users`);
    this.setState({ users: user.data });
    // console.log("tetsa", this.state.users);
    let order = await axios.get(`http://localhost:3001/api/order`);
    this.setState({ order: order.data });
  };

  getOrder = async () => {
    let order = await axios.get(`http://localhost:3001/api/order`);
    this.setState({ order: order.data });
  };

  toggle2 = async () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
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
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  orderMenu = (id, orderid) => {
    // console.log(orderid);
    const oderMenu = this.state.menu.map((items) => {
      console.log(items);
      if (id == items.user_id && orderid == items.order_id) {
        return items;
      } else {
        return null;
      }
    });

    this.setState({
      oderMenu,
    });
  };

  testFunc = () => {
    if (this.state.test || this.state.test === 0) {
      return (
        <Row>
          <Col>
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
                {/* <div className="row  align-items-center tablelistuser"> */}

                <Row xs="3" className="align-items-center tablelistuser">
                  <Col sm="4">ลำดับที่</Col>
                  <Col sm="4">ชื่ออาหาร</Col>
                </Row>

                {this.state.order[this.state.test].allMenu.map(
                  (menu, index) => {
                    return (
                      <div className="row  align-items-center tablelistuser">
                        <Col sm="4">{index + 1}</Col>

                        <Col sm="4">{menu.namefood}</Col>
                      </div>
                    );
                  }
                )}

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
          </Col>
        </Row>
      );
      // });
    }
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
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="text_customer">ข้อมูลลูกค้า</div>
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
                console.log(item);

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
                            onClick={async () => {
                              // this.orderMenu(item.user_id, item.id);
                              await this.setState({
                                test: id,
                                select_id: item.id,
                              });
                              console.log(item.id);
                              this.toggle2();
                              this.updateStatus(this.state.select_id, 2);
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
                              onClick={() => {
                                this.toggle();
                                this.updateStatus(this.state.select_id, 3);
                              }}
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
        <div>{this.testFunc()}</div>
      </div>
    );
  }
}
export default ListUser;
