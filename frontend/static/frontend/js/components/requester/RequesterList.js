import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getRequestList, deleteRequestListItem } from "../../actions/requester";


class RequesterList extends Component {
  static propTypes = {
    requestList: PropTypes.array.isRequired,
    getRequestList: PropTypes.func.isRequired,
    deleteRequestListItem : PropTypes.func.isRequired
  };


  componentDidMount () {
    this.props.getRequestList();
  }

  render () {
    return (
      <div>
        <h2>Request List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Amount</th>
              <th/>
            </tr>
          </thead>
          <tbody>
          { this.props.requestList.item.map(requestListItem => (
            <tr key={requestListItem.id}>
              <td>{requestListItem.itemName}</td>
              <td>{requestListItem.amount}</td>
              <td><button onClick={this.props.deleteRequestListItem.bind(this, requestListItem.id)} className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  requestList: state.requestList.requestList,
  requestListItem: state.requestListItem.requestListItem
});

export default connect(mapStateToProps, { getRequestList, deleteRequestListItem})(RequesterList);