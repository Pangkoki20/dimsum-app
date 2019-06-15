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
import "./Dimsum.css";

class Dimsum extends Component {
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
          <Card>
            <CardImg
              className=".img"
              src="https://www.cpfreshmartshop.com/wp-content/uploads/2017/12/51024642_%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%9E%E0%B8%A5%E0%B8%9F%E0%B8%B9%E0%B9%89%E0%B8%94%E0%B8%AA%E0%B9%8C-%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%88%E0%B8%B5%E0%B8%9A%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87-192-%E0%B8%81%E0%B8%A3%E0%B8%B1%E0%B8%A1f.jpg"
              alt=""
            />
            <CardBody>
              <CardTitle>
                <h5>ขนมจีบ</h5>
              </CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText> */}
              <Button outline color="danger">
                สั่งอาหาร
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              src="https://www.cpfreshmartshop.com/wp-content/uploads/2017/12/51005909_%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%94%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B9%89%E0%B8%AD%E0%B8%99-%E0%B8%AE%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B9%8B%E0%B8%B2%E0%B9%84%E0%B8%AA%E0%B9%89%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87-18-%E0%B8%81%E0%B8%A3%E0%B8%B1%E0%B8%A1-%E0%B9%81%E0%B8%9E%E0%B9%87%E0%B8%81-12-%E0%B8%8A%E0%B8%B4%E0%B9%89%E0%B8%99.jpg"
              alt=""
            />
            <CardBody>
              <CardTitle>
                <h5>ฮะเก๋า</h5>
              </CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText> */}
              <Button outline color="danger">
                สั่งอาหาร
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/64707281_2096853913775110_3823324859778203648_n.jpg?_nc_cat=111&_nc_eui2=AeFOPjYr2KbxGk1XzzQz541E_CLI0RGTFZWeMf5LDkVNodeus0HtImyVWZKXSAgsn6VPCZvh9J7_-oDIAUPfEKl_I6q0FFpxiRm6dZ0VaM408A&_nc_oc=AQmXrnkOda8DWyaBt86cV0Yifj1aCi1Ex5C2EDOkWGUUSzSrzfdOyjcHHhIg4j4lf00&_nc_ht=scontent.fbkk5-3.fna&oh=304e77c50aaa861496298d4791b6b07a&oe=5D90A640"
              alt=""
            />
            <CardBody>
              <CardTitle>
                <h5>เกี๊ยวกุ้ง</h5>
              </CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
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
export default Dimsum;
