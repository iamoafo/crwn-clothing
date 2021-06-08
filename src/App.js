import React,{useEffect} from 'react';
import Homepage from './pages/homepage/homepage.component';
import {Route, Switch,Redirect} from 'react-router-dom';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/shop/shop.components.jsx';
import ContactPage from './pages/contact/contact.component';

import Header from './components/header/header.component.jsx'
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from "./redux/user/user.selector";
import  CheckoutPage  from './pages/checkOut/checkout.component';
import { createStructuredSelector } from "reselect";


import './App.css';



const App = ({currentUser,setCurrentUser,unsubscribeFromAuth}) => {
  // constructor(){
  //   super();

  //   this.state = {
  //     currentUser: null
  //   };
    
  // }
  unsubscribeFromAuth = null;
  useEffect(() => {
    

  unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
   if(userAuth){
     const userRef = await createUserProfileDocument(userAuth);

     userRef.onSnapshot(snapShot => {
      setCurrentUser(
          {
           id: snapShot.id,
           ...snapShot.data()
         });
     
      });
     
   }

 else{
     setCurrentUser(userAuth);
    // addCollectionandDocuments('collections',collectionsArray.map(({title,items})=> ({title,items})));
 }
   
  });
      },[])

  
  
  

// componentWillUnmount(){
//   this.unsubscribeFromAuth();
//    }

  
  return (
    <div >
      <Header/>
      <Switch>
    <Route exact path='/' component={Homepage}/>
    <Route path='/shop' component={ShopPage}/>
    <Route path='/contact' component={ContactPage}/>
    <Route exact path='/checkout' component={CheckoutPage}/>
    <Route exact path='/signin' render={() => currentUser ? (<Redirect TO='/'/>) : (<SignInAndSignUp/>)}/>
    
    </Switch>
    </div>
  );
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
