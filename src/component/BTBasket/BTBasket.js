import React, { Component } from "react";
import { Button } from "reactstrap";
import "./BTBasket.css";
class BTBasket extends Component {
  render() {
    return (
      <div className="btn-basket">
        <Button onClick={this.sentOrder} outline color="danger">
          เพิ่มลงในตะกร้า
        </Button>
      </div>
    );
  }
}
export default BTBasket;
