import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import {Route, Switch,Redirect} from 'react-router-dom';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/shop/shop.components.jsx';
import Header from './components/header/header.component.jsx'
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'

import './App.css';



class App extends React.Component {
  // constructor(){
  //   super();

  //   this.state = {
  //     currentUser: null
  //   };
    
  // }
  

  unsubscribeFromAuth = null;
  
  
componentDidMount(){
  const {setCurrentUser} = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
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
 }
   
  });

}
componentWillUnmount(){
  this.unsubscribeFromAuth();
   }

  render(){
  return (
    <div >
      <Header/>
      <Switch>
    <Route exact path='/' component={Homepage}/>
    <Route path='/shop' component={ShopPage}/>
    <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect TO='/'/>) : (<SignInAndSignUp/>)}/>

    </Switch>
    </div>
  );
  }
}

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch =>({
setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
