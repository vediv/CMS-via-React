import React, { Component } from 'react';

export default class FileUploadComponent extends Component
{
   constructor(props) {
      super(props);
      this.state ={
        image: ''
      }
      this.onFormSubmit = this.onFormSubmit.bind(this)
      this.onChange = this.onChange.bind(this)
      this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e){
      e.preventDefault()
      this.fileUpload(this.state.image);
    }
    onChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
            return;
      this.createImage(files[0]);
    }
    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({
          image: e.target.result
        })
      };
      reader.readAsDataURL(file);
    }
    fileUpload(image){
            var formdata = new FormData();
            formdata.append("action", "upload");
            formdata.append("image", this.state.image);
            console.log(this.state.image);
            fetch('http://192.168.24.46/cms/main.php', {
              mode: 'no-cors',
                method: "POST",
                headers: {
                  "Content-Type": "multipart/form-data; boundary=AaB03x" +
                  "--AaB03x" +
                  "Content-Disposition: file" +
                  "Content-Type: png" +
                  "Content-Transfer-Encoding: binary" +
                  "...data... " +
                  "--AaB03x--",
                  "Accept": "application/json",
                  "type": "formData"
                },
                body: formdata
           }).then((res) => res.json())
           .then((data) =>  {
              console.log(data);
             }
          ).catch((err) => console.log(err));
          }


   render()
   {
      return(

         <form onSubmit={this.onFormSubmit} enctype="multipart/form-data" method='post'>
        <h1> File Upload </h1>
        <input type="file" name="image"  onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
      )
   }
}




















// import React, { Component } from 'react';
// import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
// import '../css/upload.css';
// import {FileUpload} from 'primereact/fileupload';
//
// export default class upload extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//
//         };
//     }
//     uploadfiles (e) {
//       e.preventDefault();
//       var name = document.getElementById('name').value;
//       var host = document.getElementById('host').value;
//       var file = document.getElementById('file').value;
//
//       var formdata = new FormData();
//
//       formdata.append("action", "upload");
//       formdata.append("name", name);
//       formdata.append("host", host);
//       formdata.append("image", file);
//
//       fetch('http://192.168.24.46/cms/main.php', {
//          method: 'POST',
//          body:formdata
//      }).then((res) => res.json())
//      .then((data) =>  {
//         console.log(data);
//        }
//     ).catch((err) => console.log(err));
//     }
//     render() {
//         return (<div >
//           <div className="app flex-row align-items-center">
//             <Container fixed>
//               <Row className="justify-content-center">
//                 <Col md="8">
//                   <CardGroup >
//                     <Card className="p-4">
//                       <CardBody>
//                         <Form>
//                           <h1>Upload</h1>
//                           <InputGroup className="mb-3">
//                             <InputGroupAddon addonType="prepend">
//                               <InputGroupText>
//                                 <i className="fa fa-file"></i>
//                               </InputGroupText>
//                             </InputGroupAddon>
//                             <Input type="text" id="name" placeholder="File Name" />
//                           </InputGroup>
//                           <InputGroup className="mb-4">
//                             <InputGroupAddon addonType="prepend">
//                               <InputGroupText>
//                                 <i className="fa fa-server"></i>
//                               </InputGroupText>
//                             </InputGroupAddon>
//                             <Input type="text" id="host" placeholder="Server IP" />
//                           </InputGroup>
//                           <InputGroup className="mb-4">
//                             <Input type="file" id="file" name="image"/>
//                           </InputGroup>
//                           <Row>
//                             <Col>
//                               <Button color="success" onClick={this.uploadfiles.bind(this)} >Upload</Button>
//                             </Col>
//                           </Row>
//                         </Form>
//                       </CardBody>
//                     </Card>
//                   </CardGroup>
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//           </div>
//
//               );
//             }
// }






















// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { FilePond, File, registerPlugin } from 'react-filepond';
// import 'filepond/dist/filepond.min.css';
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
//
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
//
//
// export default class App extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             files: ['index.html']
//         };
//     }
//
//     render() {
//         return (
//             <div className="App">
//
//                 <FilePond allowMultiple={true}
//                           maxFiles={3}
//                           server="/api"
//                           onupdatefiles={(fileItems) => {
//                               this.setState({
//                                   files: fileItems.map(fileItem => fileItem.file)
//                               });
//                           }}>
//
//                     {this.state.files.map(file => (
//                         <File key={file} src={file} origin="local" />
//                     ))}
//
//                 </FilePond>
//
//             </div>
//         );
//     }
// }
