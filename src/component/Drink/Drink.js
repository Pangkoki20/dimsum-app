import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import gt from "../../imgdrink/ชาเย็นนน.png";
import chadum from "../../imgdrink/ชาดำเย็น.png";
import chamanow from "../../imgdrink/ชามะนาว.png";
import coffee from "../../imgdrink/กาแฟเย็น.png";
import ovantin from "../../imgdrink/โอวัลติน.png";
import greentea from "../../imgdrink/ชาเขียว.png";
import "./Drink.css";
class Drink extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="textname-drink">เครื่องดื่ม</div>
          <Table hover className="table-drink">
            <thead className="thead-bar">
              <tr>
                <th></th>
                <th>ชื่อเครื่องดื่ม</th>
                <th>ราคา</th>
                <th>จำนวน</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="tabel-drink">
              <tr>
                <th scope="row">
                  <img className="gt" src={gt} />
                </th>
                <td>ชาเย็น</td>
                <td>30.-</td>
                <td>@mdo</td>
                <td>
                  <Button outline color="danger" className="btn-basket">
                    เพิ่มลงในตะกร้า
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img className="chadum" src={chadum} />
                </th>
                <td>ชาดำเย็น</td>
                <td>30.-</td>
                <td>@fat</td>
                <td>
                  <Button outline color="danger" className="btn-basket">
                    เพิ่มลงในตะกร้า
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img className="coffee" src={coffee} />
                </th>
                <td>กาแฟเย็น</td>
                <td>30.-</td>
                <td>@twitter</td>
                <td>
                  <Button outline color="danger" className="btn-basket">
                    เพิ่มลงในตะกร้า
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img className="chamanow" src={chamanow} />
                </th>
                <td>ชามะนาว</td>
                <td>30.-</td>
                <td>@twitter</td>
                <td>
                  <Button outline color="danger" className="btn-basket">
                    เพิ่มลงในตะกร้า
                  </Button>
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <img className="ovantin" src={ovantin} />
                </th>
                <td>โอวัลตินเย็น</td>
                <td>30.-</td>
                <td>@twitter</td>
                <td>
                  <Button outline color="danger" className="btn-basket">
                    เพิ่มลงในตะกร้า
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img className="greentea" src={greentea} />
                </th>
                <td>ชาเขียวนมเย็น</td>
                <td>30.-</td>
                <td>@twitter</td>
                <td>
                  <Button outline color="danger" className="btn-basket">
                    เพิ่มลงในตะกร้า
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
export default Drink;
