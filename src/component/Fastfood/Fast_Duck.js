import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import ff_duck from "../../imgfastfoood/ข้าวหน้าเป็ด.png";
import BTBasket from "../BTBasket/BTBasket";
export default class Fast_Duck extends Component {
  state = {
    menu_name: "fast_duck",
    menu_value: 0,
    menu_price: 20
  };

  sentOrder = e => {
    e.preventDefault();

    var oldItems = JSON.parse(localStorage.getItem("order")) || [];

    console.log("sent !");

    const newData = {
      menu_name: this.state.menu_name,
      menu_value: 1,
      menu_price: this.state.menu_price
    };
    oldItems.push(newData);
    localStorage.setItem("order", JSON.stringify(oldItems));
    console.log(" data : ", newData);
    this.setState({ menu_value: 0 });
    this.setState({ remark: "" });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({ please: "" });
    console.log({ [name]: value });
  };
  render() {
    return (
      <tr>
        <th scope="row">
          <img className="ff_duck" src={ff_duck} />
        </th>
        <td>ข้าวหน้าเป็ด</td>
        <td>50.-</td>
        <td>
          <BTBasket/>
        </td>
      </tr>
    );
  }
}
