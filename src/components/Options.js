import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { selectMethod } from "../actions";
import { connect } from "react-redux";

class Options extends Component {

  constructor(props){
    super(props)
    this.state = {
      method: ""
    }
  }
  handleSubmit(event) {
    this.props.selectMethod(this.state.method)
    event.preventDefault();
  }
  handleChange(event) {

    this.setState({method: event.target.value})
  }
  render() {
    console.log(this.props.selectMethod);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Choose a car:</label>
          <select id="arrays" name="arrays" onChange={this.handleChange}>
            <option value="access">Accessing an item</option>
            <option value="iterate">Iterate </option>
            <option value="delete">Deleting an item</option>
            <option value="add">Adding an item</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps() {
  return {
    method: selectMethod,
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectMethod: selectMethod }, dispatch);
}

export default connect(mapDispatchToProps, mapStateToProps)(Options);
