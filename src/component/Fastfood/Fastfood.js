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
class Fastfood extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="card shadow-lg p-3 mb-5 bg-white rounded">
            <NavMenu/>
            <div class="d-flex bd-highlight textname-fastfood">
              <div class="p-2 w-100 bd-highlight ">อาหารจานเดียว</div>
              <div class="p-2 flex-shrink-1 bd-highlight">
                <a href="/Basket">
                  <img className="bt_shop" src={bt_shop} />
                </a>
              </div>
            </div>
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
          
          <BTHome />
        </div>
      </div>
    );
  }
}
export default Fastfood;
