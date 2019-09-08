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
          <Button outline color="info" className="text" href="/Menu">
            <h3>เริ่มสั่งอาหาร</h3>
          </Button>
        </div>
      </Container>
    );
  }
}
