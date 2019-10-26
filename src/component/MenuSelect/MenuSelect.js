import React, { Component } from "react";
import { Nav, NavLink, NavItem } from "reactstrap";
import "./MenuSelect.css";
import basket from "../../imgshop/shopping-basket.png";
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
            <NavLink className="border-right" href="/Delivvery">
              ขั้นตอนการสั่งอาหาร
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="" href="/Delivvery">
              ตรวจสอบสถานะการจัดส่ง
            </NavLink>
          </NavItem>
          <NavItem>
            <div className="input_search">
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
          </NavItem>
          <NavItem>
            <img className="basket" src={basket} />
          </NavItem>
        </Nav>
    );
  }
}
export default MenuSelect;
