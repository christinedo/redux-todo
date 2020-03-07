import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP
} from '../actions/step_actions';

const initialState = {
  1: {
    id: 1,
    title: 'walk to store',
    body: 'google directions',
    done: false,
    todo_id: 1
  },
  2: {
    id: 2,
    title: 'buy soap',
    body: 'the unscented kind',
    done: false,
    todo_id: 1
  },
  3: {
    id: 3,
    title: 'load dishwasher',
    body: 'pots on the bottom',
    done: true,
    todo_id: 2
  },
  4: {
    id: 4,
    title: 'Go to the pet store',
    body: 'Shop local',
    done: false,
    todo_id: 3
  },
  5: {
    id: 5,
    title: 'Find the dog toy section',
    body: '',
    done: false,
    todo_id: 3
  },
  6: {
    id: 6,
    title: 'Pick a toy',
    body: 'must be very squeaky, soft, and small',
    done: false,
    todo_id: 3
  }
};

const stepsReducer = (state = initialState, action) => {
  let stepsCopy;
  switch (action.type) {
    case RECEIVE_STEPS:
      const newSteps = action.steps.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
      }, {});
      return newSteps;
    case RECEIVE_STEP:
      stepsCopy = Object.assign({}, state);
      const newStep = { [action.step.id]: action.step };
      return { ...stepsCopy, ...newStep };
    case REMOVE_STEP:
      stepsCopy = Object.assign({}, state);
      delete stepsCopy[action.step.id];
      return stepsCopy;
    default:
      return state;
  }
};

export default stepsReducer;
