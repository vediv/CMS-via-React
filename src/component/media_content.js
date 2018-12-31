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
   import { BrowserRouter as Router, Switch, Route,Link,withRouter,browserHistory,history} from 'react-router-dom';
import classnames from 'classnames';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {DataTable} from 'primereact/datatable';
import {PickList} from 'primereact/picklist';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import ReactDOM from 'react-dom';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import ReactPlayer from 'react-player';
import '../css/modal.css';


 class vod extends Component {
  constructor() {
    super();
    this.options = countryList().getData()
    this.state = {
      options: this.options,
      value: null,
      tags:[],
      modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false,
      activeTab: '1',
      load:false,
      target:[],
      source:[],
      id:0
    };
    this.toggle = this.toggle.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
  }
  changeHandler = value => {
      this.setState({ value })
    }
  toggle(tab) {
     if (this.state.activeTab !== tab) {
       this.setState({
         activeTab: tab,
       });
     }
   }
   onChange(event) {
           this.setState({
               source: event.source,
               target: event.target
           });
           console.log(event.target);
       }
  toggleInfo() {
    this.setState({
      info: !this.state.info,
    });
  }
  componentDidMount()
  {
         	 var id= this.props.match.params.id;
           this.setState({source:this.state.options,
             id:id
           });
  }
  c_code(country) {
    var label=country.label;
    var value=country.value;
    return(
<div>{label}&nbsp;({value})</div>

    );
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
    const { tags, id } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>

              <CardBody  style={{backgroundColor: "#DCDCDC"}}>

                  <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" className="mb-4">
          <div>
      <h3><b>Tips & Tricks for Better Videos - Chapter 4 - Post-Production</b>
       <Button className="fa fa-arrow-left"  style={{backgroundColor: "#FFFFFF", marginLeft: "150px"}} ></Button> <Button className="fa fa-arrow-right"  style={{backgroundColor: "#FFFFFF"}} ></Button></h3>

          <Form style={{marginTop:'20px'}}>
      <FormGroup>
        <Label for="id"><b>ID:&nbsp;</b>{id}</Label>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Label for="created"><b>Crerated On:&nbsp;</b>11/21/18</Label>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Label for="lastupdate"><b>Last Update:&nbsp;</b>11/21/18</Label>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Label for="duration" style={{marginTop:'-5px'}}><b>Duration:&nbsp;</b>07:37</Label>
      </FormGroup>
      </Form>

          </div>
          <div id="editmodal">
            <Nav tabs  style={{backgroundColor: "#FFFFFF"}} >
              <NavItem>
              <Link to={`/media_content/${id}/metadata`}>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                  style={{color: "black"}}
                >
                  Metadata
                </NavLink></Link>
              </NavItem>
              <NavItem>
              <Link to={`/media_content/${id}/thumbnail`}>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2');
                }}
                  style={{color: "black"}}
                >
                  Thumbnail
                </NavLink></Link>
              </NavItem>
              <NavItem>
              <Link to={`/media_content/${id}/access_control`}>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                  style={{color: "black"}}
                >
                  Access Control
                </NavLink>
                </Link>
              </NavItem>
              <NavItem>
              <Link to={`/media_content/${id}/price`}>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4');
                }}
                  style={{color: "black"}}
                >
                  Price
                </NavLink>
                </Link>
              </NavItem>
              <NavItem>
              <Link to={`/media_content/${id}/content_partner`}>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '5' })}
                  onClick={() => { this.toggle('5'); }}
                  style={{color: "black"}}
                >
                  Content Partner
                </NavLink>
                </Link>
              </NavItem>
              <NavItem>
              <Link to={`/media_content/1/content_type`}>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '6' })}
                  onClick={() => { this.toggle('6'); }}
                  style={{color: "black"}}
                >
                  Content Type
                </NavLink>
                </Link>
              </NavItem>
              <NavItem>
              <Link to={`/media_content/${id}/content_rating`}>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '7' })}
                  onClick={() => { this.toggle('7'); }}
                  style={{color: "black"}}
                >
                  Content Rating
                </NavLink>
                </Link>
              </NavItem>
              <NavItem>
              <Link to={`/media_content/${id}/advertisement`}>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '8' })}
                  onClick={() => { this.toggle('8'); }}
                  style={{color: "black"}}
                >
                  Advertisement
                </NavLink>
                </Link>
              </NavItem>
            </Nav>
            </div>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
              <Container md="12">
                <Row className="justify-content-left">
                  <Col md="7" sm="7" xs="5">
                    <div style={{display: "inlineBlock", height: "470px",overflowY: "scroll"}} >
                      <Fade>
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
        </Form>    </Fade>  </div>
        </Col>
          <Col md="5" sm="5" xs="5">
          <div><Fade>
          <ReactPlayer url='https://www.youtube.com/watch?v=d46Azg3Pm4c'  controls volume width='100%' height='40%' style={{marginTop:'30px'}}/>
          <Form style={{marginTop:'20px'}}>
      <FormGroup>
        <Label for="created"><b>Crerated On:</b></Label>
      </FormGroup>
      <FormGroup>
      <Label for="duration" style={{marginTop:'-5px'}}><b>Duration:</b></Label>
      </FormGroup>
      </Form>
      </Fade>
      </div>
          </Col>

      </Row>
    </Container>

              </TabPane>
              <TabPane tabId="2">
              <Container md="12">
                <Row className="justify-content-left">
                  <Col md="12" sm="12" xs="12">
                    <div style={{display: "inlineBlock", height: "400px",overflowY: "scroll"}} >
                    <Fade>
                      <Form>
                        <FormGroup>
                        <Label for="title"><h4><b>Upload a thumbnail:</b></h4></Label>
                        <Input type="file" name="thumb" id="thumb" />
                        </FormGroup>
                      </Form>
                      <div className="total-record">
                      <div className="side-div"></div>
                          <DataTable  fade={true}  resizableColumns={true} scrollable={true} scrollHeight="245px" lazy={true} responsive={false} loading={this.state.loading} style={{ fontSize: '13px' }}>

                          </DataTable>
                      </div>
                      </Fade>
                    </div>
                  </Col>
                </Row>
                <Button color="primary" style={{marginLeft:'45%', marginTop:'10px'}} onClick={this.toggleInfo}>Save </Button>{' '}
              </Container>

              </TabPane>
              <TabPane tabId="3">
              <Container md="12" sm="6" xs="4">
                <Row className="justify-content-left">
                  <Col>
                    <div style={{display: "inlineBlock", height: "500px"}} >
                      <Form>
                        <FormGroup>
                        <Label for="title"><h4><b>Authorized Countries - From where viewers can view</b></h4></Label>
                        </FormGroup>
                        <Input type="radio" name="first" id="access1" value="Allow Everywhere"/>Allow Everywhere<br /><br />
                        <Input type="radio" name="second" id="access2" />Block the video from all countries<br /><br />
                        <Input type="radio" name="third" id="access3" /> Block the video from the following countries
                      </Form>
                      <div className="content-section implementation" style={{marginTop:"20px"}}>
                           <PickList source={this.state.source} target={this.state.target} itemTemplate={this.c_code.bind(this)}
                           sourceHeader="Countries List:" targetHeader="Restricted Countries" responsive={true}
                           sourceStyle={{height: '220px'}} targetStyle={{height: '220px'}}
                           onChange={this.onChange.bind(this)}></PickList>
                       </div>
                       <hr style={{width:"100%", border:"1px solid", backgroundColor:"#000", marginTop:"20px"}} />
                       <Button color="primary" style={{marginLeft:'45%', marginTop:'5px'}} onClick={this.toggleInfo}>Save </Button>{' '}
                    </div>
                  </Col>
                </Row>

              </Container>
              </TabPane>
              <TabPane tabId="4">
            4
              </TabPane>
              <TabPane tabId="5">
              5
              </TabPane>
              <TabPane tabId="6">
              <Container md="12" sm="6" xs="4">
                <Row className="justify-content-left">
                  <Col>
                    <div style={{display: "inlineBlock", height: "500px"}} >
                      <Form>
                        <FormGroup>
                        <Label for="title"><h4><b>Choose The following Content Type : </b></h4></Label>
                        </FormGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Input type="radio" name="first" id="access1" value=""/>Free&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Input type="radio" name="second" id="access2" />Premium
                      </Form>
                       <hr style={{width:"100%", border:"1px solid", backgroundColor:"#000", marginTop:"20px"}} />
                       <Button color="primary" style={{marginLeft:'45%', marginTop:'5px'}} onClick={this.toggleInfo}>Save </Button>{' '}
                      </div>
                  </Col>
                </Row>
              </Container>
              </TabPane>
              <TabPane tabId="7">
                7. content Rating
              </TabPane>
              <TabPane tabId="8">
              <Container md="12">
              <Fade>
                <Row className="justify-content-left">
                  <Col md="7" sm="7" xs="5">
                    <div style={{display: "inlineBlock", height: "470px",overflowY: "scroll"}} >

              <Form>
          <FormGroup>
            <Label for="addname"><b>Name:</b></Label>
            <Input type="text" name="addname" id="addname" placeholder="Advertisement Name" />
          </FormGroup>
          <FormGroup>
            <Label for="timing"><b>Timing:</b></Label>
            <Input type="text" name="timing" id="timing" placeholder="Description"  />
          </FormGroup>
          <FormGroup>
            <Label for="add_url"><b>URL:</b></Label>
            <Input type="textarea" name="add_url" id="add_url" placeholder="Enter Advertisement URL" />
          </FormGroup>
          <FormGroup>
            <Label for="status"><b>Status</b></Label>
            <Input type="select" name="status" id="status">
              <option>Show to free users</option>
              <option>Show to all</option>
            </Input>
          </FormGroup>
          <Button color="primary" style={{marginLeft:"45%", marginTop:'10px'}} onClick={this.toggleInfo}>Save </Button>{' '}
        </Form>     </div>
        </Col>
          <Col md="5" sm="5" xs="5">
          <div>
            <Form style={{marginTop:'20px'}}>
      <FormGroup>
        <Label for="duration"><h4><b>Total Video Duration:</b> 00:00:05</h4></Label>
      </FormGroup>
      </Form>
      </div>
          </Col>
      </Row>
       <hr style={{width:"100%", border:"1px solid", backgroundColor:"#000", marginTop:"-60px"}} />
       <div>
      <h4> No Ads Data Available</h4>
       </div></Fade>
    </Container>
              </TabPane>
            </TabContent>
          </Col>
          </Row>
     </div>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default withRouter(vod);
//
// <ModalFooter>
//
//   <Button color="secondary" onClick={this.toggleInfo}>Cancel</Button>
// </ModalFooter>
