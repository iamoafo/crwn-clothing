import React,{useState} from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';
import Icon from '../../assets/g-logo.png';







const SignIn = () =>{
    
    const [userCredentials, setCredentials] = useState({ email:'', password: ''})

    const { email, password} = userCredentials

    const handleSubmit = async event =>{
        event.preventDefault();


        try{
           await auth.signInWithEmailAndPassword(email,password);
           setCredentials({email:'',password:''})
        }catch(error){
          console.log(error);
        }


        setCredentials({email:'',password:''})
    }

   const  handleChange = event =>{
        const {value,name} = event.target;

        setCredentials({...userCredentials,[name]:value})
    }

  
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                 <span>Sign in with your email and password</span>

                 <form onSubmit={handleSubmit}>
                     <FormInput type='email' name='email' value={email} label='email' handleChange={handleChange} required />
                    

                     <FormInput type='password' name='password' value={password} label='password' handleChange={handleChange} required />
                    

                     <div className='buttons'>
                     <CustomButton type='submit'>Sign In</CustomButton>
                     <CustomButton onClick={signInWithGoogle} type="button" isGoogleSignIn><div className='icon-wrapper'>
                         <img className='icon' src= {Icon}/></div>Sign In with Google</CustomButton>
                         </div>
                 </form>
            </div>
        )
    }


export default SignIn;