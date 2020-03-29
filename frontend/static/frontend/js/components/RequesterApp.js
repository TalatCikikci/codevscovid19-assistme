import React, {Component, Fragment} from 'react';

import RequesterHeader from "./layout/RequesterHeader";


export default class RequesterApp extends Component {
  render() {
    return (
      <Fragment>
        <RequesterHeader/>
        RequesterApp
      </Fragment>
    )
  }
}