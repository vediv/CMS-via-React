import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
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
      rows:6,
      open: false,
      update:[],
      delete:[],
      c_id:0,
      loading: true,
      globalFilter: null
    }
      this.onPageChange = this.onPageChange.bind(this);
        this.edit = this.edit.bind(this);
        this.status = this.status.bind(this);
      this.update = this.update.bind(this);
      this.delete = this.delete.bind(this);
        this.Active_inactive = this.Active_inactive.bind(this);
        this.export = this.export.bind(this);
        this.mainedit = this.mainedit.bind(this);

  }
  componentDidMount()
  {
    this.func(this.state.first,this.state.rows);

  }

func(start,totalrow)
  {
    setTimeout(() => {
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
this.setState({items:result.items,re:true,count:result.totalRecord,loading:false});
              console.log(result.totalRecord);
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
   datapage(field) {
     var id=field.id;
     return(
       <div>
       <p onClick ={() => this.mainedit(id)}>{id}</p>
       </div>
   );
   }
   mainedit(id){
    this.props.history.push(`/media_content/${id}/metadata`);
   }
  actionTemplate(field) {
    var id=field.id;
    return(
      <div>
      <Button style={{height:'18px', width:'18px'}} type="button" icon="pi pi-pencil" className="p-button-primary" onClick ={() => this.edit(id)}/>&nbsp;
      <Button style={{height:'18px', width:'18px'}} type="button" icon="pi pi-trash" className="p-button-danger" onClick ={() => this.delete(id)}/>
      </div>
  );
  }

  edit(id)
    { alert(id);
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
                        <button style={{height:'40px', width:'400px'}} class="btn btn-success" onClick ={() => this.update(id)} > Update </button>
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
     var content=status1==='1'?<button style={{fontSize:'10px'}} class="btn btn-success" onClick={() => this.Active_inactive(status1,field.id)}><b>Active</b></button>:<button style={{fontSize:'10px'}} class="btn btn-danger" onClick={() => this.Active_inactive(status1,field.id)}><b>Inactive</b></button>
     return content;
   }

   addNew() {
alert('add user');
 }

 export() {
         this.dt.exportCSV();
     }
   icon(e)
   {
     return <div className={e.icon}></div>
   }
  render() {
          var recCount = this.state.count;
          var footer = "There are total " + recCount + ' record';
          var header = <div>
              <div style={{textAlign:'left'}}><Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV" onClick={this.export}/></div>
          <div style={{'textAlign':'right'}}>
          <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" size="30"/>
            <i className="pi pi-search"  style={{margin:'4px 4px 0 0'}}></i>
          </div></div>
    return (
      <div className="category">
        <div className="add-category" style={{color:'black'}}>
              <h3>Add Category <Button style={{height:'24px', width:'24px'}} icon="pi pi-plus" onClick={this.addNew}/></h3>
        </div>
        <div className="total-record">
        <div className="side-div"></div>
        <Zoom>  <Fade>
            <DataTable value={this.state.items} header={header} footer={footer} fade={true} globalFilter={this.state.globalFilter} ref={(el) => { this.dt = el; }} resizableColumns={true} scrollable={true} scrollHeight="245px" lazy={true} responsive={false} loading={this.state.loading} style={{ fontSize: '13px' }}>

             <Column header="ID" body={this.datapage.bind(this)} style={{textAlign:'center',width:'8%'}}/>
                <Column field="name" header="NAME" sortable={true} style={{textAlign:'center',width:'20%'}} />
                <Column field="icon" header="ICON" body={this.icon} style={{textAlign:'center'}} />
                <Column field="url" header="URL" style={{textAlign:'center',width:'20%'}}/>
                <Column field="date" header="DATE" style={{textAlign:'center'}} />
                <Column field="status" header="STATUS"  body={this.status} style={{textAlign:'center'}} />
                <Column header="ACTION" body={this.actionTemplate.bind(this)} style={{textAlign:'center'}}/>
            </DataTable>
       <Paginator first={this.state.first} rows={this.state.rows} totalRecords={this.state.count} rowsPerPageOptions={[6,10,20,30]} onPageChange={this.onPageChange}></Paginator>
       </Fade></Zoom>
        </div>
        <Modal isOpen={this.state.open} toggle={this.onCloseModal} fade={true} onOpened={this.editdata.bind(this)}>
        <ModalHeader toggle={this.onCloseModal}><b>EDIT RECORDS</b></ModalHeader>
        <ModalBody id="editable">
        <Loader options={options} className="spinner" />
        </ModalBody>
        </Modal>
      </div>

    );
  }
}

export default Category;
