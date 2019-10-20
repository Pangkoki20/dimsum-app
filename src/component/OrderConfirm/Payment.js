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
import OrderConfirm from "./OrderConfirm";
class Payment extends Component {
  render() {
    return (
      <Container>
        {/* <OrderConfirm /> */}
        <div>
          <Card>
            <CardHeader>Header</CardHeader>
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
export default Payment;
