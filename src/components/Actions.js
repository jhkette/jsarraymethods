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
    this.props.selectOperation(this.state.operation);
    const x = this.props.fetchAllPosts('adding')
    console.log(x, 'allposts')
  }
  render() {
    return (
      <div>
        <form>
          <label>Choose a method:</label>
          <select id="arrays" name="arrays" onChange={this.handleTypeChange}>
            <option value="adding">Add</option>
            <option value="adding">Delete</option>
            <option value="adding">Remove an item/items</option>
            <option value="adding">Add an item/items</option>
          </select>
          <input type="submit" value="Submit1" />
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
