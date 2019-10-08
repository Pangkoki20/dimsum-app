import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import nm from "../../img/text-lines.png";
import ts from "../../img/dimsum(2).png";
import bf from "../../img/croissant.png";
import ff from "../../img/fried-rice.png";
import drink from "../../img/iced-tea.png";
import "./MenuSelect.css";

class MenuSelect extends Component {
  render() {
    return (
      <Container className="cont-row">
        <div class="row">
          <div class="col">
            <span className="imgnav">
              <a href="/Menu">
                <img className="nm" src={nm} />
              </a>
              <h6 className="text-nm">เมนูแนะนำ</h6>
            </span>
          </div>
          <div class="col">
            <span className="imgnav">
              <a href="/Dimsum">
                <img className="ts" src={ts} />
              </a>
              <h6 className="text-ts">ติ่มซำ</h6>
            </span>
          </div>
          <div class="col">
            <span className="imgnav">
              <a href="/Breakfast">
                <img className="bf" src={bf} />
              </a>
              <h6 className="text-bf">อาหารเช้า</h6>
            </span>
          </div>
          <div class="col">
            <span className="imgnav">
              <a href="/Fastfood">
                <img className="ff" src={ff} />
              </a>
              <h6 className="text-ff">อาหารจานเดียว</h6>
            </span>
          </div>
          <div class="col">
            <span className="imgnav">
              <a href="/Drink">
                <img className="drink" src={drink} />
              </a>
              <h6 className="text-drink">เครื่องดื่ม</h6>
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </Container>
    );
  }
}
export default MenuSelect;
