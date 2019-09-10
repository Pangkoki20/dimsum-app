import React, { Component } from "react";
import "../Contact.css";
import tel from "../../../img/mobile-phone.png";
import line from "../../../img/line(2).png";
import face from "../../../img/facebook(1).png";
import { Collapse, Button, CardBody, Card, Row, Col } from "reactstrap";

class Collapses extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse1: false, collapse2: false, collapse3: false };
  }
  toggle1 = () => {
    this.setState(state => ({ collapse1: !state.collapse1 }));
  };
  toggle2 = () => {
    this.setState(state => ({ collapse2: !state.collapse2 }));
  };
  toggle3 = () => {
    this.setState(state => ({ collapse3: !state.collapse3 }));
  };
  render() {
    return (
      <div>
        <Row>
          <Col className="cade-tel">
            <img onClick={this.toggle1} className="tel" src={tel} />
            <Collapse isOpen={this.state.collapse1}>
              <Card >
                <CardBody >เบอร์โทรศัพท์ : 086-0633707</CardBody>
              </Card>
            </Collapse>
          </Col>
          <Col className="card-line">
            <img onClick={this.toggle2} className="line" src={line} />
            <Collapse isOpen={this.state.collapse2}>
              <Card >
                <CardBody>dimsumahkong</CardBody>
              </Card>
            </Collapse>
          </Col>
          <Col className="card-face">
            <img onClick={this.toggle3} className="face" src={face} />
            <Collapse isOpen={this.state.collapse3}>
              <Card >
                <CardBody >ติ่มซำอาก๋ง</CardBody>
              </Card>
            </Collapse>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Collapses;
