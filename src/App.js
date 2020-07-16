import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
// import Layout from "./components/Layout";

import News from "./components/News/News";

import Quiz from "./components/Quiz/Quiz";
import Body from "./components/Body/Body";


import Map from "./components/Map/Map";

import ReportForm from "./components/Report/ReportForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/risk-check" exact component={Quiz} /> 
          <Route path="/news-update" component={News} />
          <Route path="/Report" component={ReportForm} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;





