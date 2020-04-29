import React, { Component } from "react";
import { Container, FormGroup, Label, Col, Input } from "reactstrap";
import "./Status.css";
class Status extends Component {
  render() {
    return (
      <Container>
        <div className="formStatus">เพิ่มสถานะการจัดส่ง</div>
        <div className="fontStatus">
          <FormGroup row>
            <Label for="exampleSelectMulti" sm={2}>
              สถานะการจัดส่ง
            </Label>
            <Col sm={10}>
              <Input type="select" name="select" id="exampleSelect">
                - - เลือกสถานะการจัดส่ง - -<option>สั่งอาหารแล้ว</option>
                <option>ได้รับรายการอาหารแล้ว</option>
                <option>อาหารของคุณพร้อมส่ง</option>
                <option>คุณได้รับอาหารแล้ว</option>
              </Input>
            </Col>
          </FormGroup>
        </div>
      </Container>
    );
  }
}
export default Status;
