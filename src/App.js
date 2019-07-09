import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPageDetail = props => {
  console.log(props);
  return (
    <div>
      <h1>{`HatsPageDetail${props.match.params.id}`}</h1>
    </div>
  );
};

const HatsPage = () => (
  <div>
    <h1>HatsPage Main</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route path="/hats/:id" component={HatsPageDetail} />
      </Switch>
    </div>
  );
}

export default App;
