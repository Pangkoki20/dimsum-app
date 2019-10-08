import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import "./Dimsum.css";
import Paginat from "../Paginat/Paginat";
import Pork_Dumpling from "./Pork_Dumpling";
import Porkegg from "./Porkegg";
import Poo_Dumpling from "./Poo_Dumpling";
import Shrimp from "./Shrimp";
import Hargao from "./Hargao";
import Shrimp_Dumling from "./Shrimp_Dumling";
class Dimsum extends Component {
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
        <div className="textname-dimsum">ติ่มซำ</div>
        <Table hover className="table-dimsum">
          <thead className="thead-bar">
            <tr>
              <th></th>
              <th>ชื่อติ่มซำ</th>
              <th>ราคา</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="tabel-dimsum">
            <Pork_Dumpling />
            <Porkegg />
            <Poo_Dumpling />
            <Shrimp />
            <Hargao />
            <Shrimp_Dumling />
          </tbody>
        </Table>
        <Paginat />
      </Container>
    );
  }
}
export default Dimsum;
