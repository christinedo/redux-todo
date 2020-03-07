import React from 'react';
import uniqueId from '../../util/uniqueId';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepValue: '',
      descriptionValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { receiveStep, todo_id } = this.props;
    const newStep = {
      id: uniqueId(),
      title: this.state.stepValue,
      body: this.state.descriptionValue,
      done: false,
      todo_id: todo_id
    };

    receiveStep(newStep);

    this.setState({
      stepValue: '',
      descriptionValue: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Step:</label>
        <input
          name='stepValue'
          type='text'
          value={this.state.stepValue}
          onChange={this.handleChange}
        />
        <br />
        <label>Description:</label>
        <textarea
          name='descriptionValue'
          value={this.state.descriptionValue}
          onChange={this.handleChange}
        />
        <br />
        <input type='submit' value='Create Step' />
      </form>
    );
  }
}

export default StepForm;
