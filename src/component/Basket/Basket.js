import React, { Component } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  Input,
  CardText,
  ButtonGroup,
  Row,
  Col
} from "reactstrap";
import "./Basket.css";
import img_gps from "../../imgbasket/confirmation.png";
import img_trash from "../../imgbasket/trash.png";
import BTCount from "./BTCount";
class Basket extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-8">
            <div className="text_basket">อาหารในตะกร้า</div>
            <Card className="card_food">
              <CardHeader>
                <Row>
                  <div>
                    <Col>
                      <Input
                        className="check"
                        addon
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                      />
                    </Col>
                  </div>
                  <Col>
                    <div className="tt_inputfood">ทั้งหมด </div>
                  </Col>
                  <Col>ชื่ออาหาร</Col>
                  <Col>ราคา</Col>
                  <Col>จำนวน</Col>
                  <Col>ราคารวม</Col>
                  <Col>ลบออก</Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <div>
                    <Col>
                      <Input
                        className="check"
                        addon
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                      />
                    </Col>
                  </div>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    <BTCount/>
                  </Col>
                  <Col></Col>
                  <Col>
                    <img className="img_trash" src={img_trash} />
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <div class="row">
                  <div class="col">จำนวนทั้งหมด</div>
                  <div class="col col-lg-2">--</div>
                  <div class="col col-lg-2">ชิ้น</div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div class="col-6 col-md-4 ">
            <div class="card from_money">
              <Card>
                <CardHeader className="text_money">รวมทั้งหมด</CardHeader>
                <CardBody>
                  <CardText className="text_food">จำนวนอาหาร</CardText>
                  <CardText className="tt_food">ราคาอาหารทั้งหมด</CardText>
                  <CardText className="delivery_charge">ค่าจัดส่ง</CardText>
                </CardBody>
                <CardFooter className="tt_money">
                  <div class="row">
                    <div class="col-sm-8"> รวม</div>
                    <div class="col-sm-4">--</div>
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div className="address_customer">
              <Button outline color="info" size="lg" block href="/OrderConfirm">
                <img className="img_gps" src={img_gps} />
                ยืนยันการสั่งซื้อ
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Basket;
