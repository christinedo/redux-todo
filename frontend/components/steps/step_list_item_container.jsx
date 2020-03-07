import { connect } from 'react-redux';
import { receiveStep, removeStep } from '../../actions/step_actions';
import StepListItem from './step_list_item';

const mapDispatchToProps = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step)),
  removeStep: step => dispatch(removeStep(step))
});

const StepListItemContainer = connect(
  null,
  mapDispatchToProps
)(StepListItem);

export default StepListItemContainer;
