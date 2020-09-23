import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { selectMethod, selectOperation } from "../actions";
import { connect } from "react-redux";

class Options extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  handleChange(event) {
    this.props.selectMethod(event.target.value);
  }

  render() {
    let x;
    if (this.props.allposts) {
      x = this.props.allposts.map((post) => {
        return <option value={post.name}>{post.shortDesc}</option>;
      });
    } else x = "";
    const z = (
      <select id="slct" name="arrays" onChange={this.handleChange} value={this.props.methods}>
        <option value="">...</option>
        {x}
      </select>
    );

    return (
      <div>
        {this.props.operation ? (
          <div className="select-dropdown method">
            <form onSubmit={this.handleSubmit}>
              <label>Do you need to</label>
              {z}
            </form>
          </div>
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
