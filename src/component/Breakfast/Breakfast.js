import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import "./Breakfast.css";
import Paginat from "../Paginat/Paginat";
import BTHome from "../BTHome/BTHome";
import Break_fast from "./Break_fast";
import Break_egg from "./Break_egg";
import Break_fish from "./Break_fish";
import Break_shrimp from "./Break_shrimp";
import bt_shop from "../../imgshop/shopping-basket.png";
import NavMenu from "../์NavMenu/NavMenu";

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
      <div>
        <div className="textname-dimsum">อาหารเช้า</div>
      <div class="row">
          <div class="col row1">
            <div class="container-fluid">
        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
          <NavMenu />
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
        </div>
        </div>
        
        <BTHome />
      </div>
      </div>
      </div>
    );
  }
}
export default Breakfast;
