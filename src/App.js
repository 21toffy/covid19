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

import multiple from "./components/Body/multiple";



import formModalWrapper from "./components/Report/ReportForm";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/risk-check" exact component={Quiz} /> 
          <Route path="/news-update" exact component={News} />
          <Route path="/Report" exact component={formModalWrapper} />
          <Route path="/multiple" exact component={multiple} />
          <Route  component={NotFound} />

        </Switch>
      </Router>
    </div>
  );
}



export default App;





