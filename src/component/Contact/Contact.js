import React, { Component } from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import "./Contact.css";
import tel from "../../img/mobile-phone.png";
import line from "../../img/line(2).png";
import face from "../../img/facebook(1).png";
import piccon from "../../img/contacttt.png";
class Contact extends Component {
  render() {
    return (
      <div className="foo">
        <span>
          <img className="piccon" src={piccon} />
        </span>
        <Container>
          <div class="row cont-row">
            <div class="col">
              <span>
                <img className="tel" src={tel} />
                <h5 className="text-tel">เบอร์โทรศัพท์</h5>
              </span>
            </div>

            <div class="col">
              <span>
                <img className="line" src={line} />
                <h5 className="text-line" Line>
                  {" "}
                  Line{" "}
                </h5>
              </span>
            </div>
            <div class="col">
              <span>
                <img className="face" src={face} />
                <h5 className="text-face">Facebook</h5>
              </span>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default Contact;
