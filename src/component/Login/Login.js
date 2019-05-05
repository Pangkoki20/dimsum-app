import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, FormGroup, Input, Container, Button } from "reactstrap";
import axios from "axios";
import "./Login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({ message: "" });
    console.log({ [name]: value });
  };

  toRegister = e => {
    this.props.history.push("/register");
  };

  login = e => {
    e.preventDefault();
    console.log("dimsum");

    try {
      const data = {
        email: this.state.email,
        password: this.state.password
      };

      axios.post(`http://localhost:3001/api/users/login`, data).then(res => {
        const { data } = res;
        console.log("res : ", res.data);
        this.setState({ message: data.message });

        this.props.onUserChanged(res);

        localStorage.setItem("token", data.token);
        this.props.history.push(`/overview`);
      });
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  render() {
    return (
      <Container className="log">
        <Form className="form-login" onSubmit={this.login}>
          <FormGroup>
            <h2>
              <b>Login...</b>
            </h2>
            <Input
              className="input-login"
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <Input
              className="input-login"
              type="password"
              name="password"
              id="examplePassword"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <Button className="btn-login" color="success">Login</Button>
          <Button
            type="button"
            className="btn btn-secondary btn-register btn-block"
            onClick={this.toRegister}
          >
            ลงทะเบียน
          </Button>
        </Form>
      </Container>
    );
  }
}
export default withRouter(Login);
