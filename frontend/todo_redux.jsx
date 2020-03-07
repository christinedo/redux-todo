import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// for development only
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import { receiveSteps, receiveStep } from './actions/step_actions';
import { getAllTodos } from './reducers/selectors';

const store = configureStore();

// for development only
window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.getAllTodos = getAllTodos;
window.receiveStep = receiveStep;
window.receiveSteps = receiveSteps;

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, content);
});
