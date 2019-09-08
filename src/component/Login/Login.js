import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, FormGroup, Input, Container, Badge } from "reactstrap";
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
        this.props.history.push(`/banner`);
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
            <h1 className="fon-log">
              <b>Login...</b>
            </h1>
            <Input
              className="input-login"
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="ป้อนอีเมล์ของผู้ใช้"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <Input
              className="input-login"
              type="password"
              name="password"
              id="examplePassword"
              value={this.state.password}
              placeholder="ป้อนรหัสผ่านของผู้ใช้"
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <a href="/">
            <p className="forget-pass text-right"> ลืมรหัสผ่าน </p>
          </a>
          <Badge href="/" className="btn-login" color="info" pill>
            <h5>ลงชื่อเข้าใช้งาน</h5>
          </Badge>
          <div className="btn-forgot ">
            <lable>หากคุณยังไม่เป็นสมาชิก</lable>

            <a href="/Register" className="btn-register lable">
              <a>  สมัครสมาชิก</a>{" "}
            </a>
          </div>
        </Form>
      </Container>
    );
  }
}
export default withRouter(Login);
