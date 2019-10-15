import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import ff_redpork from "../../imgfastfoood/ข้าวหมูแดง.png";
import ff_crispypork from "../../imgfastfoood/ข้าวหมูกรอบ.png";
import ff_porkleg from "../../imgfastfoood/ข้าวขาหมู.png";
import ff_duck from "../../imgfastfoood/ข้าวหน้าเป็ด.png";
import ff_babutte from "../../imgfastfoood/บะกุ๊ดเต๋.png";
import ff_rice from "../../imgfastfoood/ข้าวเปล่า.png";
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
class Fastfood extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="textname-fastfood">อาหารจานเดียว</div>
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
              <Fast_Babutte/>
              <Fast_Chicken/>
              <Fast_Duck/>
              <Fast_Porkleg/>
              <Fast_Redpork/>
              <Fast_Crispypork/>
              <Fast_Rice/>
            </tbody>
          </Table>
          <Paginat/>
          <BTHome/>
        </Container>
      </div>
    );
  }
}
export default Fastfood;
