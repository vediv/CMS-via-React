import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';



class Charts extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      items:[],
}
  }
  componentDidMount()
  {
    this.func();

  }
  func()
    {
          var formData = new FormData();
          formData.append("action","charts");
          fetch('http://192.168.24.46/cms/main.php', {
          method: 'POST',
          body: formData
          }).then((res) => res.json())
        .then((result) =>  {
  this.setState({items:result.items});
  
       })
        .catch((err)=>console.log(err))


  }
  render() {
    const bar = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };
    const pie = {
      labels: [
        'Red',
        'Green',
        'Yellow',
      ],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
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
      <div className="animated fadeIn">
        <CardColumns className="cols-2">
          <Card>
            <CardHeader>
              Bar Chart
              <div className="card-header-actions">
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
               <Pie data={pie} width={100} height={50}/>
             </div>
           </CardBody>
         </Card>
        </CardColumns>
      </div>
    );
  }
}

export default Charts;

// import React, { Component } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
//
//
//
// class Charts extends Component {
//   constructor(props)
//   {
//     super(props);
//     this.state={
//       users:[],
//       date:[]
//     }
//
//   }
//   componentDidMount()
//   {
//     this.chart();
//
//   }
//
// chart()
//   {
//         var formData = new FormData();
//         formData.append("action","charts");
//         fetch('http://192.168.24.46/cms/main.php', {
//         method: 'POST',
//         body: formData
//         }).then((res) => res.json())
//         .then((result) =>  {
//         this.setState({users:result.items.user,date:result.items.date});
//      })
//       .catch((err)=>console.log(err))
//
//   }
//   render() {
//     const bar = {
//       labels: this.state.users,
//       datasets: [
//         {
//           label: 'My First dataset',
//           backgroundColor: 'rgba(255,99,132,0.2)',
//           borderColor: 'rgba(255,99,132,1)',
//           borderWidth: 1,
//           hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//           hoverBorderColor: 'rgba(255,99,132,1)',
//           data: this.state.date,
//         },
//       ],
//     };
//
//     const options = {
//       tooltips: {
//         enabled: false,
//         custom: CustomTooltips
//       },
//       maintainAspectRatio: false
//     }
//     return (
//       <div className="animated fadeIn">
//         <CardColumns className="cols-2">
//
//           <Card>
//             <CardHeader>
//               Bar Chart
//               <div className="card-header-actions">
//                 <a href="http://www.chartjs.org" className="card-header-action">
//                   <small className="text-muted">docs</small>
//                 </a>
//               </div>
//             </CardHeader>
//             <CardBody>
//               <div className="chart-wrapper">
//                 <Bar data={bar} options={options} />
//               </div>
//             </CardBody>
//           </Card>
//
//
//         </CardColumns>
//       </div>
//     );
//   }
// }
//
// export default Charts;
