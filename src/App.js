import logo from './logo.svg';
import './App.css';
import { Home } from "./Components/home/home";
import { Nav } from "./Components/nav/nav";
import { Department } from "./Components/department/department";
import { Login } from "./Components/auth/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState,useEffect } from 'react'


function App() {
  useEffect(()=>{
    fetchItems();
},[])
const fetchItems = async ()=>{
    const data = await fetch(
        'https://fortnite-api.com/v2/shop/br'
    )
    const dataset = await data.json();
    console.log("data fetching",dataset);
};
  return (
    <Router>
      <div className="containercls">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/department" component={Department} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
