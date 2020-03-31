import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  CardText
} from "reactstrap";
import axios from "axios";
import "./FoodOrder.css";
class FoodOrder extends Component {
  state = {
    order: []
  };
  componentDidMount = async nextProps => {
    let order = await axios.get(`http://localhost:3001/api/order`);
    this.setState({ order: order.data });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="text_foodorder">ออเดอร์อาหาร</div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Card className="card_foodorder">
              <CardHeader>
                <Row>
                  <Col>order_id</Col>
                  <Col>สถานะ</Col>
                </Row>
              </CardHeader>
              {this.state.order.map(order => {
                if (
                  order.user_id != this.props.match.params.userid ||
                  order.status != 3
                )
                  return null;
                else
                  return (
                    <div>
                      <CardBody>
                        <Row>
                          <Col> {order.id}</Col>
                          <Col>
                            <Button
                              color="danger"
                              outline
                              href={`/MenuOrder/${this.props.match.params.userid}/${order.id}`}
                            >
                              จัดเตรียมอาหาร
                            </Button>
                          </Col>
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
export default FoodOrder;
