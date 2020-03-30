import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addRequestListItem } from '../../actions/requester'

export class RequesterListForm extends Component {
  state = {
    itemName: "",
    amount: "",
  };

  static propTypes = {
    addRequestListItem: PropTypes.func.isRequired
  };

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSubmit = e => {
    e.preventDefault();
    const { itemName, amount } = this.state;
    const requestListItem = {itemName, amount };
    this.props.addRequestListItem(requestListItem);
    this.setState({
      itemName: "",
      amount: "",
    });
  };

  render () {
    const { itemName, amount } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Item</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Item Name</label>
            <input
              className="form-control"
              type="text"
              name="itemName"
              onChange={this.onChange}
              value={itemName}
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              className="form-control"
              type="text"
              name="amount"
              onChange={this.onChange}
              value={amount}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addRequestListItem })(RequesterListForm);