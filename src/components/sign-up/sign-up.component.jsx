import React,{useState} from 'react';
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';
//import { useState } from 'react/cjs/react.development';



const  SignUp = () => {
    // constructor(){
    //     super();

    //     this.state = {
    //        displayName:'',
    //        email:'',
    //        password:'',
    //        confirmPassword:''
    //     }
    // }

const [credentials, setCredentials] = useState({displayName:'',email:'',
password:'',
confirmPassword:''})

const {displayName, email, password, confirmPassword } = credentials;

   const handleSubmit = async event =>{
        event.preventDefault();

      
        if(password !== confirmPassword){
            alert("Passwords don't match")
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)

           await createUserProfileDocument(user,{ displayName});

           setCredentials({displayName:'',email:'',
           password:'',
           confirmPassword:''})

       

        }catch(error){
          console.error(error);
        }

    };

  const   handleChange = event => {
        const {name, value} = event.target;

       setCredentials({...credentials,[name]:value});
    }



  
        return(
            <div className='sign-up'>
             <h2 className='title'>I do not have an Account</h2>
             <span>Sign up with your username and password</span>
             <form className='sign-up-form' onSubmit={handleSubmit}>
                 <FormInput type= 'text' name='displayName' value={displayName} onChange={handleChange} label='DisplayName' required />
                 <FormInput type= 'email' name='email' value={email} onChange={handleChange} label='Email' required />
                 <FormInput type= 'password' name='password' value={password} onChange={handleChange} label='Password' required />
                 <FormInput type= 'password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='ConfirmPassword' required />
                 <CustomButton type='submit'>Sign Up</CustomButton>


             </form>
            </div>
        );
    }


export default SignUp;