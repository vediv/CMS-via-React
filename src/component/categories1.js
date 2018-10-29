import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {TieredMenu} from 'primereact/tieredmenu';
import {Paginator} from 'primereact/paginator';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
let x=-1;
export default class DataTableTemplatingDemo extends Component {
  constructor(props){
    super(props);
    this.state={
      records:[],
      first2:0,
      rows2:10
    };
  }
icon () {
 x=x+1;
return <div className ="{this.state.records[x].icon}"></div>

}
  actionTemplate(rowData, column) {
         return <div>
             <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
             <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
         </div>;
     }
  componentDidMount() {
  this.records();
  }
  onPageChange2(event) {
    this.setState({
        first2: event.first,
        rows2: event.rows
    });
}


  records () {
    var formdata = new FormData();
    formdata.append("action", "sidebar");
    fetch('http://192.168.24.46/cms/main.php', {
       method: 'POST',
       body:formdata
   }).then((res) => res.json())
   .then((data) =>  {
     this.setState({records:data.items});
     console.log(this.state.records);
  }).catch((err) => console.log(err));
  }

render() {
  var recCount = this.state.records ? this.state.records.length: 0;
  var header = <div className="p-clearfix" style={{'lineHeight':'1.87em'}}>List of Records <Button icon="pi pi-refresh" style={{'float':'right'}}/></div>;
  var footer = "There are " + recCount + ' records';
  return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Records</h1>
                    </div>

                </div>

                <div className="content-section implementation">
                    <DataTable  value={this.state.records} header={header} footer={footer} >

                        <Column field="name" header="Name" style={{textAlign:'center', width: '8em'}}/>
                        <Column field="icon" header="Icon" style={{textAlign:'center', width: '8em'}} body={this.icon.bind(this)}/>
                        <Column field="url" header="Url" style={{textAlign:'center', width: '8em'}}/>
                        <Column field="date" header="Date"style={{textAlign:'center', width: '8em'}} />
                        <Column field="status" header="Status" style={{textAlign:'center', width: '8em'}} />
                      <Column header="Action" body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>

                    </DataTable>
                    <Paginator first={0} rows={10} totalRecords={120} rowsPerPageOptions={[10,20,30]} onPageChange={this.onPageChange2}
                        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>
                </div>

            </div>
);}

}
