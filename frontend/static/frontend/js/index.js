import React from 'react';
import ReactDOM from 'react-dom';

import ProviderApp from "./components/ProviderApp";
import RequesterApp from "./components/RequesterApp";
import App from "./components/App";


try {
  ReactDOM.render(
    <App/>,
    document.getElementById('requester'),
  );
}
catch(err) {
  ReactDOM.render(
    <App/>,
    document.getElementById('provider'),
  );
}