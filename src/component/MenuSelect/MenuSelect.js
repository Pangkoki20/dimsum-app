import React, { Component } from "react";
import { Nav, NavLink, NavItem, Badge } from "reactstrap";
import "./MenuSelect.css";
import basket from "../../imgshop/shopping-basket.png";
import "../Basket/Basket";
import axios from "axios";
import auth from "../service/index";
class MenuSelect extends Component {
  state = {
    order: []
  };

  // componentDidMount = async nextProps => {
  //   let token = localStorage.getItem("token");
  //   if (token) {
  //     if (token !== null) {
  //       this.setState({ check: "login" });
  //     }
  //     let res = await axios.post(`http://localhost:3001/api/users/me`, {
  //       token
  //     });
  //     // if (!res) {
  //     //   window.location.href = "/login";
  //     //   return;
  //     // }
  //     this.setState({ user: res.data.role });
  //   } else {
  //     window.location.href = "/login";
  //   }
  // };
  componentDidMount() {
    let user = auth.getToken();
    let userDecoded = auth.decodeToken(user);
    let uRole = userDecoded.role;
    this.setState({ user: uRole });
  }
  render() {
    const { numberOnBucket } = this.props;
    console.log({ numberOnBucket });
    return (
      <div>
        {this.state.user === "user" ? (
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
            <NavLink className="from_basket" href="Basket">
              <div className="text_numorder">
                <img className="basket" src={basket} />
                <span className="badge-danger badge-pill ">
                  {numberOnBucket}
                </span>
              </div>
            </NavLink>
          </Nav>
        ) : (
          ""
        )}
        {this.state.user === "admin" ? (
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
            <NavLink className="from_basket" href="Basket">
              <div className="text_numorder">
                <img className="basket" src={basket} />
                <span className="badge-danger badge-pill ">
                  {numberOnBucket}
                </span>
              </div>
            </NavLink>
          </Nav>
        ) : (
          ""
        )}
        {this.state.user === "kitchen" ? (
          <Nav className="from_menusel">
            <NavItem>
              <NavLink className="" href="/ListUser">
                รายการอาหารที่เข้ามา
              </NavLink>
            </NavItem>
            {/* <NavItem className="ml-auto">
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
            <NavLink href="Basket">
              <img className="basket" src={basket} />
              <span class="badge badge-danger badge-pill">
                {numberOnBucket}
              </span>
            </NavLink> */}
          </Nav>
        ) : (
          ""
        )}
        {this.state.user === "sender" ? (
          <Nav className="from_menusel">
            <NavLink href="/SenderStatus">อาหารพร้อมส่ง</NavLink>
          </Nav>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default MenuSelect;
