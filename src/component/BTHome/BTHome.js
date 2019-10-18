import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import "./BTHome.css";
import bt_home from "../../imghome/home.png";
class BTHome extends Component {
  render() {
    return (
      <div>
        <Container className="bt_home">
          <Button color="secondary" size="lg" href="/">
            หน้าแรก
          </Button>
        </Container>
      </div>
    );
  }
}
export default BTHome;
