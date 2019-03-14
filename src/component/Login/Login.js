import React, { Component } from "react";
import { Form, FormGroup, Input, Container ,Button } from "reactstrap";
import Home from "../Home/Home";
import "./Login.css";
class Login extends Component {
  render() {
    return (
      <Container className="log">
        <Form className="form-login">
          <FormGroup>
            <h4 ><b>เข้าสู่ระบบ</b></h4>
            <Input
              className="input-login"
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="dimsumahkong@gmail.com"
            />
            <Input
              className="input-login"
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password"
            />
          </FormGroup>
          <Button color="primary" className="btn-login">Login</Button>
        </Form>
      </Container>
    );
  }
}
export default Login;
