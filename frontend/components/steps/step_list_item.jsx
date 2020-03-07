import React from 'react';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);

    this.updateStep = this.updateStep.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateStep() {
    const { receiveStep, step } = this.props;
    const stepCopy = Object.assign({}, step);
    stepCopy.done = !stepCopy.done;
    receiveStep(stepCopy);
  }

  handleClick() {
    const { removeStep, step } = this.props;
    removeStep(step);
  }

  render() {
    const { step } = this.props;
    return (
      <li>
        <div>
          <span>{step.title}</span>
          &nbsp;
          <button onClick={this.updateStep}>
            {step.done ? 'Undo' : 'Done'}
          </button>
          &nbsp;
          <button onClick={this.handleClick}>Delete</button>
          <br />
          <span>{step.body}</span>
        </div>
      </li>
    );
  }
}

export default StepListItem;
