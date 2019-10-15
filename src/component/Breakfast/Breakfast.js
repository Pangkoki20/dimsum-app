import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import "./Breakfast.css";
import Paginat from "../Paginat/Paginat";
import BTHome from "../BTHome/BTHome";
import Break_fast from "./Break_fast";
import Break_egg from "./Break_egg";
import Break_fish from "./Break_fish";
import Break_shrimp from "./Break_shrimp";
class Breakfast extends Component {
  componentDidMount() {
    document.title = "Dimsumahkong Delivery";
    // var oldItems = []
    var oldItems = JSON.parse(localStorage.getItem("order"));
    console.log("old first :", oldItems);

    if (oldItems == null) {
      var oldItems = [];
      localStorage.setItem("order", JSON.stringify(oldItems));
    } else {
      var oldItems = JSON.parse(localStorage.getItem("order")) || [];
    }
    // var oldItems = JSON.parse(localStorage.getItem('order')) || [];
  }
  render() {
    return (
      <Container>
        <div className="textname-breakfast">อาหารเช้า</div>
        <Table hover className="table-breakfast">
          <thead className="thead-bar">
            <tr>
              <th></th>
              <th>ชื่ออาหารเช้า</th>
              <th>ราคา</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="tabel-breakfast">
            <Break_fast />
            <Break_egg />
            <Break_fish />
            <Break_shrimp />
          </tbody>
        </Table>
        <Paginat />
        <BTHome />
      </Container>
    );
  }
}
export default Breakfast;
