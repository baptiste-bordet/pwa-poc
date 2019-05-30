import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Todo from "@Pages/Todo";

import store from "./store";
import * as serviceWorker from './serviceWorker';


const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Todo}/>
    </Router>
  </Provider>
);


ReactDOM.render(
  <Root store={store}/>,
  document.getElementById("root")
);

serviceWorker.register();
