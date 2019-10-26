import React, { Component } from "react";
import {} from "reactstrap";
import "./NavMenu.css";
class NavMenu extends Component {
  render() {
    return (
      <div>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2 "
            type="search"
            placeholder=""
            aria-label="Search"
          />
          <button class="btn btn-success my-2 my-sm-0" type="submit">
            ค้นหา
          </button>
        </form>
      </div>
    );
  }
}
export default NavMenu;
