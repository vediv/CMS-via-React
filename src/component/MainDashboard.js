import React, { Component } from 'react';
import { Card, CardBody, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import total from './total.png';
import active from './active.png';
import inactive from './inactive.png';
import {CardColumns, CardHeader } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Bar, Doughnut} from 'react-chartjs-2';
import YearPicker from "react-year-picker";
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state={
      total:0,
      active:0,
      inactive:0,
      active_pie:0,
      inactive_pie:0,
      date:[],
      date1:2018

    }
    }

componentDidMount()
{
  this.getdashboard_info();
  this.getpiechart_info(this.state.date1);
}
getdashboard_info()
{
  var formData = new FormData();
  formData.append("action",'dashboard_info');
  fetch('http://192.168.24.46/cms/main.php', {
  method: 'POST',
  body: formData
  }).then((res) => res.json())
  .then((result) =>  {
    this.setState({total:result.total,active:result.active,inactive:result.inactive});
  })
  .catch((err)=>console.log(err));

}
getpiechart_info(date1)
{
  this.setState({
    date1:date1
  });
  var formData = new FormData();
  formData.append("action",'charts');
  formData.append("date",date1);
  fetch('http://192.168.24.46/cms/main.php', {
  method: 'POST',
  body: formData
  }).then((res) => res.json())
  .then((result) =>  {
    console.log(result);
this.setState({active_pie:result.active,inactive_pie:result.inactive,date:result.items});
  })
  .catch((err)=>console.log(err));
}

  render()
  {
    const bar = {
      labels: this.state.date.map((result, index)=>{
        return result.date
      }),
      datasets: [
        {
          label: `Records of ${this.state.date1}`,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: this.state.date.map((result, index)=>{
            return result.user
          }),
        },
      ],
    };
    const pie = {
      labels: [
      `${this.state.active_pie} Active`,
        `${this.state.inactive_pie} Inactive`,
      ],
      datasets: [
        {
          data: [this.state.active_pie, this.state.inactive_pie],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
          ]
        }],
    };

    const options = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips
      },
      maintainAspectRatio: false
    }
    return (
    <div >
    <Fade><Zoom>
        <Card className="p-4">
          <CardBody>
          <InputGroup className="mb-3">
            <InputGroupAddon  addonType="prepend">
            <InputGroupText style={{background:'#0592de'}}>
              <img src={total} style={{width:60,height:60}} alt={total}/><br/>
              <b>Total users</b>
            </InputGroupText>
            <InputGroupText>
              <h1 style={{color:'black'}}>{this.state.total}</h1>
            </InputGroupText>
            </InputGroupAddon>
            <InputGroupAddon  addonType="prepend" >
            <InputGroupText style={{background:'#FF7F50'}}>
              <img src={active} style={{width:60,height:60}} alt={active}/>
                <b>Active users</b>
            </InputGroupText>
            <InputGroupText>
              <h1 style={{color:'black'}}>{this.state.active}</h1>
            </InputGroupText>
            </InputGroupAddon>
            <InputGroupAddon  addonType="prepend" >
            <InputGroupText style={{background:'#BDB76B '}}>
              <img src={inactive} style={{width:60,height:60}} alt={inactive}/>
                <b>Inactive users</b>
            </InputGroupText>
            <InputGroupText>
              <h1 style={{color:'black'}}>{this.state.inactive}</h1>
            </InputGroupText>
            </InputGroupAddon>
            </InputGroup>
          </CardBody>
        </Card>
          <CardColumns className="cols-2">
            <Card>
              <CardHeader>
                Bar Chart
                <div className="card-header-actions"><YearPicker onChange={this.getpiechart_info.bind(this)} />
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar} options={options} width={100} height={50} />
                </div>
              </CardBody>
            </Card>
            <Card>
             <CardHeader>
               Pie Chart
               <div className="card-header-actions">
               </div>
             </CardHeader>
             <CardBody>
               <div className="chart-wrapper">
                 <Doughnut data={pie} width={100} height={50} options={options}/>
               </div>
             </CardBody>
           </Card>
          </CardColumns>
          </Zoom></Fade>
    </div>
    );
  }
}
export default Cards;
