import React, { Component } from "react";
import { Nav, NavLink, NavItem } from "reactstrap";
import "./KitchenNavbar.css";
import "../Basket/Basket";
class KitchenNavbar extends Component {
  render() {
    return (
      <Nav className="from_menusel">
        <NavItem>
          <NavLink className="border-right" href="/Menu">
            เมนูแนะนำ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="border-right" href="/Dimsum">
            ติ่มซำ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="border-right" href="/Breakfast">
            อาหารเช้า
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="border-right" href="/Fastfood">
            อาหารจานเดียว
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="border-right" href="/Drink">
            เครื่องดื่ม
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="" href="/Delivery">
            ติดตามสถานะการจัดส่ง
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="" href="/MenuOrder">
            รายการอาหารที่เข้ามา
          </NavLink>
        </NavItem>
        <NavItem className="ml-auto">
          <div className="input_search">
            <form className="form-inline ">
              <input
                className="form-control mr-sm-2 rounded-pill"
                type="search"
                placeholder=""
                aria-label="Search"
              />
              <button className="btn btn-primary " type="submit">
                ค้นหา
              </button>
            </form>
          </div>
        </NavItem>
      </Nav>
    );
  }
}
export default KitchenNavbar;
