import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import axios from "axios";
import "./ListUser.css";
class ListUser extends Component {
  state = {
    users: []
  };
  componentDidMount = async nextProps => {
    let user = await axios.get(`http://localhost:3001/api/users`);
    this.setState({ users: user.data });
  };

  getOrder = () => {};
  render() {
    return (
      <div className="container-fluid">
        <div className="text_customer">ข้อมูลลูกค้า</div>
        <div className="row">
          <div className="col-12">
            <Card className="card_listorder">
              <CardHeader>
                <Row>
                  <Col xs="3">user_id</Col>
                  <Col>ชื่อ</Col>
                  <Col>นามสกุล</Col>
                  <Col>เบอร์โทร</Col>
                  <Col xs="3">สถานะ</Col>
                </Row>
              </CardHeader>
              {this.state.users.map((user, index) => {
                if (user.role === "user")
                  if (true)
                    return (
                      <div key={index + 1}>
                        <CardBody>
                          <Row>
                            <Col xs="3"> {user.id}</Col>
                            <Col>{user.firstname} </Col>
                            <Col>{user.lastname} </Col>
                            <Col>{user.phone} </Col>
                            <Col xs="3">
                              <Button
                                className="bt_listorder"
                                color="danger"
                                outline
                                href={`/FoodOrder/${user.id}`}
                              >
                                รับรายการอาหาร
                              </Button>
                            </Col>
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
          {/* <div class="col-6 col-md-4 ">
            <div className="from_money">
              <Card>
                <CardHeader className="text_money">Order</CardHeader>
                <div className="table_num">
                  <div className="d-flex">
                    <div className="col-6">
                      <CardText className="tt_food ">Order ทั้งหมด</CardText>
                    </div>
                    <div className="col">
                      <CardText className="tt_food text_num">
                        {this.state.order.length}
                      </CardText>
                    </div>
                    <div className="col">
                      <CardText className="tt_food text_unit">Order</CardText>
                    </div>
                  </div>
                </div>
                <div className="table_num">
                  <div className="d-flex">
                    <div className="col-6">
                      <CardText className="tt_food">Order ที่รับแล้ว</CardText>
                    </div>
                    <div className="col">
                      <CardText className="tt_food text_num"></CardText>
                    </div>
                    <div className="col">
                      <CardText className="tt_food text_unit">Order</CardText>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
export default ListUser;
