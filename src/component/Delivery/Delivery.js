import React, { Component } from "react";
import {
  Card,
  Row,
  Col
} from "reactstrap";
import "./Delivery.css";
import MenuSelect from "../MenuSelect/MenuSelect";
import img_menu from "../../imgdelivery/menu.png";
import img_meal from "../../imgdelivery/meal.png";
import img_product from "../../imgdelivery/product2.png";
import img_delivery from "../../imgdelivery/delivery.png";
import img_breakfast from "../../imgdelivery/breakfast.png";
import img_foodorder from "../../imgdelivery/dish.png";
class Delivery extends Component {
  render() {
    return (
      <div>
        <MenuSelect />
        <div className="container-fluid">
          <div className="text_status">ติดตามสถานะการจัดส่ง</div>
          <div className="from_status">
            <Row>
              <Col className="frame_status">
                <Card body className="border border-warning rounded">
                  <div>
                    <img
                      className="img_foodorder img-fluid"
                      src={img_foodorder}
                    />
                  </div>
                  <div className="font_status">สั่งอาหารแล้ว</div>
                </Card>
              </Col>
              <Col className="frame_status">
                <Card body className="border border-warning rounded">
                  <div>
                    <img className="img_menu img-fluid" src={img_menu} />
                  </div>
                  <div className="font_status">ได้รับรายการอาหารแล้ว</div>
                </Card>
              </Col>
              <Col className="frame_status">
                <Card body className="border border-warning rounded">
                  <div>
                    <img className="img_meal img-fluid" src={img_meal} />
                  </div>
                  <div className="font_status">กำลังจัดเตรียมอาหาร</div>
                </Card>
              </Col>
              <Col className="frame_status">
                <Card body className="border border-warning rounded">
                  <div>
                    <img className="img_product img-fluid" src={img_product} />
                  </div>
                  <div className="font_status">อาหารของคุณพร้อมส่ง</div>
                </Card>
              </Col>
              <Col className="frame_status">
                <Card body className="border border-warning rounded">
                  <div>
                    <img
                      className="img_delivery img-fluid"
                      src={img_delivery}
                    />
                  </div>
                  <div className="font_status">อาหารกำลังจัดส่ง</div>
                </Card>
              </Col>
              <Col className="frame_status">
                <Card body className="border border-warning rounded">
                  <div>
                    <img
                      className="img_breakfast img-fluid"
                      src={img_breakfast}
                    />
                  </div>
                  <div className="font_status">คุณได้รับอาหารแล้ว</div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default Delivery;
