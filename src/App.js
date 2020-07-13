import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Layout from "./components/Layout";

import News from "./components/News/News";

import Quiz from "./components/Quiz/Quiz";






function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Layout} />
          <Route path="/risk-check" exact component={Quiz} /> 
          <Route path="/news-update" component={News} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;





