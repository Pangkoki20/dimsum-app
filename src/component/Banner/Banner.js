import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import "./Banner.css";

const items = [
  {
    src: "http://f.ptcdn.info/006/035/000/1441040062-22-o.jpg",
    altText: "",
    caption: "",
    header: ""
  },
  {
    src:
      "https://img.wongnai.com/p/1968x0/2018/04/03/4afe13b527544c44bd677fc2c4f4a854.jpg",
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: "http://f.ptcdn.info/006/035/000/1441040119-26-o.jpg",
    altText: "",
    caption: "",
    header: ""
  }
];
export default class Banner extends React.Component {
  render() {
    return (
      <div className="ban-size">
        <UncontrolledCarousel items={items} className="" />
        <div>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="">
                เมนูแนะนำ
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Dimsum">
                ติ่มซำ
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Breakfast">
                อาหารเช้า
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="Fastfood">
                อาหารจานเดียว
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="Drink">
                เครื่องดื่ม
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="Delivery">
                สถานะการจัดส่ง
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="Contact">
                ติดต่อเรา
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
