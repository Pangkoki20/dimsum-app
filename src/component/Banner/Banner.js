import React from "react";
import Pic from "./Pic";
import "./Banner.css";
import { Container, Button } from "reactstrap";
import img_home from "../../img/dim.png";
// import MenuSelect from "../MenuSelect/MenuSelect";

export default class Banner extends React.Component {
  render() {
    return (
      <Container>
        <div className="ban-size">
          <div className="pic_hargao">
            <img src={img_home} className="img_home img-fluid " />
          </div>
          {/* <div>
            <Pic />
          </div> */}
        </div>
        <div className="bt_startfood">
          <Button outline color="primary" size="lg" block href="/Menu">
            <div className="fon_btstfood">เริ่มสั่งอาหาร</div>
          </Button>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}
