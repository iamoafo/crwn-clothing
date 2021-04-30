import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './contactForm.styles.scss'

class ContactForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        FullName: '',
        email:''
    }
  }





render(){
  return(
   
    <div className='contactForm'>
        <h2 className='title'>Leave us a message</h2>
      <form>
                 <FormInput type= 'text' name='displayName' value={this.state.FullName}  label='FullName' required />
                 <FormInput type= 'email' name='email' value={this.state.email}  label='Email' required />
                 <label for="w3review">Please leave us a comment</label><br></br>
                 <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
                 <CustomButton type='submit'>Send</CustomButton>          
      </form>
      
    </div>
  )
}

}


  export default ContactForm