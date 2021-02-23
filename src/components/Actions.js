import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectOperation, fetchAllPosts, selectMethod } from "../actions";

class Actions extends Component {
  constructor(props) {
    super(props);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleType = this.handleType.bind(this);
  }
  handleType(event) {
    event.preventDefault();
  }
  // change to handle if no method is chosen - change to null
  handleTypeChange(event) {
    this.props.selectMethod('');
    this.props.selectOperation(event.target.value);
    this.props.fetchAllPosts(event.target.value);
  }
  render() {
    return (
      <div className="select-dropdown action">
        <form onSubmit={this.handleType}>
          <label>What do you want to do?</label>
          <select
            className="actions"
            name="arrays"
            onChange={this.handleTypeChange}
          >
            <option value="">...</option>
            <option value="iterate">Iterate over an array</option>
            <option value="findone">Find/check for an item</option>
            <option value="findmany">Find/check multiple items</option>
            <option value="concatenate">Concatenate an array</option>
            <option value="adding">Add an item/items</option>
            <option value="deleting">Delete an item/items</option>
            <option value="other">Other</option>
          </select>
        </form>
      </div>
    );
  }
}



// Anything returned from this function will end up as props
function mapDispatchToProps(dispatch) {
  // Whenever selectOperation, fetchAllPosts, selectMethod 
  // is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators(
    { selectOperation, fetchAllPosts, selectMethod },
    dispatch
  );
}

// null is where mapStateToProps would be as a parameter - we do not need this though
export default connect(null, mapDispatchToProps)(Actions);
