import React, {Component} from "react";
import {
} from "reactstrap";
import "./NavMenu.css";
class NavMenu extends Component{
  render() {
      return (
        <nav className="navbar navbar-light bg-light">
          <a class="navbar-brand"></a>
          <form class="form-inline input_search">
            <input
              className="form-control mr-sm-2 "
              type="search"
              placeholder="เมนูที่คุณต้องการ....."
              aria-label="Search"
            />
            <button
              className="btn btn-info my-2 my-sm-0"
              type="submit"
            >
              ค้นหา
            </button>
          </form>
        </nav>
      );
}
}
export default NavMenu;
