import React from 'react';
import uniqueId from '../../util/uniqueId';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: '',
      bodyValue: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const { receiveTodo } = this.props;
    const newTodo = {
      id: uniqueId(),
      title: this.state.titleValue,
      body: this.state.bodyValue,
      done: false
    };

    event.preventDefault();

    receiveTodo(newTodo);

    this.setState({
      titleValue: '',
      bodyValue: ''
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:</label>
        <input
          name='titleValue'
          type='text'
          value={this.state.titleValue}
          onChange={this.handleChange}
        />
        <br />
        <label>Body:</label>
        <textarea
          name='bodyValue'
          value={this.state.bodyValue}
          onChange={this.handleChange}
        />
        <br />
        <input type='submit' value='Create To-do' />
      </form>
    );
  }
}

export default TodoForm;
