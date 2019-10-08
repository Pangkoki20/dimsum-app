import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import dl_shrimp from "../../imgdimsum/เกี๊ยวกุ้ง.png";
export default class Shrimp_Dumling extends Component {
                 state = {
                   menu_name: "shrimp_dumlin",
                   menu_value: 0,
                   menu_price: 20
                 };

                 sentOrder = e => {
                   e.preventDefault();

                   var oldItems =
                     JSON.parse(localStorage.getItem("order")) || [];

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
                         <img className="dl_shrimp" src={dl_shrimp} />
                       </th>
                       <td>เกี๊ยวกุ้ง</td>
                       <td>20.-</td>
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