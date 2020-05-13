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
                <Row xs="12" className="align-items-center tablelistuser">
                  <Col>ลำดับที่</Col>
                  <Col>ชื่ออาหาร</Col>
                  <Col>จำนวน</Col>
                </Row>

                {this.state.order[this.state.test].allMenu.map(
                  (menu, index) => {
                    return (
                      <Row xs="12" className="align-items-center tablelistuser">
                        <Col>{index + 1}</Col>

                        <Col>{menu.namefood}</Col>
                        <Col>{menu.value}</Col>
                      </Row>
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
      return <div key={id}>{item.order_id}</div>;
    });
    const user_id = this.state.order.map((item, id) => {
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
                  <Col xs="4">สถานะ</Col>
                </Row>
              </CardHeader>

              {this.state.order.map((item, id) => {
                // console.log(item.status);

                return (
                  <div key={id}>
                    {" "}
                    {item.status != 3 ? (
                      <CardBody>
                        <Row>
                          <Col xs="4">{item.id}</Col>
                          <Col xs="4">{item.user_id}</Col>
                          <Col xs="4">
                            <Button
                              id="Popover1"
                              className="fontBTdatauser"
                              color="danger"
                              onClick={async () => {
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
                        </Row>
                      </CardBody>
                    ) : (
                      <CardBody className="rowcolor">
                        <Row>
                          <Col xs="4">{item.id}</Col>
                          <Col xs="4">{item.user_id}</Col>
                          <Col xs="4">
                            <Button
                              id="Popover1"
                              className="fontBTdatauser"
                              color="dark"
                            >
                              รับรายการอาหาร
                            </Button>
                          </Col>
                        </Row>
                      </CardBody>
                    )}
                    <Modal
                      isOpen={this.state.modal}
                      toggle={this.toggle}
                      className="fReadytodeliver"
                    >
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
