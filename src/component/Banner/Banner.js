import React from "react";
import Pic from "./Pic";
import "./Banner.css";
import { Container, Button } from "reactstrap";
import img_home from "../../img/Home.png";
import MenuSelect from "../MenuSelect/MenuSelect";

export default class Banner extends React.Component {
  render() {
    return (
      <Container>
        <div className="ban-size">
          <div className="pic_hargao">
            <img className="img_home img-fluid " src={img_home} />
          </div>
          {/* <div>
            <Pic />
          </div> */}
        </div>
        <div className="bt_startfood">
          <Button
            className=" rounded-lg rounded-pill"
            color="info"
            size="lg"
            href="/Menu"
          >
            เริ่มสั่งอาหาร
          </Button>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}
