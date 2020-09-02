import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectOperation, fetchAllPosts } from "../actions";

class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = { operation: "adding" };
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleType = this.handleType.bind(this);
  }
  handleType(event) {
    event.preventDefault();
  }
  handleTypeChange(event) {
    this.setState({ operation: event.target.value });
    this.props.selectOperation(event.target.value);
    this.props.fetchAllPosts(event.target.value);
  }
  render() {
    return (
      <div className="select-dropdown action">
  
        <form onSubmit={this.handleType}>
          <label>What do you want to do?</label>
          <select className="actions" name="arrays" onChange={this.handleTypeChange}>
            <option value="">...</option>
            <option value="adding">Iterate over an array</option>
            <option value="adding">Find an item in an array</option>
            <option value="adding">Merge an array</option>
            <option value="adding">Access an array item/items</option>
            <option value="adding">Add an item/items</option>
            <option value="deleting">Delete an item/items</option>
            <option value="adding">Other</option>
          </select>
        </form>
      </div>
    );
  }
}

function mapStateToProps() {
  return {
    selectOperation,
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectOperation, fetchAllPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
