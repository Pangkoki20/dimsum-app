import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  InputGroupText
} from "reactstrap";
import "./NavMenu.css";
class NavMenu extends Component {
  render() {
    return (
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Button color="secondary">I'm a button</Button>
        </InputGroupAddon>
        <Input className="bt_search" />
      </InputGroup>

      // <InputGroup>
      //   <InputGroupAddon addonType="">
      //     <InputGroupText className="input_search">ค้นหาอาหาร</InputGroupText>
      //   </InputGroupAddon >
      //
      // </InputGroup>
    );
  }
}
export default NavMenu;
