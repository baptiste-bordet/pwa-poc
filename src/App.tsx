import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from 'styled-components'

import Todo from "@Pages/Todo";

import store from "./store";


const GlobalStyle = createGlobalStyle`
  body {
    background: #f1f1f1;
    padding: 20px 30%;
    
    @media (max-width: 700px) {
      padding: 0 10px;
    }
  }
`;


const Root = ({store}) => (
  <Provider store={store}>
    <GlobalStyle />
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

window.addEventListener('beforeinstallprompt', (e: any) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Show the prompt
  e.prompt();

  e.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
    });
});
