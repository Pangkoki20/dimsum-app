import React, { Component } from "react";
import {} from "reactstrap";
export default class ShowOrder extends Component {
  state = {
    order: [],
    priceAll: 0,
  };
  componentDidMount = () => {
    let order = JSON.parse(localStorage.getItem("order"));
    console.log("all order : ", order);
    this.setState({ order: order });
    // order.map((e, index) => {
    //   this.state.priceAll = this.state.priceAll + e.menu_value * e.menu_price;
    //   console.log("price all : ", this.state.priceAll);
    // });
    this.setState({ priceAll: this.state.priceAll });
  };

  render() {
    return (
      <div>
        {this.state.order.map((e, index) => {
          return (
            <div key={index + 1}>
              {index + 1}.{e.menu_name} {e.menu_price}
            </div>
          );
        })}
      </div>
    );
  }
}
