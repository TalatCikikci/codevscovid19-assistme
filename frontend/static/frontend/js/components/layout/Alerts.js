import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate (prevProps) {
    const { error, alert, message } = this.props;
    if ( error !== prevProps.error ) {
      for (let [key, value] of Object.entries(error.msg)){
        alert.error(`${key}: ${value}`);
      }
    }
    if (message !== prevProps.message ) {
      for (let [key, value] of Object.entries(message)) {
        alert.success(`${value}`);
      }
    }
  }

  render () {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));