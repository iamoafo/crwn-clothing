import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/shop/shop.components.jsx';
import Header from './components/header/header.component.jsx'
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

import './App.css';



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
    
  }

  unsuscribeFromAuth = null;
  
  
componentDidMount(){
  this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
   if(userAuth){
     const userRef = await createUserProfileDocument(userAuth);

     userRef.onSnapshot(snapShot => {
       this.setState({
         currentUser: {
           id: snapShot.id,
           ...snapShot.data()
         }
       });
     });
     
   }

 else{
     this.setState({currentUser:userAuth});
 }
   
  });

}
componentWillUnmount(){
  this.unsuscribeFromAuth();
   }

  render(){
  return (
    <div >
      <Header currentUser={this.state.currentUser}/>
      <Switch>
    <Route exact path='/' component={Homepage}/>
    <Route path='/shop' component={ShopPage}/>
    <Route path='/signin' component={SignInAndSignUp}/>

    </Switch>
    </div>
  );
  }
}

export default App;
