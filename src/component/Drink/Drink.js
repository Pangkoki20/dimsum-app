import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import Paginat from "../Paginat/Paginat";
import Drink_Chaice from "./Drink_Chaice";
import "./Drink.css";
import Drink_Coffee from "./Drink_Coffee";
import Drink_chamanow from "./Drink_chamanow";
import Drink_Ovantin from "./Drink_Ovantin";
import Drink_Greentea from "./Drink_Greentea";
import Drink_Chadum from "./Drink_Chadum";
import BTHome from "../BTHome/BTHome";
import bt_shop from "../../imgshop/shopping-basket.png";
import NavMenu from "../์NavMenu/NavMenu";
import MenuSelect from "../MenuSelect/MenuSelect";
class Drink extends Component {
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
        <div class="row">
          <div class="col row1">
            <div class="container-fluid">
              <div class="card shadow-sm p-3 mb-1 bg-white rounded from_dimsum">
                <div></div>
                <div className="textname-dink">เครื่องดื่ม</div>
                <Table hover className="table-drink">
                  <thead className="thead-bar">
                    <tr>
                      <th></th>
                      <th>ชื่อเครื่องดื่ม</th>
                      <th>ราคา</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="tabel-drink">
                    <Drink_Chaice />
                    <Drink_Coffee />
                    <Drink_chamanow />
                    <Drink_Ovantin />
                    <Drink_Greentea />
                    <Drink_Chadum />
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
export default Drink;
