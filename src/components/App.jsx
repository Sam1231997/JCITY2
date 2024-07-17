



import "./index.css"
import React from "react";
// import {data} from "./Data"
// import {useState, useEffect} from 'react'
// import Header from "./Header";
// import Footer from "./Footer";
// import Search from "./Header";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { BrowserRouter as Router, Route,  Switch, Link} from 'react-router-dom';

import NowIJ from "./NowIJ";
import Accomodation from "./Accomodation";
import Restaurant from "./Restaurant";
import Shopping from "./Shopping";
import Attraction from "./Attraction";
import Header from "./Header";







const App = () => {
  return(
    <Router>
    <div className="App">
    <Header/>
      <div className="content">
      <Switch>
      <Route exact path="/nowij" >
      <NowIJ />
        </Route>
        <Route  path="/accomodation" >
      <Accomodation/>
        </Route>
        <Route  path="/restaurant" >
      <Restaurant/>
        </Route>
        <Route  path="/shopping" >
      <Shopping/>
        </Route>
        <Route  path="/attraction" >
      <Attraction/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>  
  )
  
}

export default App;
