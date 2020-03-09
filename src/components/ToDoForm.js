import React, { Component } from 'react';
import shortid from 'shortid';

class ToDoForm extends Component {
  state = {
    text: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this is the addTodos method
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: ''
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="add a todo..."
        />
        <button onClick={this.handleSubmit}>Add Item</button>
      </form>
    );
  }
}

export default ToDoForm;
