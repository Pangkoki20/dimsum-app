import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  button,
  Row,
  Col,
  Container
} from "reactstrap";
import "./Menu.css";
import Banner from "../Banner/Banner";
class Menu extends Component {
  // state = {
  //   menu: [
  //     {
  //       name: "ขนมจีบหมู",
  //       description: "asdqwqwdqwdqwd",
  //       price: 62,
  //       img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
  //     },
  //     {
  //       name: "ขนมจีบหมู",
  //       description: "asdqwqwdqwdqwd",
  //       price: 62,
  //       img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
  //     }
  //   ]
  // };
  // renderMenu = () => {
  //   return this.state.menu.map((menu, index) => (
  //     <Col xs="6" className="cardd Container">
  //       <Card body className="pic-card">
  //         <Row>
  //           <Col className="">
  //             <img top width="100%" src={menu.img} className="imgSelect" />
  //           </Col>
  //           <Col>
  //             <CardTitle>
  //               <h3 className="font-name">
  //                 <b>{menu.name}</b>
  //               </h3>
  //             </CardTitle>
  //             <CardText>{menu.description}</CardText>
  //             <CardText>{menu.price}</CardText>
  //             <button class="btn btn-outline-danger ">หยิบใส่ตะกร้า</button>
  //           </Col>
  //         </Row>
  //       </Card>
  //     </Col>
  //   ));
  // };
  render() {
    return (
      <div className="menuu">
        <Banner />
        <Container>
          {/* <Row>{this.renderMenu()}</Row> */}
          <div className="text-com">Comming soon ... </div>
        </Container>
      </div>
    );
  }
}
export default Menu;
