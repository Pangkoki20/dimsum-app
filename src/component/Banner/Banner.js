import React from "react";
import Pic from "./Pic";
import Nav from "../Nav/Navbars";
import "./Banner.css";
import { Container } from "reactstrap";

export default class Banner extends React.Component {
  render() {
    return (
      <Container>
        <div className="ban-size">
          <Pic />
        </div>
        <Nav />
        
      </Container>
    );
  }
}
