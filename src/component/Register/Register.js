import React, { Component } from "react";
import { Form, FormGroup, Input, Container, Button } from "reactstrap";
import axios from "axios";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      message: ""
    };
  }
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({ message: "" });
    console.log({ [name]: value });
  };
  register = e => {
    e.preventDefault();
    try {
      const data = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        address: this.state.address
      };
      console.log("ข้อมูลที่กำลังจะ่ส่งไป ....  ", data);

      axios.post(`http://localhost:3001/api/users/create`, data).then(res => {
        const { data } = res;
        this.setState({ message: data.message });

        this.props.history.push(`/overview`);
      });
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  render() {
    const { firstname, lastname, email, password, phone, address } = this.state;
    return (
      <div>
        <Container>
          <div className="log">
            <Form className="form-register" onSubmit={this.register}>
              <h2>
                <b className="re">ลงทะเบียน</b>
              </h2>{" "}
              <Input
                className="register "
                type="text"
                name="firstname"
                value={firstname}
                placeholder="ชื่อจริง"
                onChange={this.handleInputChange}
                required
              />
              <Input
                className="register"
                type="text"
                name="lastname"
                value={lastname}
                placeholder="นามสกุล"
                onChange={this.handleInputChange}
                required
              />
              <Input
                className="register"
                type="email"
                name="email"
                value={email}
                placeholder="อีเมล์ของผู้ใช้"
                onChange={this.handleInputChange}
                required
              />
              <Input
                className="register"
                type="password"
                name="password"
                value={password}
                placeholder="รหัสผ่าน"
                onChange={this.handleInputChange}
                required
              />
              <Input
                className="register"
                type="phone"
                name="phone"
                value={phone}
                placeholder="เบอร์โทรศัพท์"
                onChange={this.handleInputChange}
                required
              />
              <Input
                className="register"
                type="address"
                name="address"
                value={address}
                placeholder="ที่อยู่ปัจจุบัน"
                onChange={this.handleInputChange}
                required
              />
              <Button href="/Login" className="btn-register" color="info">
                ลงทะเบียน
              </Button>
              <div className="btn-forgot">
                <lable className="reg">หากคุณเป็นสมาชิกแล้ว </lable>
                <a href="/Login" className="bt-register">
                  ลงชื่อเข้าใช้งาน
                </a>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}
export default Register;
