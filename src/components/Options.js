import React, { Component } from "react";

class Options extends Component {

  handleSubmit(event) {
    event.preventDefault();
  }
  handleChange(event){
      console.log(event.target.value)
  }
  render() {
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
          <input type="submit" value="Submit"  />
        </form>
      </div>
    );
  }
}


// const mapDispatchToProps = (state) => {
//     // return { posts: state };
// };
  

export default Options