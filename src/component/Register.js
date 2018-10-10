import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';
class Register extends Component {
  constructor(props){
    super(props);
      this.state={
        gender:'',
        department:''
      }
    }

gender(e) {
  var gen = e.target.value;
  this.setState({gender:gen});
}
department(e) {
  var dep = e.target.value;
  this.setState({department:dep});
}
  submit(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var pass = document.getElementById('pass').value;
    var gender = this.state.gender;
    var city = document.getElementById('city').value;
    var department = this.state.department;

    var formdata = new FormData();

    formdata.append("action", "register");
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("mobile", mobile);
    formdata.append("pass", pass);
    formdata.append("gender", gender);
    formdata.append("city", city);
    formdata.append("department", department);

    fetch('http://192.168.24.46/cms/main.php', {
       method: 'POST',
       body:formdata
   }).then((res) => res.json())
   .then((data) =>  {
     if(data.status === 1)
     {
       this.props.history.push('/');
     }
     else if (data.status === 2) {
       alert("User already exist");
     }
     else
     {
       console.log("Invalid User");
     }
  }).catch((err) => console.log(err));
  }

  render() {
    if (localStorage.getItem('email'))
    {
     return <Redirect from ="/register" to="/" />
   }
   else {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit = {
                    this.submit.bind(this)
                  }>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="name" placeholder="Username" required autoComplete="username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="fa fa-envelope"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" id="email" placeholder="Email" autoComplete="email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="fa fa-mobile"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="mobile" placeholder="Mobile" autoComplete="mobile" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" id="pass" placeholder="Password" autoComplete="new-password" />
                    </InputGroup>
                    < InputGroup className = "mb-3" >
                    <InputGroupAddon addonType = "prepend" >
                  < i className = "fa fa-male" id = "genderm" >
                    <span > Male < /span>
                    <input type = "radio" name = "GENDER" value = "Male" onChange={this.gender.bind(this)} / > < /i>
                     < i className = "fa fa-female" id = "genderf" >
                    < span > Female < /span>
                    < input type = "radio"  name = "GENDER" value = "Female" onChange={this.gender.bind(this)} / >
                    </i>
                    </InputGroupAddon>
                  </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-home"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="city" placeholder="City" autoComplete="city" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-graduation-cap"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <select id="department" style={{height:35, width:395,backgroundColor:"white"}} onChange={this.department.bind(this)}>
                      <option selected style={{display:'none'}}>Course</option>
                      < option value = "BTECH" > B-TECH < /option>
                       <option value="BBA">BBA</option >
                        < option value = "BCOM" > B-COM< /option>
                        <option value="MBA">MBA</option >
                        < option value = "MCA" > MCA < /option> </select>
                    </InputGroup>
                    <Button color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }}
}

export default Register;
