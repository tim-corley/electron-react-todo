import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: 'all'
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

    let todos_count = this.state.todos.filter(todo => !todo.complete).length;
    let todos_left;
    if (todos_count === 1) {
      todos_left = '1 Item Left';
    } else {
      todos_left = `${todos_count} Items Left`;
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

        <div className="max-w-sm m-auto mt-6 bg-midnightink-stroke rounded overflow-hidden shadow-lg">
          <div className="mt-6 text-center text-midnightink-headline">
            <div>{todos_left}</div>
            <div>
              <div className="px-6 py-4">
                <span className="inline-block bg-midnightink-headline rounded-full px-3 py-1 mx-2 text-sm font-semibold text-midnightink-stroke border border-transparent hover:bg-transparent hover:text-midnightink-button hover:border-midnightink-button rounded-full">
                  <button
                    className="focus:outline-none"
                    onClick={() => this.updateTodoToShow('all')}
                  >
                    All Items
                  </button>
                </span>
                <span className="inline-block bg-midnightink-headline rounded-full px-3 py-1 mx-2 text-sm font-semibold text-midnightink-stroke border border-transparent hover:bg-transparent hover:text-midnightink-button hover:border-midnightink-button rounded-full">
                  <button
                    className="focus:outline-none"
                    onClick={() => this.updateTodoToShow('active')}
                  >
                    Active
                  </button>
                </span>
                <span className="inline-block bg-midnightink-headline rounded-full px-3 py-1 mx-2 text-sm font-semibold text-midnightink-stroke border border-transparent hover:bg-transparent hover:text-midnightink-button hover:border-midnightink-button rounded-full">
                  <button
                    className="focus:outline-none"
                    onClick={() => this.updateTodoToShow('complete')}
                  >
                    Complete
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
