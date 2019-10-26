import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import bf_fish from "../../imgbreakfast/ปลาทิพย์ทอด.png";
import BTBasket from "../BTBasket/BTBasket";
export default class Break_fish extends Component {
  state = {
    menu_name: "break_fish",
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
          <img className="bf_fish" src={bf_fish} />
        </th>
        <td>ปลาทิพย์ทอด</td>
        <td>40.-</td>
        <td>
          <BTBasket/>
        </td>
      </tr>
    );
  }
}
