import React, { Component } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
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
        <div className="flex items-center border-b border-b-2 border-white">
          <div className="flex w-full px-4">
            <input
              className="appearance-none bg-transparent border-none w-full text-midnightink-headline text-xl placeholder-text-indigo-900 mr-3 leading-tight focus:outline-none"
              name="text"
              onChange={this.handleChange}
              value={this.state.text}
              placeholder="add a new todo..."
            />
            <button
              className="w-1/4 px-2 py-4 mb-2"
              onClick={this.handleSubmit}
            >
              <IoIosAddCircleOutline className="flex text-3xl m-auto text-midnightink-button" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ToDoForm;
