 import './App.css'
import React from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Main from './Main'
import Detail from './Detail';




const App = () => {

  return ( 
    <Router>
      <Route path='/' component={Main} exact></Route>
      <Route path='/detail/:name/:id' component={Detail} />
    </Router>

   )

  }
export default App;
