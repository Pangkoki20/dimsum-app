import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import dl_pokegg from "../../imgdimsum/ขนมจีบหมูไข่เค็ม.png";
export default class Porkegg extends Component {
  state = { menu_name: "porkegg", menu_value: 0, menu_price: 20 };

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
                <img className="dl_pokegg" src={dl_pokegg} />
              </th>             
               <td className="text_name">ขนมจีบหมูไข่เค็ม</td>
              <td className="text_name">20.-</td>
              <td></td> 
              <td>
          <Button
            onClick={this.sentOrder}
            outline
            color="danger"
            className="btn-basket"
          >
            เพิ่มลงในตะกร้า
          </Button>
        </td>
        </tr>
    );
  }
}
