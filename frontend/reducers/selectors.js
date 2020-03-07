export const getAllTodos = ({ todos }) =>
  Object.keys(todos).map(id => todos[id]);

export const stepsByTodoId = ({ steps }, todoId) => {
  let result = [];
  for (const key in steps) {
    if (steps[key].todo_id == todoId) {
      result.push(steps[key]);
    }
  }
  return result;
};
