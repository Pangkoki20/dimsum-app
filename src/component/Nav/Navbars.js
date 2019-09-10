import React ,{Component} from "react";
import { Container,Row, Col  } from "reactstrap";
import nm from "../../img/text-lines.png";
import ts from "../../img/dimsum(2).png";
import bf from "../../img/croissant.png";
import ff from "../../img/fried-rice.png";
import drink from "../../img/iced-tea.png";

class Navbars extends Component {
  render() {
    return (
      <Container>
  <div class="row cont-row">
            <div class="col">
              <span>
                <img className="nm" src={nm} />
                เมนูแนะนำ     
              </span>
            </div>
            <div class="col">
              <span>
                <img className="ts" src={ts} />
                ติ่มซำ
              </span>
            </div>
            <div class="col">
              <span>
                <img className="bf" src={bf} />
                อาหารเช้า
              </span>
            </div>
            <div class="col">
              <span>
                <img className="ff" src={ff} />
                อาหารจานเดียว 
              </span>
            </div>
            <div class="col">
              <span>
                <img className="drink" src={drink} />
                เครื่องดื่ม
              </span>
            </div>
            </Container>
          </div>
}
