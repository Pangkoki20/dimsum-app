import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import ff_chicken from "../../imgfastfoood/ข้าวมันไก่.png";
import ff_redpork from "../../imgfastfoood/ข้าวหมูแดง.png";
import ff_crispypork from "../../imgfastfoood/ข้าวหมูกรอบ.png";
import ff_porkleg from "../../imgfastfoood/ข้าวขาหมู.png";
import ff_duck from "../../imgfastfoood/ข้าวหน้าเป็ด.png";
import ff_babutte from "../../imgfastfoood/บะกุ๊ดเต๋.png";
import ff_rice from "../../imgfastfoood/ข้าวเปล่า.png";
import "./Fastfood.css";
class Fastfood extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="textname-fastfood">อาหารจานเดียว</div>
          <Table hover className="table-fastfood">
            <thead className="thead-bar">
              <tr>
                <th></th>
                <th>ชื่ออาหาร</th>
                <th>ราคา</th>
                <th>จำนวน</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="tabel-fastfood">
              <tr>
                <th scope="row">
                  <img className="ff_chicken" src={ff_chicken} />
                </th>
                <td>ข้าวมันไก่</td>
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
                  <img className="ff_redpork" src={ff_redpork} />
                </th>
                <td>ข้าวหมูแดง</td>
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
                  <img className="ff_crispypork" src={ff_crispypork} />
                </th>
                <td>ข้าวหมูกรอบ</td>
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
                  <img className="ff_porkleg" src={ff_porkleg} />
                </th>
                <td>ข้าวขาหมู</td>
                <td>50.-</td>
                <td>@twitter</td>
                <td>
                  <Button outline color="danger" className="btn-basket">
                    เพิ่มลงในตะกร้า
                  </Button>
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <img className="ff_duck" src={ff_duck} />
                </th>
                <td>ข้าวหน้าเป็ด</td>
                <td>50.-</td>
                <td>@twitter</td>
                <td>
                  <Button outline color="danger" className="btn-basket">
                    เพิ่มลงในตะกร้า
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img className="ff_babutte" src={ff_babutte} />
                </th>
                <td>บะกุ๊ดเต๋</td>
                <td>50.-</td>
                <td>@twitter</td>
                <td>
                  <Button outline color="danger" className="btn-basket">
                    เพิ่มลงในตะกร้า
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img className="ff_rice" src={ff_rice} />
                </th>
                <td>ข้าวเปล่า</td>
                <td>10.-</td>
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
export default Fastfood;
