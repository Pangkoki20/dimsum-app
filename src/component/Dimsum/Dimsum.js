import React, { Component } from "react";
import { Container, Table, Button, Row, Col } from "reactstrap";
import "./Dimsum.css";
// import Paginat from "../Paginat/Paginat";
import BTHome from "../BTHome/BTHome";
import Pork_Dumpling from "./Pork_Dumpling";
import Porkegg from "./Porkegg";
import Poo_Dumpling from "./Poo_Dumpling";
import Shrimp from "./Shrimp";
import Hargao from "./Hargao";
import Shrimp_Dumling from "./Shrimp_Dumling";
import bt_shop from "../../imgshop/shopping-basket.png";
import NavMenu from "../์NavMenu/NavMenu";
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
      <div>
        <NavMenu />
        <div class="row">
          <div class="col row1">
            <div class="container-fluid">
              <div class="card shadow-sm p-3 mb-1 bg-white rounded from_dimsum">
                <div></div>
                <div className="textname-dimsum">ติ่มซำ </div>

                <Table hover className="table-dimsum ">
                  <tbody className="tabel-dimsum text_namemenu">
                    <Pork_Dumpling />
                    <Porkegg />
                    <Poo_Dumpling />
                    <Shrimp />
                    <Hargao />
                    <Shrimp_Dumling />
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
export default Dimsum;
