import React from 'react';
import ReactDOM from 'react-dom';

import ProviderApp from "./components/ProviderApp";
import RequesterApp from "./components/RequesterApp";


try {
  ReactDOM.render(
    <RequesterApp/>,
    document.getElementById('requester'),
  );
}
catch(err) {
  ReactDOM.render(
    <ProviderApp/>,
    document.getElementById('provider'),
  );
}