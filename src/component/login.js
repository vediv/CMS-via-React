import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import '../css/login.css';

class Login extends Component {
  checkLogin (e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var formdata = new FormData();

    formdata.append("action", "login");
    formdata.append("email", email);
    formdata.append("pass", pass);

    fetch('http://192.168.24.46/cms/main.php', {
       method: 'POST',
       body:formdata
   }).then((res) => res.json())
   .then((data) =>  {
     if(data.status === 1)
     {
       var name = data.data[0].name;
       var first_name = name.split(' ').slice(0,1).join(' ');
       var username = first_name.charAt(0).toUpperCase() + first_name.slice(1);
       localStorage.setItem('username', username);
       localStorage.setItem('email', email);
       localStorage.setItem('password', pass);
       this.props.history.push('/');
     }
     else {
       this.props.history.push('/register');
     }
  }).catch((err) => console.log(err))
  }
  render() {
     if (localStorage.getItem('email'))
     {
      return <Redirect from ="/login" to="/" />
    }
    else {
    return (

      <div className="app flex-row align-items-center">
        <Container fixed>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-envelope"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id="email" placeholder="Email" autoComplete="email" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" id="pass" placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" onClick={this.checkLogin.bind(this)} className="px-4">Login</Button>&nbsp;&nbsp;
                          <Link to="/register"><Button color="primary" style={{color:'white'}}>Register</Button></Link>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
  
    );
  }}
}

export default Login;
