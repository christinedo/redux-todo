import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: false
    };

    this.updateTodo = this.updateTodo.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails() {
    this.setState(prevState => ({
      value: !prevState.value
    }));
  }

  updateTodo() {
    const { receiveTodo, todo } = this.props;
    todo.done = !todo.done;
    receiveTodo(todo);
  }

  render() {
    const { todo, removeTodo } = this.props;
    return (
      <li>
        <div>
          <span onClick={this.toggleDetails}>{todo.title}</span>
          &nbsp;
          <button onClick={this.updateTodo}>
            {todo.done ? 'Undo' : 'Done'}
          </button>
        </div>
        {this.state.value && <TodoDetailViewContainer todo={todo} />}
      </li>
    );
  }
}

export default TodoListItem;
