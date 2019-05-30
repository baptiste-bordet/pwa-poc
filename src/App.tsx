import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Login from "@Pages/Login";
import Todo from "@Pages/Todo";

import store from "./store";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
        <Route exact path="/" component={Login} />
        <Route path="/todo" component={Todo} />
    </Router>
  </Provider>
);


ReactDOM.render(
  <Root store={store}/>,
  document.getElementById("root")
);
