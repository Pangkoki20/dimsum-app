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
            <h2>
              <b>ลงทะเบียน</b>
            </h2>

            <Input
              className="register-first"
              type="text"
              name="firstname"
              value={firstname}
              placeholder="Firstname"
              onChange={this.handleInputChange}
              required
            />

            <Input
              className="register-last"
              type="text"
              name="lastname"
              value={lastname}
              placeholder="Lastname"
              onChange={this.handleInputChange}
              required
            />
            <Input
              className="register-email"
              type="email"
              name="email"
              value={email}
              placeholder="E-mail"
              onChange={this.handleInputChange}
              required
            />
            <Input
              className="register-pass"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
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
          <Button className="btn-register" color="info">
            ลงทะเบียน
          </Button>
        </Form>
      </Container>
    );
  }
}
export default Register;
