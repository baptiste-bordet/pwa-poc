import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Todo from "@Pages/Todo";

import store from "./store";


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


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.info('SW registered: ', registration);
    }).catch(registrationError => {
      console.info('SW registration failed: ', registrationError);
    });
  });
}
