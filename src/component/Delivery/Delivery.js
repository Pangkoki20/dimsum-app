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
class Delivery extends Component {
  render() {
    return (
      <div>
        <MenuSelect />
        <div className="container-fluid">
          <div className="text_status">สถานะการจัดส่ง</div>
          <div className="from_status">
            <Row>
              <Col>
                <Card body className="border border-warning rounded">
                  <div>
                    <img className="img_menu img-fluid" src={img_menu} />
                  </div>
                  <div className="font_status">ร้านได้รับรายการอาหารแล้ว</div>
                </Card>
              </Col>
              <Col>
                <Card body className="border border-warning rounded">
                  <div>
                    <img className="img_meal img-fluid" src={img_meal} />
                  </div>
                  <div className="font_status">กำลังเตรียมอาหารแล้ว</div>
                </Card>
              </Col>
              <Col>
                <Card body className="border border-warning rounded">
                  <div>
                    <img className="img_product img-fluid" src={img_product} />
                  </div>
                  <div className="font_status">อาหารของคุณพร้อมส่งถึงคุณ</div>
                </Card>
              </Col>
              <Col>
                <Card body className="border border-warning rounded">
                  <div>
                    <img
                      className="img_delivery img-fluid"
                      src={img_delivery}
                    />
                  </div>
                  <div className="font_status">อาหารกำลังไปส่งถึงคุณ</div>
                </Card>
              </Col>
              <Col>
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
