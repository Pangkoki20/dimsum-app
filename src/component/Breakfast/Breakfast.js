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
import MenuSelect from "../MenuSelect/MenuSelect";
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
        <MenuSelect />
        <div class="row table-breakfast">
          <div class="col row1">
            <div class="container-fluid">
              <div class="card shadow-sm p-3 mb-1 bg-white rounded from_breakfast">
                <div></div>
                <div className="textname-breakfast">อาหารเช้า</div>
                 <Table hover>
                  <tbody>
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
