import React, { Component } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col,
  Badge
} from "reactstrap";
import Banner from "../Banner/Banner";
import "./Breakfast";

class Breakfast extends Component {
  render() {
    return (
      <Container>
        <div>
          <Banner />
          <Row className="menu">
            <Col>
              <Card>
                <CardImg
                  className="card"
                  src="http://www.breakfast4health.org/wp-content/uploads/2018/09/breakfast.jpg"
                  alt=""
                />
                <CardBody>
                  <CardTitle>
                    <h5>อาหารเช้า</h5>
                  </CardTitle>
                  {/* <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText> */}
                  <Button color="danger">สั่งอาหาร</Button>
                </CardBody>
              </Card>
            </Col>

            <Col>
              <Card>
                <CardImg
                  className="card"
                  src="http://food.mthai.com/app/uploads/2014/12/iStock-613888570.jpg"
                  alt=""
                />
                <CardBody>
                  <CardTitle>
                    <h5>ไข่กะทะ</h5>
                  </CardTitle>
                  {/* <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText> */}
                  <Button color="danger">สั่งอาหาร</Button>
                </CardBody>
              </Card>
            </Col>

            <Col>
              <Card>
                <CardImg
                  className="card"
                  src="http://www.thaitechno.net//uploadedimages/c1/Product_35813_563782357_fullsize.jpg"
                  alt=""
                />
                <CardBody>
                  <CardTitle>
                    <h5>ปลาทิพย์ทอด</h5>
                  </CardTitle>
                  {/* <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText> */}
                  <Button color="danger">สั่งอาหาร</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
export default Breakfast;
