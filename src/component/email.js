import React, { Component } from 'react';

export default class email extends Component
{
   constructor(props) {
      super(props);
      this.state ={

      }
    }

   render()
   {
      return(

        <form id="contactForm">
<fieldset className="form-group">
<label style={{color:'aqua'}}>Name</label>
<input type="text"  className="form-control" id="form_name"/>
</fieldset>

<fieldset className="form-group">
<label style={{color:'aqua'}}>E-mail:</label>
<input className="form-control" id="form_email" type="email" />
</fieldset>

<fieldset className="form-group">
<label style={{color:'aqua'}}>Subject:</label>
<input className="form-control" id="form_subject" type="text" />
</fieldset>

<fieldset className="form-group">
<label style={{color:'aqua'}}>Message:</label>
<textarea  className="form-control" id="form_msg"  ></textarea>
</fieldset>

</form>


      )
   }
}
