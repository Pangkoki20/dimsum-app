import React, { Component } from "react";
import {
  Container,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
class Confirm extends Component {
  render() {
    return (
      <Container>
        <div >
          <Card className="from_payment">
            <CardHeader>ยืนยันการสั่งอาหาร</CardHeader>
            <CardBody>
              
            </CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
      </Container>
    );
  }
}
export default Confirm;
