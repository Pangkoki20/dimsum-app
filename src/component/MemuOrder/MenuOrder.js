import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row, Col, Table } from "reactstrap";
import "./MenuOrder.css";
import axios from "axios";

class MenuOrder extends Component {
  state = {
    order: []
  };
  componentDidMount = () => {
    let order = JSON.parse(localStorage.getItem("order"));
    console.log("all order : ", order);
    this.setState({ order: order });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="text_orderkitchen">รายการอาหารที่เข้ามา</div>
        <Card className="card_orderkitchen">
          <CardHeader>
            <Table hover>
              <th>ลำดับ</th>
              <th>รายการ</th>
              <th>สถานะ</th>
            </Table>
          </CardHeader>
          {this.state.order.map((e, index) => {
            return (
              <Table>
                <CardBody>
                  <Table hover>
                    <tbody>
                      <tr>
                        <td> {index + 1}</td>
                      </tr>
                    </tbody>
                  
                </CardBody>
             
            );
          })}
          </Table>
      </div>
    );
  }
}
export default MenuOrder;
