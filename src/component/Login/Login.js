import React, { Component } from "react";
import { Form, FormGroup, Input, Container, Button } from "reactstrap";
import Home from "../Home/Home";
import "./Login.css";
class Login extends Component {
  render() {
    return (
      <Container className="log">
        <Form className="form-login">
        
          <FormGroup>
            <h2>
              <b>Login</b>
            </h2>
            <Input
              className="input-login"
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
            />
            <Input
              className="input-login"
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
            />
          </FormGroup>
          <button type="button" class="btn btn-primary btn-login btn-block">
            Login
          </button>
          <button type="button" class="btn btn-secondary btn-register btn-block">
            ลงทะเบียน
          </button>
        </Form>
      </Container>
    );
  }
}
export default Login;
