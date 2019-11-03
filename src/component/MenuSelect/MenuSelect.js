import React, { Component } from "react";
import { Nav, NavLink, NavItem } from "reactstrap";
import "./MenuSelect.css";
import basket from "../../imgshop/shopping-basket.png";
import "../Basket/Basket";
class MenuSelect extends Component {
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
            ตรวจสอบสถานะการจัดส่ง
          </NavLink>
        </NavItem>
        <NavItem className="ml-auto">
          <div className="input_search">
            <form class="form-inline ">
              <input
                class="form-control mr-sm-2 rounded-pill"
                type="search"
                placeholder=""
                aria-label="Search"
              />
              <button class="btn btn-primary " type="submit">
                ค้นหา
              </button>
            </form>
          </div>
        </NavItem>
        <NavLink href="Basket">
          <img className="basket" src={basket} />
        </NavLink>
      </Nav>
    );
  }
}
export default MenuSelect;
