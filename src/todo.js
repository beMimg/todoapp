import { findTheIndex, save } from './project';

const todosContainer = document.querySelector('.todos-container');
const howManyTodos = document.getElementById('how-many-todos');

class Todo {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
  }
}

const createTodo = (name, arr) => {
  if (arr.some((todo) => todo.name === name) || name.length === 0) {
    return;
  }
  const newTodo = new Todo(name);
  arr.push(newTodo);
  displayHowManyTodos(arr.length);
};

const deleteTodo = (name, arr) => {
  const index = arr.findIndex((todo) => todo.name === name);
  arr.splice(index, 1);
  displayHowManyTodos(arr.length);
};

const editTodo = (prevName, nextName, arr) => {
  console.log(prevName, nextName, arr);
  const index = arr.findIndex((todo) => todo.name === prevName);
  arr[index].name = nextName;
  return;
};

const displayTodo = (arr) => {
  todosContainer.innerHTML = '';
  arr.forEach((todo) => {
    const todoContainer = document.createElement('div');
    todoContainer.classList = 'todo-container';
    todoContainer.innerHTML = `
    <button id="edit-todo-btn" class="edit-btn"></button>
    <button id="delete-todo-btn" class="delete-btn">x</button>
    <h1 class="todo-name">${todo.name}</h1>
  `;
    todosContainer.appendChild(todoContainer);
  });
};

const displayHowManyTodos = (arr) => {
  howManyTodos.textContent = arr;
};

export {
  Todo,
  createTodo,
  deleteTodo,
  editTodo,
  displayTodo,
  displayHowManyTodos,
};
