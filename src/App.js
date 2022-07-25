import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
// import NewsItem from './component/NewsItem';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
export default class App extends Component {

  render() {
    return (
      <div>
          

        <Navbar/>
        <News pageSize={5} country="in" category="sport"/>
        
          {/* <Router> 
          <Switch>
          <Route path="/general"> <News pageSize={5} country="in" category="general"/> </Route>
           <Route path="/sport"> <News pageSize={5} country="in" category="sport"/> </Route>
           <Route path="/general"> <News pageSize={5} country="in" category="general"/> </Route>
           <Route path="/health"> <News pageSize={5} country="in" category="health"/> </Route>
         <Route path="/business"> <News pageSize={5} country="in" category="business"/> </Route>
           <Route path="/entertainment"> <News pageSize={5} country="in" category="entertainment"/> </Route>
           <Route path="/science"> <News pageSize={5} country="in" category="science"/> </Route>
           <Route path="/technology"> <News pageSize={5} country="in" category="technology"/> </Route>
       </Switch>

         </Router>  */}
        </div>
    )
  }
}





