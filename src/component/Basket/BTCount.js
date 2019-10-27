import React, { Component } from "react";
import {
  Button,
  ButtonGroup,

} from "reactstrap";
import "./Basket.css";
class BTCount extends Component {
  render() {
    return (
      <div className="add_remove">
        <ButtonGroup size="lg">
          <Button className="btn-light border border-secondary bt_addremove">
            -
          </Button>
          <Button className="btn-light border border-secondary bt_addremove">
            1
          </Button>
          <Button className="btn-light border border-secondary bt_addremove">
            +
          </Button>
        </ButtonGroup>
      </div>
    );
    }
}
export default BTCount;
