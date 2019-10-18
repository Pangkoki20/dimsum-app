import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, FormGroup, Input, Container, Button } from "reactstrap";
import axios from "axios";
import "./Login.css";
import lo from "../../img/login.png";
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
       this.props.history.push(`/`);
      });
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  render() {
    
    return (
      <Container>
        <div className="form-login">
          <Form >
            <FormGroup className="fon-log">
              <span>
                <img className="logo" src={lo} />
                <Input
                  className="input-login"
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="อีเมล์ของผู้ใช้"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <Input
                  className="input-login"
                  type="password"
                  name="password"
                  id="examplePassword"
                  value={this.state.password}
                  placeholder="รหัสผ่านของผู้ใช้"
                  onChange={this.handleInputChange}
                />
              </span>
            </FormGroup>
            <div>
              <a href="/">
                <p className="forget-pass"> ลืมรหัสผ่าน </p>
              </a>
            </div>
            <Button href="/" className="btn-login" color="info" onClick={(e) => this.login(e)}>
              ลงชื่อเข้าใช้งาน
            </Button>

            <div className="btn-forgot ">
              <lable className="reg">หากคุณยังไม่เป็นสมาชิก </lable>
              <a href="/Register">สมัครสมาชิก</a>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </Form>
        </div>
      </Container>
    );
  }
}
export default withRouter(Login);
