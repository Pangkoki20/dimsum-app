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
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
      </Container>
    );
  }
}
export default Confirm;
