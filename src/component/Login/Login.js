import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Home from '../Home/Home';
class Login extends Component {

    render() {
        return (
            <div>
                <Home />
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">E-mail</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="dimsumahkong@gmail.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password" />
                    </FormGroup>

                </Form>
            </div>
        );
    }
}
export default Login