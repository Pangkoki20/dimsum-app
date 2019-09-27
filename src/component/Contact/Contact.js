import React, { Component } from "react";
import { Container } from "reactstrap";
import "./Contact.css";
import Collapses from "../Collapses/Collapses";
import piccon from "../../img/customer.png";
class Contact extends Component {
  render() {
    return (
      <Container>
        <div className="foo">
          <span>
            <img className="piccon" src={piccon} />
          </span>
          <div className="text-cont"> Contact Us </div>
         {/* <Collapses/> */}
         </div>
       
      </Container>
    );
  }
}
export default Contact;
