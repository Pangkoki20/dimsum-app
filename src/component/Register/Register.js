import React, { Component } from "react";
import { Form, Input, Container, Button, FormGroup } from "reactstrap";
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
      // address: "",
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
        phone: this.state.phone
        // address: this.state.address
      };
      console.log("ข้อมูลที่กำลังจะ่ส่งไป ....  ", data);

      axios.post(`http://localhost:3001/api/users/create`, data).then(res => {
        const { data } = res;
        this.setState({ message: data.message });

        this.props.history.push(`/login`);
      });
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  render() {
    const { firstname, lastname, email, password, phone } = this.state;
    return (
      <div className="container form-register">
        <span>
          <div className="text_register">ลงทะเบียน</div>
          <div className="row justify-content-md-center">
            <Form className="form-input">
              <FormGroup>
                <Input
                  className="input_register"
                  type="text"
                  name="firstname"
                  value={firstname}
                  placeholder="ชื่อจริง"
                  onChange={this.handleInputChange}
                  required
                />

                <Input
                  className="input_register"
                  type="text"
                  name="lastname"
                  value={lastname}
                  placeholder="นามสกุล"
                  onChange={this.handleInputChange}
                  required
                />

                <Input
                  className="input_register"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="อีเมล์ของผู้ใช้"
                  onChange={this.handleInputChange}
                  required
                />

                <Input
                  className="input_register"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="รหัสผ่าน"
                  onChange={this.handleInputChange}
                  required
                />

                <Input
                  className="input_register"
                  type="phone"
                  name="phone"
                  value={phone}
                  placeholder="เบอร์โทรศัพท์"
                  onChange={this.handleInputChange}
                  required
                />

                {/* <Input
                className="input_register"
                type="address"
                name="address"
                value={address}
                placeholder="ที่อยู่ปัจจุบัน"
                onChange={this.handleInputChange}
                required
              /> */}
              </FormGroup>
            </Form>
          </div>
          <Button
            className="btn-register"
            color="info"
            onClick={e => this.register(e)}
          >
            ลงทะเบียน
          </Button>
          <div className="btn-forgot">
            <lable className="reg">หากคุณเป็นสมาชิกแล้ว </lable>
            <a href="/Login">ลงชื่อเข้าใช้งาน</a>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </span>
      </div>
    );
  }
}
export default Register;
