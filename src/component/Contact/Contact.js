import React, { Component } from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import "./Contact.css";
import piccon from "../../img/contacttt.png";
import Collapses from "./Collapse/Collapses";
class Contact extends Component {
  render() {
    return (
      <Container className="contact">
        <div className="foo">
          <span>
            <img className="piccon" src={piccon} />
          </span>
          <Collapses />
        </div>
      </Container>
    );
  }
}
export default Contact;
