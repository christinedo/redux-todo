import React from 'react';
import StepListContainer from '../steps/step_list_container';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { removeTodo, todo } = this.props;
    removeTodo(todo);
  }

  render() {
    const { todo } = this.props;
    return (
      <div>
        <p>{todo.body}</p>
        <StepListContainer id={todo.id} />
        <button onClick={this.handleClick}>Delete To-Do</button>
      </div>
    );
  }
}

export default TodoDetailView;
