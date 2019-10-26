import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import "./Fastfood.css";
import Paginat from "../Paginat/Paginat";
import Fast_Chicken from "./Fast_Chicken";
import Fast_Rice from "./Fast_Rice";
import Fast_Babutte from "./Fast_Babutte";
import Fast_Duck from "./Fast_Duck";
import Fast_Porkleg from "./Fast_Porkleg";
import Fast_Redpork from "./Fast_Redpork";
import Fast_Crispypork from "./Fast_Crispypork";
import BTHome from "../BTHome/BTHome";
import bt_shop from "../../imgshop/shopping-basket.png";
import NavMenu from "../์NavMenu/NavMenu";
import MenuSelect from "../MenuSelect/MenuSelect";
class Fastfood extends Component {
  render() {
    return (
      <div>
        <MenuSelect />
        <div class="row">
          <div class="col row1">
            <div class="container-fluid">
              <div class="card shadow-sm p-3 mb-1 bg-white rounded from_fastfood">
                <div></div>
                <div className="textname-fastfood">อาหารจานเดียว </div>
                <Table hover className="table-fastfood">
                  <thead className="thead-bar">
                    <tr>
                      <th></th>
                      <th>ชื่ออาหาร</th>
                      <th>ราคา</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="tabel-fastfood">
                    <Fast_Babutte />
                    <Fast_Chicken />
                    <Fast_Duck />
                    <Fast_Porkleg />
                    <Fast_Redpork />
                    <Fast_Crispypork />
                    <Fast_Rice />
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
export default Fastfood;
