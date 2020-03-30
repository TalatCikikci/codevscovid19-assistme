import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import store from "../store";
import Header from "./layout/Header";
import RequesterMain from "./requester/RequesterMain";
import Alerts from './layout/Alerts';

const alertOptions = {
  timeout: 3000,
  position: 'top center'
};

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <Header/>
            <Alerts/>
            <div className="container">
              <RequesterMain/>
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App