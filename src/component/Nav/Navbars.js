import React from "react";
import { Container } from "reactstrap";
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
       
      </Container>
    );
  }
}
export default Navbars;
