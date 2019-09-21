import React, { Component } from "react";
import { Container } from "reactstrap";
import "./Contact.css";
import piccon from "../../img/customer.png";
import Collapses from "./Collapse/Collapses";
class Contact extends Component {
  render() {
    return (
      <Container>
        <div className="foo">
          <span>
            <img className="piccon" src={piccon} />
          </span>
          <div className="text-cont"> Contact Us </div>
        </div>
      </Container>
    );
  }
}
export default Contact;
