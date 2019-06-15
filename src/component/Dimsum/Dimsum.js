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
import "./Dimsum.css";

class Dimsum extends Component {
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
            </Col>

            <Col>
              <Card>
                <CardImg
                  className="card"
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
            </Col>

            <Col>
              <Card>
                <CardImg
                  className="card"
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
            </Col>
          </Row>

          <Row className="menu">
            <Col>
              <Card>
                <CardImg
                  className="card"
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
            </Col>

            <Col>
              <Card>
                <CardImg
                  className="card"
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
            </Col>

            <Col>
              <Card>
                <CardImg
                  className="card"
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
            </Col>
          </Row>

          <Row className="menu">
            <Col>
              <Card>
                <CardImg
                  className="card"
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
            </Col>

            <Col>
              <Card>
                <CardImg
                  className="card"
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
            </Col>

            <Col>
              <Card>
                <CardImg
                  className="card"
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
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
export default Dimsum;
