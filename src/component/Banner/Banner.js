import React from "react";
import Pic from "./Pic";
import "./Banner.css";
import { Container, Button } from "reactstrap";

export default class Banner extends React.Component {
  render() {
    return (
      <Container>
        <div className="ban-size">
          <Pic />
        </div>
      </Container>
    );
  }
}
