import React from 'react';
import StepForm from './step_form';
import StepListItemContainer from './step_list_item_container';

const StepList = ({ filteredSteps, todo_id, receiveStep }) => (
  <div>
    <ul>
      {filteredSteps.map((step, idx) => (
        <StepListItemContainer key={idx} step={step} />
      ))}
    </ul>
    <br />
    <StepForm receiveStep={receiveStep} todo_id={todo_id} />
    <br />
  </div>
);

export default StepList;
