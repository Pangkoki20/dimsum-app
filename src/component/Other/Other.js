import React, { Component } from "react";
import { Container } from "reactstrap";
import Banner from "../Banner/Banner";
import "./Other.css";

class Other extends Component {
  render() {
    return (
      <Container>
        <div>
          <Banner />
          <div className="text-com">Comming soon ... </div>
        </div>
      </Container>
    );
  }
}
export default Other;
