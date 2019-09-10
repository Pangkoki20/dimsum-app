import React, { Component } from "react";
import { Form, FormGroup, Input, Container, Badge,lable} from "reactstrap";
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
      console.log('ข้อมูลที่กำลังจะ่ส่งไป ....  ' , data);
      

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
      <Container className="log">
        <Form className="form-login" onSubmit={this.register}>
          <FormGroup>
            <h2 >
          
              <b className="re">ลงทะเบียน</b>
            </h2>

            <Input
              className="register-first"
              type="text"
              name="firstname"
              value={firstname}
              placeholder="ชื่อจริง"
              onChange={this.handleInputChange}
              required
            />

            <Input
              className="register-last"
              type="text"
              name="lastname"
              value={lastname}
              placeholder="นามสกุล"
              onChange={this.handleInputChange}
              required
            />
            <Input
              className="register-email"
              type="email"
              name="email"
              value={email}
              placeholder="อีเมล์ของผู้ใช้"
              onChange={this.handleInputChange}
              required
            />
            <Input
              className="register-pass"
              type="password"
              name="password"
              value={password}
              placeholder="รหัสผ่าน"
              onChange={this.handleInputChange}
              required
            />
            <Input
              className="register-phone"
              type="phone"
              name="phone"
              value={phone}
              placeholder="เบอร์โทรศัพท์"
              onChange={this.handleInputChange}
              required
            />
            <Input
              className="register-address"
              type="address"
              name="address"
              value={address}
              placeholder="ที่อยู่ปัจจุบัน"
              onChange={this.handleInputChange}
              required
            />
          </FormGroup>
          <Badge href=""className="btn-register" color="info" pill>
            <h5>ลงทะเบียน</h5>
          </Badge>
          <div className="btn-forgot">
            <lable>หากคุณเป็นสมาชิกแล้ว</lable>

            <a href="/" className="btn-register lable"> ลงชื่อเข้าใช้งาน{" "}
            </a>
          </div>
        </Form>
      </Container>
    );
  }
}
export default Register;
