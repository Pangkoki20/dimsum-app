import React from "react";
import Pic from "./Pic";
import "./Banner.css";
import { Container, Button } from "reactstrap";
import MenuSelect from "../MenuSelect/MenuSelect";

export default class Banner extends React.Component {
  render() {
    return (
      <Container>
        <div className="ban-size">
          <div>
            <Pic />
          </div>
          <div>
            <Button
              className="bt_startfood rounded-lg"
              color="danger"
              size="lg" href="/Menu"
            >
              เริ่มสั่งอาหาร
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}
