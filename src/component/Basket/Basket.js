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
  CardText
} from "reactstrap";
import "./Basket.css";
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
              </thead>
              <tbody>
               
              </tbody>
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
          </div>
        </div>
      </div>
    );
  }
}
export default Basket;
