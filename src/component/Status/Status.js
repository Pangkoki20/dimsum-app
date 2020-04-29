import React, { Component } from "react";
import { Container, FormGroup, Label, Col, Input, Button } from "reactstrap";
import axios from "axios";
import "./Status.css";
class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({ message: "" });
    console.log({ [name]: value });
  };
  statusName = (e) => {
    e.preventDefault();
    try {
      const data = {
        status: this.state.status,
      };
      axios.post(`http://localhost:3001/api/status`, data).then((res) => {
        const { data } = res;
        this.setState({ message: data.message });
      });
    } catch (error) {}
  };
  render() {
    const { status } = this.state;
    return (
      <Container>
        <div className="formStatus">เพิ่มสถานะการจัดส่ง</div>
        <div onSubmit={this.statusName}>
          <FormGroup row className="formGroupStatus">
            <Label for="exampleSelectMulti" sm={2} className="fromChoiceStatus">
              สถานะการจัดส่ง
            </Label>

            <Col xs="6">
              <Input
                className="inputStatus"
                type="text"
                name="status"
                value={status}
                placeholder="ป้อนสถานะ"
                onChange={this.handleInputChange}
                required
              />
            </Col>
            <Button
              className="btAddStatus"
              color="info"
              size="sm"
              onClick={(e) => this.statusName(e)}
            >
              เพิ่ม
            </Button>
          </FormGroup>
        </div>
      </Container>
    );
  }
}
export default Status;
