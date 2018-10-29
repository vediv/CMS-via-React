import React, {Component} from 'react';
import MetisMenu from 'react-metismenu';
import 'react-metismenu/dist/react-metismenu-standart.css';

export default class AccordionDemo extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      items:[]
    }
  }
  componentDidMount()
  {
    this.func();

  }

func()
  {
        var formData = new FormData();
        formData.append("action","category1");
        fetch('http://192.168.24.46/cms/main.php', {
        method: 'POST',
        body: formData
        }).then((res) => res.json())
      .then((result) =>  {
        this.setState({items:result.items});
console.log(this.state.items);
     })
      .catch((err)=>console.log(err))

  }
    render() {
        return (
            <div>
                 <MetisMenu
                 content={this.state.items} activeLinkFromLocation
                 className="my-menu"
 clasNameLink="my-menu-link"
 iconNameStateVisible="minus"
 iconNameStateHidden="plus"
 />
                </div>)
              }}

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemTitle,
//     AccordionItemBody,
// } from 'react-accessible-accordion';
//
// // Demo styles, see 'Styles' section below for some notes on use.
// import 'react-accessible-accordion/dist/fancy-example.css';
//
//
// const Example = () => (
//     <Accordion>
//         <AccordionItem>
//             <AccordionItemTitle>
//                 <h6>Simple title</h6>
//             </AccordionItemTitle>
//             <AccordionItemBody>
//             <Accordion>
//                 <AccordionItem>
//                     <AccordionItemTitle>
//                         <h6>Simple title</h6>
//                     </AccordionItemTitle>
//                     <AccordionItemBody>
//                         <p>Body content</p>
//                     </AccordionItemBody>
//                 </AccordionItem>
//                 <AccordionItem>
//                     <AccordionItemTitle>
//                         <h6>Complex title</h6>
//
//                     </AccordionItemTitle>
//                     <AccordionItemBody>
//                         <p>Body content</p>
//                     </AccordionItemBody>
//                 </AccordionItem>
//             </Accordion>
//             </AccordionItemBody>
//         </AccordionItem>
//         <AccordionItem>
//             <AccordionItemTitle>
//                 <h6>Complex title</h6>
//             </AccordionItemTitle>
//             <AccordionItemBody>
//                 <p>Body content</p>
//             </AccordionItemBody>
//         </AccordionItem>
//     </Accordion>
// );
// export default Example;

//
// import React from 'react';
// import Collapsible from 'react-collapsible';
//
// var App = React.createClass({
//
//  render: function() {
//    return(
//
//      <Collapsible trigger="Start here">
//        <p>This is the collapsible content. It can be any element or React component you like.</p>
//        <p>It can even be another Collapsible component. Check out the next section!</p>
//      </Collapsible>
//
//    );
//  }
//
// });
//
// export default App;

// import React, {Component} from 'react';
// import {Accordion,AccordionTab} from 'primereact/accordion';
// import 'primereact/resources/themes/nova-light/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
//
// export default class AccordionDemo extends Component {
//
//     render() {
//         return (
//             <div>
//                 <div className="content-section introduction">
//                     <div className="feature-intro">
//                         <h1>Accordion</h1>
//                         <p>Accordion groups a collection of contents in tabs.</p>
//                     </div>
//                 </div>
//
//                 <div className="content-section implementation">
//                     <h3>Default</h3>
//                     <Accordion>
//                         <AccordionTab header="Godfather I">
//                             The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
//                             His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
//                             Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
//                             of the family, kind and benevolent to those who give respect,
//                             but given to ruthless violence whenever anything stands against the good of the family.
//                         </AccordionTab>
//                         <AccordionTab header="Godfather II">
//                             Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
//                             Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
//                             the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
//                             Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
//                             Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
//                         </AccordionTab>
//                         <AccordionTab header="Godfather III">
//                             After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
//                             third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
//                             now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
//                         </AccordionTab>
//                     </Accordion>
//
//                     <h3>Multiple</h3>
//                     <Accordion multiple={true}>
//                         <AccordionTab header="Godfather I">
//                             The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
//                             His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
//                             Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
//                             of the family, kind and benevolent to those who give respect,
//                             but given to ruthless violence whenever anything stands against the good of the family.
//                         </AccordionTab>
//                         <AccordionTab header="Godfather II">
//                             Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
//                             Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
//                             the American dream. In the early 1900, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
//                             Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
//                             Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
//                         </AccordionTab>
//                         <AccordionTab header="Godfather III">
//                             After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
//                             third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
//                             now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
//                         </AccordionTab>
//                         <AccordionTab header="Godfather IV" disabled={true}></AccordionTab>
//                     </Accordion>
//                 </div>
//
//             </div>
//         )
//     }
// }
//


