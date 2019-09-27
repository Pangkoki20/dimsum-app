import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Collapses.css";
import address from "../../img/address.png";

class Collapses extends Component {
  render() {
    return (
      <Container>
        <div className="col-con ">
          <div class="row ">
            <div class="col-8 border border-primary">
            <img className="address" src={address }/>
            </div>
            <div class="col-4">col-4</div>
          </div>
        </div>
      </Container>
    );
  }
}
export default Collapses;
