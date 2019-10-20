import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import "./BTHome.css";
class BTHome extends Component {
  render() {
    return (
      <div>
        <Container className="bt_home">
          <Button outline color="primary" size="lg" href="/">
            หน้าแรก
          </Button>
        </Container>
      </div>
    );
  }
}
export default BTHome;