// import React, { Component } from 'react';
// import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'
//
// export default class MyComponent extends Component {
//
//     constructor() {
//         super();
//     }
//
//     render() {
//         return (
//         <div>
//             ...
//             <CollapsibleComponent>
//                 <CollapsibleHead className="additionalClassForHead">Head title 1</CollapsibleHead>
//                 <CollapsibleContent className="additionalClassForContent">
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                     laboris nisi ut aliquip ex </p>
//                 </CollapsibleContent>
//
//                 <CollapsibleHead isExpanded={false}>Head title 2</CollapsibleHead>
//                 <CollapsibleContent isExpanded={false}>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//                     dolor in reprehenderit in voluptate velit esse cillum dolore eu
//                     fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//                     sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                 </CollapsibleContent>
//
//                 <CollapsibleHead>Head title 3</CollapsibleHead>
//                 <CollapsibleContent>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                     laboris nisi ut aliquip ex ea commodo consequat. </p>
//                 </CollapsibleContent>
//             </CollapsibleComponent>
//         </div>
//         )
//     }
// }
//

// import React, {Component} from 'react';
// import {PanelMenu} from 'primereact/panelmenu';
// import 'primereact/resources/themes/nova-light/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
//
// export default class PanelMenuDemo extends Component {
//
//     constructor() {
//         super();
//         this.state = {
//             items:[
//                 {
//                    label:'File',
//                    icon:'pi pi-fw pi-file',
//                    items:[
//                       {
//                          label:'New',
//                          icon:'pi pi-fw pi-plus',
//                          items:[
//                             {
//                                label:'Bookmark',
//                                icon:'pi pi-fw pi-bookmark'
//                             },
//                             {
//                                label:'Video',
//                                icon:'pi pi-fw pi-video'
//                             },
//
//                          ]
//                       },
//                       {
//                          label:'Delete',
//                          icon:'pi pi-fw pi-trash'
//                       },
//                       {
//                          label:'Export',
//                          icon:'pi pi-fw pi-external-link'
//                       }
//                    ]
//                 },
//                 {
//                    label:'Edit',
//                    icon:'pi pi-fw pi-pencil',
//                    items:[
//                       {
//                          label:'Left',
//                          icon:'pi pi-fw pi-align-left'
//                       },
//                       {
//                          label:'Right',
//                          icon:'pi pi-fw pi-align-right'
//                       },
//                       {
//                          label:'Center',
//                          icon:'pi pi-fw pi-align-center'
//                       },
//                       {
//                          label:'Justify',
//                          icon:'pi pi-fw pi-align-justify'
//                       },
//
//                    ]
//                 },
//                 {
//                    label:'Users',
//                    icon:'pi pi-fw pi-user',
//                    items:[
//                       {
//                          label:'New',
//                          icon:'pi pi-fw pi-user-plus',
//
//                       },
//                       {
//                          label:'Delete',
//                          icon:'pi pi-fw pi-user-minus',
//
//                       },
//                       {
//                          label:'Search',
//                          icon:'pi pi-fw pi-users',
//                          items:[
//                             {
//                                label:'Filter',
//                                icon:'pi pi-fw pi-filter',
//                                items:[
//                                   {
//                                      label:'Print',
//                                      icon:'pi pi-fw pi-print'
//                                   }
//                                ]
//                             },
//                             {
//                                icon:'pi pi-fw pi-bars',
//                                label:'List'
//                             }
//                          ]
//                       }
//                    ]
//                 },
//                 {
//                    label:'Events',
//                    icon:'pi pi-fw pi-calendar',
//                    items:[
//                       {
//                          label:'Edit',
//                          icon:'pi pi-fw pi-pencil',
//                          items:[
//                             {
//                                label:'Save',
//                                icon:'pi pi-fw pi-calendar-plus'
//                             },
//                             {
//                                label:'Delete',
//                                icon:'pi pi-fw pi-calendar-minus'
//                             }
//                          ]
//                       },
//                       {
//                          label:'Archieve',
//                          icon:'pi pi-fw pi-calendar-times',
//                          items:[
//                             {
//                                label:'Remove',
//                                icon:'pi pi-fw pi-calendar-minus'
//                             }
//                          ]
//                       }
//                    ]
//                 }
//              ]
//         };
//     }
//
//     render() {
//         return (
//             <div>
//                 <div className="content-section introduction">
//                     <div className="feature-intro">
//                         <h1>PanelMenu</h1>
//                         <p>PanelMenu is a hybrid of accordion-tree components.</p>
//                     </div>
//                 </div>
//
//                 <div className="content-section implementation">
//                     <PanelMenu model={this.state.items} style={{width:'300px'}}/>
//                 </div>
//             </div>
//         );
//     }
// }




