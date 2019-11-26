import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Row,
  Col,
  Button
} from "reactstrap";
import "./MenuOrder.css";
import axios from "axios";

class EachMenuOrder extends Component {
  state = {
    persons: []
  };
  componentDidMount = () => {
    axios
      .get(`http://localhost:3001/api/order/${this.props.match.params.id}`)
      .then(res => {
        const { persons } = res.data;
        this.setState({ persons });
      });
  };

  render() {
    const table = this.state.persons.map((text, index) => {
      return (
        <div key={index + 1}>
          <CardBody>
            <Row>
              <Col xs="1">{index + 1}</Col>
              <Col>{text.user_id} </Col>
            </Row>
          </CardBody>
        </div>
      );
    });
    return (
      <div>
        <div className="container-fluid">{table}</div>
        <div></div>
      </div>
    );
  }
}
export default EachMenuOrder;
