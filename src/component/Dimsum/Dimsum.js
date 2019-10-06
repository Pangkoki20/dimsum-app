import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import dl_pok from "../../imgdimsun/ขนมจีบหมู.png";
import dl_pokegg from "../../imgdimsun/ขนมจีบหมูไข่เค็ม.png";
import dl_poo from "../../imgdimsun/ขนมจีบปู.png";
import dl_shrimp from "../../imgdimsun/ขนมจีบกุ้ง.png";
import dl_hargao from "../../imgdimsun/ฮะเก๋า.png";
import dl_shrimp_dum from "../../imgdimsun/เกี๊ยวกุ้ง.png";
import "./Dimsum.css";
import Paginat from "../Paginat/Paginat";
class Dimsum extends Component {
  render() {
    return (
      <Container>
        <div className="textname-dimsum">ติ่มซำ</div>
        <Table hover className="table-dimsum">
          <thead className="thead-bar">
            <tr>
              <th></th>
              <th>ชื่อติ่มซำ</th>
              <th>ราคา</th>
            
              <th></th>
            </tr>
          </thead>
          <tbody className="tabel-dimsum">
            <tr>
              <th scope="row">
                <img className="dl_pok" src={dl_pok} />
              </th>
              <td>ขนมจีบหมู</td>
              <td>20.-</td>
             
              <td>
                <Button outline color="danger" className="btn-basket">
                  เพิ่มลงในตะกร้า
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <img className="dl_pokegg" src={dl_pokegg} />
              </th>
              <td>ขนมจีบหมูไข่เค็ม</td>
              <td>20.-</td>
             
              <td>
                <Button outline color="danger" className="btn-basket">
                  เพิ่มลงในตะกร้า
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <img className="dl_poo" src={dl_poo} />
              </th>
              <td>ขนมจีบปู</td>
              <td>20.-</td>
              
              <td>
                <Button outline color="danger" className="btn-basket">
                  เพิ่มลงในตะกร้า
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <img className="dl_shrimp" src={dl_shrimp} />
              </th>
              <td>ขนมจีบกุ้ง</td>
              <td>20.-</td>
              
              <td>
                <Button outline color="danger" className="btn-basket">
                  เพิ่มลงในตะกร้า
                </Button>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <img className="dl_hargao" src={dl_hargao} />
              </th>
              <td>ฮะเก๋า</td>
              <td>20.-</td>
              
              <td>
                <Button outline color="danger" className="btn-basket">
                  เพิ่มลงในตะกร้า
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <img className="dl_shrimp_dum" src={dl_shrimp_dum} />
              </th>
              <td>เกี๊ยวกุ้ง</td>
              <td>20.-</td>
           
              <td>
                <Button outline color="danger" className="btn-basket">
                  เพิ่มลงในตะกร้า
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Paginat />
      </Container>
    );
  }
}
export default Dimsum;
