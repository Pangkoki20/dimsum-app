import React, { Component } from "react";
import {
  Container,
  Card,
  Button,
  CardHeader,
  CardBody
} from "reactstrap";
import "./Address.css";
class Address extends Component {
  render() {
    return (
      <div className="Container">
        <Card className="from_address">
          <CardHeader className="text_address">
            ที่อยู่สำหรับการจัดส่ง
          </CardHeader>
          <CardBody className="bt_address">
            <Button color="danger" className="text_btaddress">
              ค้นหาตำแหน่งที่อยู่ของคุณ
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default Address;
