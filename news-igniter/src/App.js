import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsItems from './components/NewsItems'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
     <Router>
       <Navbar/>
       <Routes>
         
         <Route exact path = "/"  element={<NewsItems key="general" pageSize={6} country={"in"} category={"general"}/>}/>
         
        <Route exact path = "/technology"  element={<NewsItems key="technology" pageSize={6} country={"in"} category={"technology"}/>}/> 
        <Route exact path = "/business"  element={<NewsItems key="business" pageSize={6} country={"in"} category={"business"}/>}/> 
        <Route exact path = "/entertainment"  element={<NewsItems key="entertainment" pageSize={6} country={"in"} category={"entertainment"}/>}/> 
        <Route exact path = "/health"  element={<NewsItems key="health" pageSize={6} country={"in"} category={"health"}/>}/> 
        <Route exact path = "/science"  element={<NewsItems key="science" pageSize={6} country={"in"} category={"science"}/>}/> 
        
         
     
       </Routes>
       </Router>
      
    )
  }
}

