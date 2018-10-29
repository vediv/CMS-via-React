import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {
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
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Paginator} from 'primereact/paginator';
import {InputText} from 'primereact/inputtext';
import Modal from "react-responsive-modal";
import Loader from 'react-loader';
import '../css/categories.css';

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
class Category extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      items:[],
      count:0,
      re:false,
      first:0,
      rows:5,
      open: false,
      update:[],
      delete:[],
      c_id:0
    }
      this.onPageChange = this.onPageChange.bind(this);
        this.edit = this.edit.bind(this);
        this.status = this.status.bind(this);
      this.update = this.update.bind(this);
        //  this.delete = this.delete.bind(this);
        this.Active_inactive = this.Active_inactive.bind(this);


  }
  componentDidMount()
  {
    this.func(this.state.first,this.state.rows);

  }

func(start,totalrow)
  {
        var formData = new FormData();
        formData.append("action","category");
        formData.append("parent_id",'0');
        formData.append("limit",totalrow);
        formData.append("offset",start);
        fetch('http://192.168.24.46/cms/main.php', {
        method: 'POST',
        body: formData
        }).then((res) => res.json())
      .then((result) =>  {
this.setState({items:result.items,re:true,count:result.totalRecord});
              console.log(result.totalRecord);
     })
      .catch((err)=>console.log(err))

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
    var id=field.id;
    return(
      <div>
      <Button style={{height:'14px', width:'14px'}} type="button" icon="pi pi-pencil" className="p-button-warning" onClick ={() => this.edit(id)}/>&nbsp;
      <Button style={{height:'14px', width:'14px'}} type="button" icon="pi pi-trash" className="p-button-danger" onClick ={() => this.delete(id)}/>
      </div>
  );
  }

  edit(id)
    {
      this.setState({
          open: true,
          c_id: id
      });
    }
    editdata()
    {
          var formData = new FormData();
          formData.append("action","edit");
          formData.append("u_id",this.state.c_id);
          fetch('http://192.168.24.46/cms/main.php', {
          method: 'POST',
          body: formData
          }).then((res) => res.json())
          .then((result) =>  {
            var update= result.items[0];
            var id=this.state.c_id;
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
                            <Input type="text" id="name" Value={update.name} required />
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                              <i className="fa fa-picture-o"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" id="icon" Value={update.icon} required />
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                              <i className="fa fa-external-link"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" id="url" Value={update.url} />
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-calendar "></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" id="date" Value={update.date} />
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
                        <button style={{height:'40px', width:'450px'}} onClick ={() => this.update(id)} > Update </button>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
        ReactDOM.render(prevdata, document.getElementById('editable'));

       })
        .catch((err)=>console.log(err))
   }
   update(id) {
     var Name = document.getElementById('name').value;
     var Icon = document.getElementById('icon').value;
     var Url = document.getElementById('url').value;
     var Date1 = document.getElementById('date').value;
       var formData = new FormData();
       formData.append("action","update");
       formData.append("c_id1",id);
       formData.append("c_name1",Name);
       formData.append("c_icon1",Icon);
       formData.append("c_url1",Url);
       formData.append("c_date1",Date1);

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
      formData.append("action","delete");
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

    Active_inactive(status,id)
   {
     alert('ved');
     var formData = new FormData();
     formData.append("action","status_update");
     formData.append("Status",status);
      formData.append("Id",id);
      formData.append("Type",'category');
     fetch('http://192.168.24.46/cms/main.php', {
     method: 'POST',
     body: formData
     }).then((res) => res.json())
     .then((result) =>  {
  this.func(this.state.first,this.state.rows);
     })
     .catch((err)=>console.log(err));

   }
status(field)
   {
     var status1 = field.status;
     var id = field.id;
     var content=status1=='1'?<button onClick={() => this.Active_inactive(status1,field.id)}>Active</button>:<button  onClick={() => this.Active_inactive(status1,field.id)}>Inactive</button>
     return content;
   }

   addNew() {
alert('add user');
 }


   icon(e)
   {
     return <div className={e.icon}></div>
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
        <div className="add-category" style={{color:'white'}}>
              <h3>Add Category <Button style={{height:'24px', width:'24px'}} icon="pi pi-plus" onClick={this.addNew}/></h3>
        </div>
        <div className="total-record">
        <div className="side-div"></div>
            <DataTable value={this.state.items} header={header} footer={footer} style={{ fontSize: '13px' }}>
                <Column field="id" header="ID" style={{textAlign:'center'}}/>
                <Column field="name" header="NAME" sortable={true}  style={{textAlign:'center'}} />
                <Column field="icon" header="ICON" body={this.icon} style={{textAlign:'center'}} />
                <Column field="url" header="URL" style={{textAlign:'center'}}/>
                <Column field="date" header="DATE" style={{textAlign:'center'}} />
                <Column field="status" header="STATUS"  body={this.status} style={{textAlign:'center'}} />
                <Column header="ACTION" body={this.actionTemplate.bind(this)} style={{textAlign:'center'}}/>
            </DataTable>
       <Paginator first={this.state.first} rows={this.state.rows} totalRecords={this.state.count} rowsPerPageOptions={[5,10,20,30]} onPageChange={this.onPageChange}></Paginator>
        </div>
        <Modal open={this.state.open} onClose={this.onCloseModal} onEntered={this.editdata.bind(this)} closeIconSize='23'>
        <div id="editable"><Loader options={options} className="spinner" />
        </div>
        </Modal>
      </div>

    );
  }
}

export default Category;
