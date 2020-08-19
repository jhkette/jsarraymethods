import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { selectMethod, selectOperation, fetchPosts } from "../actions";
import { connect } from "react-redux";


class Options extends Component {
  constructor(props) {
    super(props);
    this.state = { method: "splice" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.selectMethod(this.state.method);
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({ method: event.target.value });
  }

  render() {
    const x = this.props.allposts.map((post) => {
      return <option value={post.name}>{post.shortDesc}</option>;
    });
    const z = (
      <select id="arrays" name="arrays" onChange={this.handleChange}>
        {x}
      </select>
    );
    
    return (
      <div>
        {this.props.operation ? (
          <form onSubmit={this.handleSubmit}>
            <label>Choose a method:</label>
            {z}
            <input type="submit" value="Submit" />
          </form>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    methods: state.methods,
    operation: state.operation,
    allposts: state.allposts,
  };
};

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectMethod, selectOperation }, dispatch);
}

// needs to be in this order - mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Options);
