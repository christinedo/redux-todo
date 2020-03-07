import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO
} from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dishes',
    body: 'in dishwasher',
    done: true
  },
  3: {
    id: 3,
    title: 'buy Winston a new toy',
    body: 'for being a good boi',
    done: false
  }
};

const todosReducer = (state = initialState, action) => {
  let todosCopy;
  switch (action.type) {
    case RECEIVE_TODOS:
      const newTodos = action.todos.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
      }, {});
      return newTodos;
    case RECEIVE_TODO:
      todosCopy = Object.assign({}, state);
      const newTodo = { [action.todo.id]: action.todo };
      return { ...todosCopy, ...newTodo };
    case REMOVE_TODO:
      todosCopy = Object.assign({}, state);
      delete todosCopy[action.todo.id];
      return todosCopy;
    default:
      return state;
  }
};

export default todosReducer;
