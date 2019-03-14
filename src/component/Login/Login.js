import React, { Component } from "react";
import { Form, FormGroup, Input, Container } from "reactstrap";
import Home from "../Home/Home";
import "./Input.css";
class Login extends Component {
  render() {
    return (
      <div>
        <Home />
        <Container className="log">
          <Form>
            <FormGroup>
              <h2 className="log">เข้าสู่ระบบ</h2>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="dimsumahkong@gmail.com"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password"
              />
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}
export default Login;
