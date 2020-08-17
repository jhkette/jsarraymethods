import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { selectMethod, selectAction, fetchPosts, fetchAllPosts } from "../actions";
import { connect } from "react-redux";

class Options extends Component {

  constructor(props){
    super(props)
    this.state = {method: "splice", action: 'adding'}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleType = this.handleType.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
  }
 
  handleSubmit(event) {
    this.props.selectMethod(this.state.method)
    this.props.fetchPosts("adding", this.props.method);
    event.preventDefault();  
  }
  handleChange(event) {
    this.setState({method: event.target.value})
  }

  handleType(event){
    this.props.selectAction(this.state.action)
    
    event.preventDefault(); 
  }
  handleTypeChange(event){
    this.setState({action: event.target.value})
    console.log(this.state.action)
  }
  render() {
    return (
      <div>
       <form onSubmit={this.handleType}>
          <label>Choose a method:</label>
          <select id="arrays" name="arrays" onChange={this.handleTypeChange}>
            <option value="adding">Add</option>
            <option value="adding">Delete</option>
            <option value="adding">Remove an item/items</option>
            <option value="adding">Add an item/items</option>
          </select>
          <input type="submit" value="Submit" />
        </form> 
        <form onSubmit={this.handleSubmit}>
          <label>Choose a method:</label>
          <select id="arrays" name="arrays" onChange={this.handleChange}>
            <option value="splice">Access an item in an array</option>
            <option value="unshift">Iterate over an array</option>
            <option value="push">Remove an item/items</option>
            <option value="concat">Add an item/items</option>
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
    fetchPosts: fetchPosts,
    action: selectAction
    
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectMethod: selectMethod, selectAction: selectAction }, dispatch);
}

// needs to be in this order - mapStateToProps, mapDispatchToProps
export default connect( mapStateToProps, mapDispatchToProps)(Options);