// import React, {Component} from 'react';
// import {BootstrapTable, TableHeaderColumn}
//         from 'react-bootstrap-table';
//
//
// function onInsertRow(row) {
//   let newRowStr = ''
//
//   for (const prop in row) {
//     newRowStr += prop + ': ' + row[prop] + ' \n'
//   }
//   alert('You inserted:\n ' + newRowStr)
// }
//
//
// function onDeleteRow(rowKeys) {
//   alert('You deleted: ' + rowKeys)
// }
//
// class Table7 extends Component {
//   render() {
//     const options = {
//       afterInsertRow: onInsertRow,
//       afterDeleteRow: onDeleteRow
//     }
//     const cellEditProp = {
//       mode: 'click', // 'dbclick' for trigger by double-click
//       nonEditableRows: function() {
//         return [3];
//       }
//     }
//     // To delete rows you be able to select rows
//     const selectRowProp = {
//       mode: 'checkbox'
//     }
//     const onTableChange = (type, newState) => {
//
// }
//
//     return (
//       <div>
//         <BootstrapTable data={this.props.data}
//                         cellEdit={cellEditProp}
//                         insertRow={true}
//                         deleteRow={true}
//                         selectRow={selectRowProp}
//                         options={options}
//                         onTableChange={ onTableChange }
//         >
//           <TableHeaderColumn isKey dataField='id'
//           >
//             ID
//           </TableHeaderColumn>
//           <TableHeaderColumn dataField='name'
//           >
//             Name
//           </TableHeaderColumn>
//           <TableHeaderColumn dataField='icon'
//           >
//             Icon
//           </TableHeaderColumn>
//           <TableHeaderColumn dataField='value'
//           >
//             Value
//           </TableHeaderColumn>
//         </BootstrapTable>
//       </div>
//     )
//   }
// }
//
// export default Table7

// import React from "react";
// import { render } from "react-dom";
// import Modal from "react-responsive-modal";
// import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
//
// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };
//
// export default class Dialog extends React.Component {
//   state = {
//     open: false
//   };
//
//   onOpenModal = () => {
//     this.setState({ open: true });
//   };
//
//   onCloseModal = () => {
//     this.setState({ open: false });
//   };
//
//   render() {
//     const { open } = this.state;
//     return (
//       <div style={styles}>
//         <h2>react-responsive-modal</h2>
//         <button onClick={this.onOpenModal}>Open modal</button>
//         <Modal open={open} onClose={this.onCloseModal} center>
//           <h2>Simple centered modal</h2>
//           <p>
//             <Input type="text" id="email" placeholder="Email" autoComplete="email" />
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//             pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
//             hendrerit risus, sed porttitor quam.
//           </p>
//         </Modal>
//       </div>
//     );
//   }
// }
