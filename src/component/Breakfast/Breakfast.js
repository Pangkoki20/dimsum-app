import React, { Component } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";
import Banner from "../Banner/Banner";
import "./Breakfast";

class Breakfast extends Component {
  render() {
    return (
      <div>
        <Banner />
        
        <CardSubtitle>
          <Card>
            <CardImg
              top
              width="20%"
              src="http://www.frozenfoodsb2b.com/th/productpic/pb_qtqx1413880427.jpg"
              alt=""
            />
            <CardBody>
              <CardTitle>
                <h5>เต้าหู้ปลา</h5>
              </CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText> */}
              <Button outline color="danger">
                สั่งอาหาร
              </Button>
            </CardBody>
          </Card>
        </CardSubtitle>
      </div>
    );
  }
}
export default Breakfast;
