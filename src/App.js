import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.components.jsx';

import './App.css';





function App() {
  return (
    <div >
      <Switch>
    <Route exact path='/' component={Homepage}/>
    <Route path='/shop' component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
