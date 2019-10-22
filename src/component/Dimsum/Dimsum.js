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
        <div class="container-fluid">
              <div class="card shadow-sm p-3 mb-1 bg-white rounded">
                <NavMenu />
                <div class="d-flex bd-highlight textname-dimsum">
                  <div class="p-2 w-100 bd-highlight ">ติ่มซำ</div>
                  <div class="p-2 flex-shrink-1 bd-highlight">
                    <a href="/Basket">
                      <img className="bt_shop" src={bt_shop} />
                    </a>
                  </div>
                </div>

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
              </div>
            </div>
          <BTHome />
        </div>
    );
  }
}
export default Dimsum;
