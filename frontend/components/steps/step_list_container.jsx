import { connect } from 'react-redux';
import { receiveStep } from '../../actions/step_actions';
import StepList from './step_list';
import { stepsByTodoId } from '../../reducers/selectors';

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const filteredSteps = stepsByTodoId(state, id);
  const todo_id = id;

  return { filteredSteps, todo_id };
}

const mapDispatchToProps = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step))
});

const StepListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);

export default StepListContainer;
