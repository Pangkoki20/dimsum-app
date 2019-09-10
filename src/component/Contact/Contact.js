import React, { Component } from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import "./Contact.css";
import piccon from "../../img/contacttt.png";
import Collapses from "./Collapse/Collapses";
class Contact extends Component {
  render() {
    return (
      <div className="foo">
        <span>
          <img className="piccon" src={piccon} />
        </span>
        <Container>
          <Collapses/>
        </Container>
      </div>
    );
  }
}
export default Contact;
