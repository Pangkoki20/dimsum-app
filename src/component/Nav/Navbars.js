import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Nav.css";
class Navbars extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Container>
        <h2 className="me">✧ เริ่มสั่งอาหาร ✧</h2>
        
      

      </Container>
    );
  }
}
export default Navbars;
