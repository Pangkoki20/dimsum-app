import React, {Component} from "react";
import {
} from "reactstrap";
import "./NavMenu.css";
import bt_shop from "../../imgshop/shopping-basket.png";
class NavMenu extends Component{
  render() {
      return (
        <nav className="navbar navbar-light bg-light ">
          <a class="navbar-brand"></a>
          <form class="form-inline from_sech">
            <input
              className="form-control mr-sm-2 "
              type="search"
              placeholder="เมนูที่คุณต้องการ....."
              aria-label="Search"
            />
            <button className="btn btn-info my-2 my-sm-0" type="submit">
              ค้นหา
            </button>
          </form>
          <a href="/Basket">
            <img className="bt_shop" src={bt_shop} />
          </a>
        </nav>
      );
}
}
export default NavMenu;
