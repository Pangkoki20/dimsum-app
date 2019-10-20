import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import "./OrderConfirm.css";
import Address from "./Address";
class BtOrder extends Component {
  render() {
    return (
      <div class="row">
        <div class="col"></div>
        <div class="col-md-auto">
          <Button
            outline
            color="info"
            size="lg"
            block
            className="btmodify_food"
            href="/Basket"
          >
            แก้ไขรายการสั่งอาหาร
          </Button>
        </div>
        <div class="col-md-auto">
          <Button
            color="info"
            size="lg"
            block
            className="btmodify_food"
            href="/Payment"
          >
            ต่อไป
          </Button>
        </div>
      </div>
    );
  }
}
export default BtOrder;