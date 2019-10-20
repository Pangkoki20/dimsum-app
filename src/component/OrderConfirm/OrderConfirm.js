import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import "./OrderConfirm.css";
import Address from "./Address";
import Order from "./Oder";
import BtOrder from "./BtOder";
class OrderConfirm extends Component {
  render() {
    return (
      <div class="container-fluid ">
        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="text_basketconfirm">ยืนยันการสั่งซื้อ</div>
          <div>
            <Order/>
          </div>
          <div>
            <Address />
          </div>
          <div>
            <BtOrder/>
          </div>
          </div>
        </div>
    );
  }
}
export default OrderConfirm;
