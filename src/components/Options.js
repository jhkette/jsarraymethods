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

  renderText() {
    if (this.props.allposts) {
      return this.props.allposts.map((post) => {
        return <option value={post.name}>{post.shortDesc}</option>;
      });
    }
  }

  render() {
    return (
      <div>
        {/* only render if this.operation */}
        {this.props.operation ? (
          <div className="select-dropdown method">
            <form onSubmit={this.handleSubmit}>
              <label>Do you need to</label>
              <select
                id="slct"
                name="arrays"
                onChange={this.handleChange}
                value={this.props.methods}
              >
                <option value="">...</option>
                {this.renderText()}
              </select>
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

function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectMethod, selectOperation }, dispatch);
}

// needs to be in this order - mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Options);
