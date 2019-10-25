import React, { Component } from "react";
import { Row, Col, Button, Contrainer } from "reactstrap";
import "./OrderConfirm.css";
import Address from "./Address";
class BtOrder extends Component {
  render() {
    return (
      <div class="contrainer">
        <div class="row from_btnextback">
          <div class="col">
            <Button
              color="info"
              size="lg"
              block
              className="btmodify_food"
              href="/Address"
            >
              ย้อนกลับ
            </Button>

            <div class="col">
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
            <div class="col">
              <Button
                color="info"
                size="lg"
                block
                class="btmodify_food"
                href="/Payment"
              >
                ต่อไป
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BtOrder;
