import React, { Component } from "react";
import {
    Routes,
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import WhereToGo from "./WhereToGo";
  import WhatToDo from "./WhatToDo";
  import PlanVisit from "./PlanVisit";
  import Questions from "./Contact";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>Visit France</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/WhereToGo">Where to go?</NavLink></li>
                    <li><NavLink to="/WhatToDo">What to do?</NavLink></li>
                    <li><NavLink to="/PlanVisit">Plan your visit</NavLink></li>
                    <li><NavLink to="/Questions">Questions</NavLink></li>
                </ul>
                <div className="content"> 
                    <Routes>
                            <Route path="/" element={<Home/>}></Route>
                            <Route path="/WhereToGo" element={<WhereToGo/>}></Route>
                            <Route path="/WhatToDo" element={<WhatToDo/>}></Route> 
                            <Route path="/PlanVisit" element={<PlanVisit/>}></Route>
                            <Route path="/Questions" element={<Questions/>}></Route> 
                    </Routes>                          
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;