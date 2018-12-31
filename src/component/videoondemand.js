import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Nav, NavItem, NavLink, TabContent,
  TabPane,
   Container,
   Form,
   Input,
   InputGroup,
   InputGroupAddon,
    FormGroup, Label, FormText,
   InputGroupText  } from 'reactstrap';
import classnames from 'classnames';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import '../css/modal.css';

export default class vod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags:[],
      modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false,
      activeTab: '1'
    };
    this.toggle = this.toggle.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggle(tab) {
     if (this.state.activeTab !== tab) {
       this.setState({
         activeTab: tab,
       });
     }
   }

  toggleInfo() {
    this.setState({
      info: !this.state.info,
    });
  }
add_category() {
    var addCategory = <div>
    <Container >
      <Row className="justify-content-left">
        <Col md="7">
    <div>
    <Form>
    <FormGroup>
      <Label for="crew"><b>Crew:</b></Label>
      <Input type="text" name="crew" id="crew" placeholder="Entry Crew" />
    </FormGroup>
    <FormGroup>
      <Label for="customdata"><b>Custom Data:</b></Label>
      <Input type="text" name="customdata" id="custom" placeholder="Entry Custom Data" />
    </FormGroup>
    </Form>
    </div>
    </Col>
  </Row>
</Container>
</div>
      ReactDOM.render(addCategory, document.getElementById('add'));

}
  render() {
    const { tags } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Video On Demand
              </CardHeader>
              <CardBody>
                <Button color="info" onClick={this.toggleInfo} className="mr-1">Info modal</Button>
                <Modal isOpen={this.state.info} toggle={this.toggleInfo}
                       className={'modal-success modal-lg ' + this.props.className} style={{ minWidth:'500px'}}>
                  <ModalHeader  toggle={this.toggleInfo}><h3><i>Edit Entry</i></h3></ModalHeader>
                  <ModalBody>
                  <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" className="mb-4">
          <div id="editmodal">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Metadata
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Thumbnail
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  Access Control
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >
                  Price
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '5' })}
                  onClick={() => { this.toggle('5'); }}
                >
                  Content Partner
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '6' })}
                  onClick={() => { this.toggle('6'); }}
                >
                  Content Type
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '7' })}
                  onClick={() => { this.toggle('7'); }}
                >
                  Content Type
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '8' })}
                  onClick={() => { this.toggle('8'); }}
                >
                  Content Rating
                </NavLink>
              </NavItem>
            </Nav>
            </div>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
              <Container md="12">
                <Row className="justify-content-left">
                  <Col md="7" sm="7" xs="5">
                    <div style={{display: "inlineBlock", height: "400px",overflowY: "scroll"}} >
              <Form>
          <FormGroup>
            <Label for="title"><b>Title:</b></Label>
            <Input type="text" name="text" id="title" placeholder="Entry Name" />
          </FormGroup>
          <FormGroup>
            <Label for="description"><b>Description:</b></Label>
            <Input type="textarea" name="description" id="description" placeholder="Description"  />
          </FormGroup>
          <FormGroup>
            <Label for="status"><b>Status</b></Label>
            <Input type="select" name="status" id="status">
              <option>Inactive</option>
              <option>Active</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="subgenre"><b>Sub-Genre::</b></Label>
            <Input type="text" name="subgenre:" id="subGenre" placeholder="Entry Sub-Genre" />
          </FormGroup>
          <FormGroup>
            <Label for="pgrating"><b>PG-Rating:</b></Label>
            <Input type="text" name="pgrating" id="pgRating" placeholder="Entry PG-Rating" />
          </FormGroup>
          <FormGroup>
            <Label for="language"><b>Language:</b></Label>
            <Input type="text" name="language" id="language" placeholder="Entry Language" />
          </FormGroup>
          <FormGroup>
            <Label for="producer"><b>Producer:</b></Label>
            <Input type="text" name="producer" id="producer" placeholder="Entry Producer" />
          </FormGroup>
          <FormGroup>
            <Label for="director"><b>Director:</b></Label>
            <Input type="text" name="director" id="director" placeholder="Entry Director" />
          </FormGroup>
          <FormGroup>
            <Label for="cast"><b>Cast:</b></Label>
            <Input type="text" name="cast" id="cast" placeholder="Entry Cast" />
          </FormGroup>
          <FormGroup>
            <Label for="crew"><b>Crew:</b></Label>
            <Input type="text" name="crew" id="crew" placeholder="Entry Crew" />
          </FormGroup>
          <FormGroup>
            <Label for="customdata"><b>Custom Data:</b></Label>
            <Input type="text" name="customdata" id="custom" placeholder="Entry Custom Data" />
          </FormGroup>
          <Label for="customdata"><b>Add Category:</b></Label>&nbsp;&nbsp;&nbsp;&nbsp;
          <Button onClick={() => this.add_category()}><i className="fa fa-plus"></i>&nbsp;Add Category</Button>
          <div id="add"></div>
            <Button color="success" style={{marginLeft:'130px', marginTop:'10px'}} onClick={this.toggleInfo}>Save </Button>{' '}
        </Form>    </div>
        </Col>
          <Col md="5" sm="5" xs="5">
          <ReactPlayer url='https://www.youtube.com/watch?v=d46Azg3Pm4c'  controls volume width='100%' height='40%' style={{marginTop:'30px'}}/>
          <Form style={{marginTop:'20px'}}>
      <FormGroup>
        <Label for="created"><b>Crerated On:</b></Label>
      </FormGroup>
      <FormGroup>
      <Label for="duration" style={{marginTop:'-5px'}}><b>Duration:</b></Label>
      </FormGroup>
      </Form>
          </Col>
      </Row>
    </Container>

              </TabPane>
              <TabPane tabId="2">
                2. thumbnail
              </TabPane>
              <TabPane tabId="3">
                3. access control
              </TabPane>
              <TabPane tabId="4">
                4. price
              </TabPane>
              <TabPane tabId="5">
                5. content type
              </TabPane>
              <TabPane tabId="6">
                6. content partner
              </TabPane>
              <TabPane tabId="7">
                7. content type
              </TabPane>
              <TabPane tabId="8">
                8. content partner
              </TabPane>
            </TabContent>
          </Col>
          </Row>
     </div>
                  </ModalBody>

                </Modal>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
//
// <ModalFooter>
//
//   <Button color="secondary" onClick={this.toggleInfo}>Cancel</Button>
// </ModalFooter>
