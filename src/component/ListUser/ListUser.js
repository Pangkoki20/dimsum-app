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
    popoverOpen: false,
    modal: false,
  };
  componentDidMount = async (nextProps) => {
    let user = await axios.get(`http://localhost:3001/api/users`);
    this.setState({ users: user.data });
    console.log("tetsa", this.state.users);
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
              {this.state.users.map((user, index) => {
                if (user.role === "user")
                  if (true)
                    return (
                      <div key={index + 1}>
                        <CardBody>
                          <Row>
                            <Col xs="4"> {user.id}</Col>
                            {/* <Col>{user.firstname} </Col>
                            <Col>{user.lastname} </Col>
                            <Col>{user.phone} </Col> */}
                            <Col xs="4">User_id</Col>
                            <Col xs="4">
                              <Button
                                id="Popover1"
                                className="bt_listorder"
                                color="danger"
                                outline
                                // href={`/FoodOrder/${user.id}`}
                              >
                                รับรายการอาหาร
                              </Button>

                              <div className="from_menulistuser">
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
                                    <Card className="card_food">
                                      <CardHeader>
                                        <Row>
                                          <Col>ลำดับที่</Col>
                                          <Col>ชื่ออาหาร</Col>

                                          <Col>จำนวน</Col>
                                        </Row>
                                      </CardHeader>
                                      <CardBody>
                                        <Row>
                                          <Col></Col>
                                          <Col></Col>
                                          <Col></Col>
                                        </Row>
                                      </CardBody>
                                    </Card>
                                  </PopoverBody>

                                  <div className="btconfirm">
                                    <Button
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
                                </Popover>
                              </div>
                            </Col>
                            <Modal
                              isOpen={this.state.modal}
                              toggle={this.toggle}
                            >
                              <ModalBody className="readytodeliver">
                                อาหารของลูกค้าพร้อมส่ง
                              </ModalBody>

                              <div className="piccorrect">
                                {" "}
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
                  else {
                    return null;
                  }
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
