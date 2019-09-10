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
          <Pic />
         <MenuSelect/>
        </div>

      </Container>
    );
  }
}
