import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row, Modal, ModalBody, ModalHeader
} from 'reactstrap';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Paginator} from 'primereact/paginator';
import {InputText} from 'primereact/inputtext';
import Loader from 'react-loader';
import '../css/userlist.css';

const options = {
lines: 10,
length: 10,
width: 10,
radius: 20,
scale: 1.00,
corners: 1,
color: '#000',
opacity: 0.25,
rotate: 0,
direction: 1,
speed: 1,
trail: 60,
fps: 20,
zIndex: 2e9,
top: '50%',
left: '50%',
shadow: true,
hwaccel: false,
position: 'absolute'
};

export default class UserList extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      items:[],
      count:0,
      re:false,
      first:0,
      rows:6,
      open: false,
      update:[],
      delete:[],
      id_u:0,
      loading:true
    }
      this.onPageChange = this.onPageChange.bind(this);
      this.status = this.status.bind(this);
      this.edit = this.edit.bind(this);
      this.delete = this.delete.bind(this);
      this.Active_inactive = this.Active_inactive.bind(this);


  }
  componentDidMount()
  {
    this.func(this.state.first,this.state.rows);

  }

func(start,totalrow)
  {
    setTimeout(() => {
        var formData = new FormData();
        formData.append("action","userlist");
        formData.append("limit",totalrow);
        formData.append("offset",start);
        fetch('http://192.168.24.46/cms/main.php', {
        method: 'POST',
        body: formData
        }).then((res) => res.json())
      .then((result) =>  {
this.setState({items:result.items,re:true,count:result.totalRecord,loading:false});
           if(result.items.length === 0)
           {
             alert('ved');
             this.setState({first:0});
             this.func(0,this.state.rows);
           }

     })
      .catch((err)=>console.log(err))
      }, 1000);
  }
  onCloseModal = () => {
    this.setState({ open: false });
  };
  onPageChange(event) {
       this.setState({
           first: event.first,
           rows: event.rows
       });
       this.func(event.first,event.rows);
   }
   actionTemplate(field) {
     var id=field.u_id;
     return(
       <div>
       <Button style={{height:'18px', width:'18px'}} type="button" icon="pi pi-pencil" className="p-button-primary" onClick ={() => this.edit(id)}/>&nbsp;
       <Button style={{height:'18px', width:'18px'}} type="button" icon="pi pi-trash" className="p-button-danger" onClick ={() => this.delete(id)}/>
       </div>
   );
   }
   Active_inactive(status,id)
  {
    var formData = new FormData();
    formData.append("action","user_status");
    formData.append("Status",status);
     formData.append("Id",id);
    fetch('http://192.168.24.46/cms/main.php', {
    method: 'POST',
    body: formData
    }).then((res) => res.json())
    .then((result) =>  {
      console.log(this.state.result);
 this.func(this.state.first,this.state.rows);
    })
    .catch((err)=>console.log(err));

  }
   status(field)
      {
        var status1 = field.u_status;
        var content=status1==='1'?<button style={{fontSize:'10px'}} class="btn btn-success" onClick={() => this.Active_inactive(status1,field.u_id)}><b>Active</b></button>:<button style={{fontSize:'10px'}} class="btn btn-danger" onClick={() => this.Active_inactive(status1,field.u_id)}><b>Inactive</b></button>
        return content;
      }
      edit(id)
        {
          this.setState({
              open: true,
              id_u: id
          });
        }
        editdata()
        {
              var formData = new FormData();
              formData.append("action","u_edit");
              formData.append("u_id",this.state.id_u);
              fetch('http://192.168.24.46/cms/main.php', {
              method: 'POST',
              body: formData
              }).then((res) => res.json())
              .then((result) =>  {
                var update= result.items[0];
                var id=this.state.id_u;
          var prevdata = <div  style={{width:950, height:600}}>
                  <Container>
                    <Row>
                      <Col md="6"  >
                        <Card >
                          <CardBody className="p-4" >
                            <Form>
                              <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-user"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" id="name" Value={update.u_name} required />
                              </InputGroup>
                              <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-envelope"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" id="email" Value={update.u_email} required />
                              </InputGroup>
                              <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                  <i className="fa fa-mobile"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" id="mobile" Value={update.u_mobile} required />
                              </InputGroup>
                              <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                  <i className="fa fa-external-link"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" id="gender" Value={update.u_gender} />
                              </InputGroup>
                              <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-lock"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" id="password" Value={update.u_pass} />
                              </InputGroup>
                              <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-graduation-cap"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" id="course" Value={update.u_course} />
                              </InputGroup>
                              <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-home"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" id="address" Value={update.u_add} />
                              </InputGroup>
                              < InputGroup className = "mb-3" >
                              <InputGroupAddon addonType = "prepend" >
                                <InputGroupText>
                            < i className = "fa fa-check-circle" id = "active" > < /i> </InputGroupText>&nbsp;&nbsp;
                               Active
                             &nbsp;<input type = "radio" name = "active" / >&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            <InputGroupText>
                               < i className = "fa fa-times-circle" id = "inactive" ></i>
                               </InputGroupText>&nbsp;&nbsp;
                               Inactive
                          &nbsp;  < input type = "radio"  name = "inactive"/ >

                              </InputGroupAddon>
                            </InputGroup>
                            <input type="button" style={{height:'40px', width:'400px'}} class="btn btn-success" value="Update" onClick ={() => this.update(id)} />
                            </Form>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
            ReactDOM.render(prevdata, document.getElementById('u_editable'));

           })
            .catch((err)=>console.log(err))
       }
       update(id) {
         var Name = document.getElementById('name').value;
         var Email = document.getElementById('email').value;
         var Mobile = document.getElementById('mobile').value;
         var Pass = document.getElementById('password').value;
         var Gender = document.getElementById('gender').value;
         var Course = document.getElementById('course').value;
         var Address = document.getElementById('address').value;
         var formData = new FormData();
           formData.append("action","u_update");
           formData.append("u_id1",id);
           formData.append("u_name1",Name);
           formData.append("u_email1",Email);
           formData.append("u_mobile1",Mobile);
           formData.append("u_pass1",Pass);
           formData.append("u_gender1",Gender);
           formData.append("u_course1",Course);
           formData.append("u_address1",Address);

           fetch('http://192.168.24.46/cms/main.php', {
           method: 'POST',
           body: formData
           }).then((res) => res.json())
           .then((result) =>  {
              if(result.status === 1){
             alert('Record Updated');
             this.setState({
                 open: false
             });
             this.func(this.state.first,this.state.rows);
           }

        })
         .catch((err)=>console.log(err))


       }
       delete(id)
       {
         var formData = new FormData();
         formData.append("action","u_delete");
         formData.append("u_id",id);
         fetch('http://192.168.24.46/cms/main.php', {
         method: 'POST',
         body: formData
         }).then((res) => res.json())
         .then((result) =>  {
           console.log(result);
           this.func(this.state.first,this.state.rows);
      })
       .catch((err)=>console.log(err))
       }
  render() {
          var recCount = this.state.count;
          var footer = "There are total " + recCount + ' record';
          var header = <div style={{'textAlign':'right'}}>
          <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" size="30"/>
            <i className="pi pi-search"  style={{margin:'4px 4px 0 0'}}></i>
          </div>
    return (
      <div className="category">
        <div className="add-category" style={{color:'black'}}>
              <h3>User Records</h3>
        </div>
        <div className="user-record">
        <div className="side-div"></div>

        <DataTable value={this.state.items} header={header} footer={footer} resizableColumns={true} scrollable={true} scrollHeight="245px" lazy={true} responsive={false} loading={this.state.loading} style={{ fontSize: '13px' }}>
            <Column field="u_id" header="ID" style={{textAlign:'center'}}/>
            <Column field="u_name" header="NAME" sortable={true}  style={{textAlign:'center'}} />
            <Column field="u_email" header="EMAIL" style={{textAlign:'center',width:'20%' }} />
            <Column field="u_mobile" header="MOBILE" style={{textAlign:'center'}}/>
            <Column field="u_gender" header="GENDER" style={{textAlign:'center'}} />
            <Column field="u_pass" header="PASSWORD"  style={{textAlign:'center'}} />
              <Column field="u_course" header="COURSE"  style={{textAlign:'center'}} />
                <Column field="u_address" header="ADDRESS"  style={{textAlign:'center'}} />
                  <Column field="u_status" header="STATUS"  body={this.status}  style={{textAlign:'center'}} />
            <Column header="ACTION" body={this.actionTemplate.bind(this)} style={{textAlign:'center'}}/>
        </DataTable>
       <Paginator first={this.state.first} rows={this.state.rows} totalRecords={this.state.count} rowsPerPageOptions={[6,10,20,30]} onPageChange={this.onPageChange}></Paginator>
        </div>
        <Modal isOpen={this.state.open} toggle={this.onCloseModal} fade={true} onOpened={this.editdata.bind(this)}>
        <ModalHeader toggle={this.onCloseModal}><b>EDIT RECORDS</b></ModalHeader>
        <ModalBody id="u_editable">
        <Loader options={options} className="spinner" />
        </ModalBody>
        </Modal>
      </div>

    );
  }
  }
