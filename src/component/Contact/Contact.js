import React, { Component } from "react";
import { Container } from "reactstrap";
import "./Contact.css";
import Collapses from "../Collapses/Collapses";
import piccon from "../../img/customer.png";
import axios from "axios";
class Contact extends Component {
  state = {
    user: null,
  };
  onUserChanged = (user) => {
    this.setState({ user });
  };
  componentDidMount = async (nextProps) => {
    let token = localStorage.getItem("token");
    if (token) {
      if (token !== null) {
        this.setState({ check: "login" });
      }
      let res = await axios.post(`http://localhost:3001/api/users/me`, {
        token,
      });
      // if (!res) {
      //   window.location.href = "/login";
      //   return;
      // }
      this.setState({ user: res.data });
    } else {
      window.location.href = "/login";
    }
  };
  render() {
    return (
      <Container>
        <div className="foo">
          <span>
            <img className="piccon" src={piccon} alt="" />
          </span>
          <div className="text-cont"> Contact Us </div>
          <Collapses />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}
export default Contact;
