import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { selectMethod, fetchPosts } from "../actions";
import { connect } from "react-redux";

class Options extends Component {

  constructor(props){
    super(props)
    this.state = {method: "splice"}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    this.props.selectMethod(this.state.method)
    this.props.fetchPosts("adding", this.props.methods);
    event.preventDefault();  
  }
  handleChange(event) {

    this.setState({method: event.target.value})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Choose a method:</label>
          <select id="arrays" name="arrays" onChange={this.handleChange}>
            <option value="splice">Access an item in an array</option>
            <option value="shift">Iterate over an array</option>
            <option value="splice">Remove an item/items</option>
            <option value="shift">Add an item/items</option>
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
    fetchPosts: fetchPosts
    
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectMethod: selectMethod }, dispatch);
}

// needs to be in this order - mapStateToProps, mapDispatchToProps
export default connect( mapStateToProps, mapDispatchToProps)(Options);
