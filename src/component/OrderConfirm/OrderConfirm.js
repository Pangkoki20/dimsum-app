import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  UncontrolledCollapse,
  Button
} from "reactstrap";
import "./OrderConfirm.css";
import img_address from "../../imgorder/address.png";
import img_pay from "../../imgorder/pay.png";
import img_confirm from "../../imgorder/confirm.png";
class OrderConfirm extends Component {
  render() {
    return (
      <div class="container-fluid from_order">
        <Row>
          <Col xs="6" sm="4">
            <div>
              <Button
                outline
                color="info"
                id="toggler"
                style={{ marginBottom: "1rem" }}
                href="/Payment"
                size="lg"
                block
              >
                <div>
                  <img className="img_address" src={img_address} />
                </div>
                <div className="text-addre">ที่อยู่สำหรับการจัดส่ง</div>
              </Button>
            </div>
            <UncontrolledCollapse toggler="#toggler">
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt magni, voluptas debitis similique porro a molestias
                  consequuntur earum odio officiis natus, amet hic, iste sed
                  dignissimos esse fuga! Minus, alias.
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </Col>
          <Col xs="6" sm="4">
            <Button
              outline
              color="info"
              id="toggler"
              style={{ marginBottom: "1rem" }}
              href="/Payment"
              size="lg"
              block
            >
              <div>
                <img className="img_pay" src={img_pay} />
              </div>
              <div className="text-addre">วิธีการชำระเงิน</div>
            </Button>
            <UncontrolledCollapse toggler="#toggler">
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt magni, voluptas debitis similique porro a molestias
                  consequuntur earum odio officiis natus, amet hic, iste sed
                  dignissimos esse fuga! Minus, alias.
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </Col>
          <Col xs="6" sm="4">
            <Card>
              <CardBody className="img_order">
                <CardText>
                  <img className="img_confirm" src={img_confirm} />
                </CardText>
                <a className="text-addre" href="/">
                  ยืนยันการสั่งอาหาร
                </a>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default OrderConfirm;
