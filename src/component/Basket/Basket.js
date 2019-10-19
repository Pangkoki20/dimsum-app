import React, { Component } from "react";
import {
  Container,
  Table,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  ButtonGroup
} from "reactstrap";
import "./Basket.css";
import img_gps from "../../imgbasket/navigation.png"
class Basket extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-8">
            <div className="text_basket">อาหารในตะกร้า</div>
            <Table className="table-basket">
              <thead>
                <tr>
                  <th>อาหาร</th>
                  <th>ราคา(ชิ้น)</th>
                  <th>จำนวน</th>
                  <th>ราคา</th>
                </tr>
                <tr className="body">
                  <td className="item">อาหาร</td>
                  <td className="price_item">ราคา(ชิ้น)</td>
                  <td className="add_remove">
                    <div>
                      <ButtonGroup className="" size="lg">
                        <Button className="btn-outline-secondary btn btn-ligh bt_addremove">
                          -
                        </Button>
                        <Button className="btn-outline-secondary btn btn-ligh bt_addremove">
                          1
                        </Button>
                        <Button className="btn-outline-secondary btn btn-ligh bt_addremove">
                          +
                        </Button>
                      </ButtonGroup>
                    </div>
                  </td>
                  <td className="total_item">ราคา</td>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
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
                <CardFooter className="tt_money">รวม</CardFooter>
              </Card>
            </div>
            <div className="address_customer">
              <Button outline color="info" size="lg" block>
                <img className="img_gps" src={img_gps} />
                ที่อยู่สำหรับการจัดส่ง
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Basket;
