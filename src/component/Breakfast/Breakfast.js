import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import bf_bf from "../../imgbreakfast/อาหารเช้า.png";
import bf_egg from "../../imgbreakfast/ไข่กะทะ.png";
import bf_fish from "../../imgbreakfast/ปลาทิพย์ทอด.png";
import bf_shrimp from "../../imgbreakfast/กุ้งชุบแป้งทอด.png";
import "./Breakfast.css";
class Breakfast extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="textname-breakfast">อาหารเช้า</div>
          <Table hover className="table-breakfast">
            <thead className="thead-bar">
              <tr>
                <th></th>
                <th>ชื่ออาหารเช้า</th>
                <th>ราคา</th>
                <th>จำนวน</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="tabel-breakfast">
              <tr>
                <th scope="row">
                  <img className="bf_bf" src={bf_bf} />
                </th>
                <td>ชุดอาหารเช้า</td>
                <td>40.-</td>
                <td>@mdo</td>
                <td>
                  <Button outline color="danger" className="btn-basket">
                    เพิ่มลงในตะกร้า
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img className="bf_egg" src={bf_egg} />
                </th>
                <td>ไข่กะทะ</td>
                <td>40.-</td>
                <td>@fat</td>
                <td>
                  <Button outline color="danger" className="btn-basket">
                    เพิ่มลงในตะกร้า
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img className="bf_fish" src={bf_fish} />
                </th>
                <td>ปลาทิพย์ทอด</td>
                <td>40.-</td>
                <td>@twitter</td>
                <td>
                  <Button outline color="danger" className="btn-basket">
                    เพิ่มลงในตะกร้า
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img className="bf_shrimp" src={bf_shrimp} />
                </th>
                <td>กุ้งชุบแป้งทอด</td>
                <td>40.-</td>
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
export default Breakfast;
