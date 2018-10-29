var prevdata = <div className="app flex-row align-items-center"  style={{width:950, height:600}}>
        <Container>
          <Row className="justify-content-center">
            <Col md="6"  >
              <Card className="mx-41">
                <CardBody className="p-4" >
                  <Form>
                    <h4>Edit Your Records</h4>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="name" placeholder="Username" value={update.name} required autoComplete="username" />
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
                      <InputGroupText>
                  < i className = "fa fa-male" id = "genderm" > < /i> </InputGroupText>&nbsp;&nbsp;
                     Male
                   &nbsp;<input type = "radio" name = "GENDER" value = "Male"  / >&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  <InputGroupText>
                     < i className = "fa fa-female" id = "genderf" ></i>
                     </InputGroupText>&nbsp;&nbsp;
                     Female
                &nbsp;  < input type = "radio"  name = "GENDER" value = "Female" / >

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
                      <select id="department" style={{height:35, width:395,backgroundColor:"white"}} >
                      <option selected style={{display:'none'}}>Course</option>
                      < option value = "BTECH" > B-TECH < /option>
                       <option value="BBA">BBA</option >
                        < option value = "BCOM" > B-COM< /option>
                        <option value="MBA">MBA</option >
                        < option value = "MCA" > MCA < /option> </select>
                    </InputGroup>
                  <Button style={{height:'40px', width:'450px'}} type="button"  > Update </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  ReactDOM.render(prevdata, document.getElementById('editable'));
