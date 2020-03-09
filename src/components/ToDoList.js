import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: 'all',
    toggleAllComplete: true
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  updateTodoToShow = s => {
    this.setState({
      todoToShow: s
    });
  };

  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  removeAllTodosThatAreComplete = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.complete)
    }));
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === 'all') {
      todos = this.state.todos;
    } else if (this.state.todoToShow === 'active') {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === 'complete') {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div className="m-auto w-3/4 px-2 py-8 rounded border-2 border-midnightink-headline">
        <h2 className="text-center text-2xl text-midnightink-paragraph m-4 ">
          today's todos
        </h2>
        {/* INPUT NEW TODO ITEM */}
        <ToDoForm onSubmit={this.addTodo} />
        {/* DISPLAY TODO ITEM */}
        {todos.map(todo => (
          <ToDoItem
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <div className="mt-6 text-center">
          <div>
            todos left: {this.state.todos.filter(todo => !todo.complete).length}
          </div>
          <div>
            <button onClick={() => this.updateTodoToShow('all')}>all</button>
            <button onClick={() => this.updateTodoToShow('active')}>
              active
            </button>
            <button onClick={() => this.updateTodoToShow('complete')}>
              complete
            </button>
          </div>
          {this.state.todos.some(todo => todo.complete) ? (
            <div>
              <button onClick={this.removeAllTodosThatAreComplete}>
                remove all complete todos
              </button>
            </div>
          ) : null}
          <div>
            <button
              onClick={() =>
                this.setState(state => ({
                  todos: state.todos.map(todo => ({
                    ...todo,
                    complete: state.toggleAllComplete
                  })),
                  toggleAllComplete: !state.toggleAllComplete
                }))
              }
            >
              toggle all complete: {`${this.state.toggleAllComplete}`}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
